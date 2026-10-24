<script setup>
import { computed, onMounted, onUnmounted, ref, watch } from 'vue'
import { useNav } from '@slidev/client'
import { CueMatcher } from '../lib/cue-matcher.js'
import { extractCuesFromDeckMarkdown } from '../lib/parse-deck-cues.js'
import { createSpeechListener } from '../lib/speech.js'
import slidesRaw from '../slides.md?raw'

const { currentPage, go } = useNav()

const enabled = ref(false)
const listening = ref(false)
const mode = ref('off')
const errorText = ref('')
const progress = ref(0)

/** @type {import('vue').Ref<CueMatcher | null>} */
const matcher = ref(null)
let speech = null
/** When true, the next page change came from voice (do not reset matcher). */
let voiceNavigating = false

function rebuildMatcher() {
  const phrases = extractCuesFromDeckMarkdown(slidesRaw)
  const index = Math.max(0, (currentPage.value || 1) - 1)
  const next = new CueMatcher(phrases)
  next.setSlideIndex(index)
  matcher.value = next
}

function applyAdvance(result) {
  if (result.advanceTo == null) {
    progress.value = result.progress || 0
    return
  }
  progress.value = result.progress || 1
  const page = result.advanceTo + 1
  if (page === currentPage.value) return
  voiceNavigating = true
  go(page)
  queueMicrotask(() => {
    voiceNavigating = false
  })
}

function onSpeechResult({ finalText, interimText }) {
  if (!enabled.value || !matcher.value) return
  const result = matcher.value.ingest({
    finalText: finalText || '',
    interimText: interimText || '',
  })
  applyAdvance(result)
}

function setEnabled(on) {
  enabled.value = on
  errorText.value = ''
  if (!speech) return
  if (on) {
    rebuildMatcher()
    speech.start()
  }
  else {
    speech.stop()
    listening.value = false
    progress.value = 0
  }
}

function toggle() {
  setEnabled(!enabled.value)
}

function onKeydown(event) {
  if (event.defaultPrevented) return
  if (event.metaKey || event.ctrlKey || event.altKey) return
  const tag = (event.target && event.target.tagName) || ''
  if (/^(INPUT|TEXTAREA|SELECT)$/i.test(tag)) return
  if (event.key === 'v' || event.key === 'V') {
    event.preventDefault()
    toggle()
  }
}

watch(currentPage, (page) => {
  if (!matcher.value) return
  const index = Math.max(0, (page || 1) - 1)
  if (voiceNavigating) return
  // Clicker / keyboard always wins: realign and clear hearing.
  matcher.value.setSlideIndex(index)
  progress.value = 0
})

const statusLabel = computed(() => {
  if (!enabled.value) return 'Voice off'
  if (mode.value === 'unsupported') return 'Unsupported browser'
  if (mode.value === 'on-device') return 'on-device'
  if (mode.value === 'online') return 'online'
  return listening.value ? 'listening' : 'starting'
})

const cueHint = computed(() => {
  const m = matcher.value
  if (!m) return ''
  const cue = m.cues[m.slideIndex]
  if (!cue?.phrase) return 'No spoken cue (clicker only)'
  return cue.phrase
})

onMounted(() => {
  rebuildMatcher()
  speech = createSpeechListener({
    onResult: onSpeechResult,
    onMode: (m) => {
      mode.value = m
    },
    onStart: () => {
      listening.value = true
    },
    onEnd: () => {
      listening.value = false
    },
    onError: ({ error, message }) => {
      if (error === 'not-allowed') {
        errorText.value = 'Mic permission denied'
        setEnabled(false)
        return
      }
      if (error === 'language-not-supported') {
        errorText.value = message || 'Falling back to online'
        return
      }
      if (error === 'start-failed') {
        errorText.value = 'Could not start speech recognition'
        setEnabled(false)
      }
    },
  })
  window.addEventListener('keydown', onKeydown)
})

onUnmounted(() => {
  window.removeEventListener('keydown', onKeydown)
  speech?.stop()
})
</script>

<template>
  <div class="voice-cue-root" aria-live="polite">
    <button
      type="button"
      class="voice-cue-toggle"
      :class="{ on: enabled, listening: enabled && listening }"
      :title="enabled ? 'Turn voice cues off (V)' : 'Turn voice cues on (V)'"
      @click="toggle"
    >
      <span class="voice-cue-dot" :data-on="enabled && listening ? '1' : '0'" />
      <span class="voice-cue-label">Voice</span>
      <span class="voice-cue-state">{{ enabled ? 'on' : 'off' }}</span>
    </button>
    <div v-if="enabled" class="voice-cue-meta">
      <span class="voice-cue-mode">{{ statusLabel }}</span>
      <span v-if="progress > 0" class="voice-cue-progress">{{ Math.round(progress * 100) }}%</span>
      <span class="voice-cue-hint">{{ cueHint }}</span>
      <span v-if="errorText" class="voice-cue-error">{{ errorText }}</span>
    </div>
  </div>
</template>
