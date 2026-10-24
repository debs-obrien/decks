<script setup lang="ts">
/**
 * Hand-drawn red mark for screenshots (Direction B light touch).
 * Position with percentages of the parent (usually the full-bleed shot frame).
 */
withDefaults(defineProps<{
  type?: 'circle' | 'underline'
  /** left % */
  x?: number | string
  /** top % */
  y?: number | string
  /** width % */
  w?: number | string
  /** height % (circle); underline uses a fixed stroke height */
  h?: number | string
  label?: string
}>(), {
  type: 'circle',
  x: 50,
  y: 50,
  w: 28,
  h: 18,
  label: '',
})
</script>

<template>
  <div
    class="red-mark"
    :class="`red-mark--${type}`"
    :style="{
      left: `${x}%`,
      top: `${y}%`,
      width: `${w}%`,
      height: type === 'underline' ? '18px' : `${h}%`,
    }"
    :aria-label="label || undefined"
    aria-hidden="true"
  >
    <svg
      v-if="type === 'circle'"
      class="red-mark__svg"
      viewBox="0 0 200 120"
      preserveAspectRatio="none"
    >
      <!-- imperfect oval, two overlapping strokes for pen feel -->
      <path
        d="M18 62 C22 18, 178 10, 186 58 C192 92, 28 112, 18 62 Z"
        fill="none"
        stroke="var(--debbie-red)"
        stroke-width="5"
        stroke-linecap="round"
        vector-effect="non-scaling-stroke"
      />
      <path
        d="M24 58 C30 24, 170 18, 180 60 C186 88, 36 104, 24 58 Z"
        fill="none"
        stroke="var(--debbie-red)"
        stroke-width="2.5"
        stroke-linecap="round"
        opacity="0.7"
        vector-effect="non-scaling-stroke"
      />
    </svg>
    <svg
      v-else
      class="red-mark__svg"
      viewBox="0 0 200 24"
      preserveAspectRatio="none"
    >
      <path
        d="M4 14 C40 4, 90 18, 130 10 C160 4, 190 16, 196 12"
        fill="none"
        stroke="var(--debbie-red)"
        stroke-width="5"
        stroke-linecap="round"
        vector-effect="non-scaling-stroke"
      />
    </svg>
  </div>
</template>

<style scoped>
.red-mark {
  position: absolute;
  z-index: 3;
  pointer-events: none;
  transform: translate(-50%, -50%);
}

.red-mark--underline {
  transform: translate(-50%, 0);
  height: 18px !important;
}

.red-mark__svg {
  width: 100%;
  height: 100%;
  overflow: visible;
  display: block;
}
</style>
