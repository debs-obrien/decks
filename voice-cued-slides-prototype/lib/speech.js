/**
 * Chrome Web Speech API wrapper: continuous, interim results,
 * processLocally (on-device) when supported, with online fallback.
 */

/**
 * @typedef {'on-device' | 'online' | 'unsupported' | 'off'} SpeechMode
 */

/**
 * @typedef {object} SpeechHandlers
 * @property {(update: { finalText: string, interimText: string }) => void} [onResult]
 * @property {(err: { error: string, message?: string }) => void} [onError]
 * @property {(mode: SpeechMode) => void} [onMode]
 * @property {() => void} [onStart]
 * @property {() => void} [onEnd]
 */

export function getSpeechRecognitionConstructor() {
  if (typeof window === 'undefined') return null
  return window.SpeechRecognition || window.webkitSpeechRecognition || null
}

/**
 * @param {SpeechHandlers} [handlers]
 */
export function createSpeechListener(handlers = {}) {
  const Ctor = getSpeechRecognitionConstructor()
  /** @type {SpeechMode} */
  let mode = 'off'
  let recognition = null
  let wanted = false
  let restartTimer = null

  function clearRestart() {
    if (restartTimer != null) {
      clearTimeout(restartTimer)
      restartTimer = null
    }
  }

  /**
   * @param {boolean} processLocally
   */
  function build(processLocally) {
    if (!Ctor) return null
    const r = new Ctor()
    r.continuous = true
    r.interimResults = true
    r.lang = 'en-US'
    try {
      r.processLocally = processLocally
    }
    catch {
      // Older Chromium: property may be missing or read-only.
    }
    return r
  }

  /**
   * @param {InstanceType<NonNullable<ReturnType<typeof getSpeechRecognitionConstructor>>>} r
   */
  function wire(r) {
    r.onresult = (event) => {
      let finalText = ''
      let interimText = ''
      for (let i = event.resultIndex; i < event.results.length; i++) {
        const piece = event.results[i][0]?.transcript || ''
        if (event.results[i].isFinal) finalText += `${piece} `
        else interimText += `${piece} `
      }
      handlers.onResult?.({
        finalText: finalText.trim(),
        interimText: interimText.trim(),
      })
    }

    r.onerror = (event) => {
      const error = event.error || 'unknown'
      // language-not-supported: local pack missing → fall back to online
      if (error === 'language-not-supported' && mode === 'on-device') {
        handlers.onError?.({
          error,
          message: 'On-device model unavailable; falling back to online recognition.',
        })
        stopInternal(false)
        startOnline()
        return
      }
      if (error === 'aborted' || error === 'no-speech') return
      handlers.onError?.({ error, message: event.message })
    }

    r.onstart = () => handlers.onStart?.()
    r.onend = () => {
      handlers.onEnd?.()
      // Chrome stops after silence; keep listening while toggled on.
      if (wanted) {
        clearRestart()
        restartTimer = setTimeout(() => {
          if (!wanted || !recognition) return
          try {
            recognition.start()
          }
          catch {
            // Already started.
          }
        }, 200)
      }
    }
  }

  function startOnline() {
    recognition = build(false)
    if (!recognition) {
      mode = 'unsupported'
      handlers.onMode?.(mode)
      return
    }
    mode = 'online'
    wire(recognition)
    handlers.onMode?.(mode)
    try {
      recognition.start()
    }
    catch (err) {
      handlers.onError?.({ error: 'start-failed', message: String(err) })
    }
  }

  function startLocal() {
    recognition = build(true)
    if (!recognition) {
      mode = 'unsupported'
      handlers.onMode?.(mode)
      return
    }
    mode = 'on-device'
    wire(recognition)
    handlers.onMode?.(mode)
    try {
      recognition.start()
    }
    catch (err) {
      // Some builds throw synchronously when local pack is missing.
      handlers.onError?.({
        error: 'language-not-supported',
        message: String(err),
      })
      stopInternal(false)
      startOnline()
    }
  }

  /**
   * @param {boolean} [clearWanted=true]
   */
  function stopInternal(clearWanted = true) {
    clearRestart()
    if (clearWanted) wanted = false
    const r = recognition
    recognition = null
    if (!r) return
    try {
      r.onresult = null
      r.onerror = null
      r.onend = null
      r.onstart = null
      r.stop()
    }
    catch {
      // ignore
    }
  }

  return {
    get mode() {
      return mode
    },
    get supported() {
      return Boolean(Ctor)
    },
    start() {
      wanted = true
      stopInternal(false)
      wanted = true
      if (!Ctor) {
        mode = 'unsupported'
        handlers.onMode?.(mode)
        return
      }
      startLocal()
    },
    stop() {
      stopInternal(true)
      mode = 'off'
      handlers.onMode?.(mode)
    },
    toggle() {
      if (wanted && mode !== 'off') this.stop()
      else this.start()
    },
  }
}
