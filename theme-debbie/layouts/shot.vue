<script setup lang="ts">
withDefaults(defineProps<{
  image?: string
  alt?: string
  caption?: string
  tone?: 'navy' | 'paper'
  /**
   * Crop mode:
   * - cover: object-fit cover + focus (default)
   * - zoom: absolute img with width/left/top % (tight proof crops)
   */
  mode?: 'cover' | 'zoom'
  /** object-position when mode=cover, e.g. "50% 20%" */
  focus?: string
  /** CSS scale() when mode=cover (avoid prop name `zoom`; Slidev reserves it) */
  coverScale?: number | string
  /** width % of the frame when mode=zoom (e.g. 165) */
  imgWidth?: number | string
  /** left % of img when mode=zoom */
  offsetX?: number | string
  /** top % of img when mode=zoom */
  offsetY?: number | string
}>(), {
  image: '',
  alt: '',
  caption: '',
  tone: 'paper',
  mode: 'cover',
  focus: '50% 35%',
  coverScale: 1,
  imgWidth: 100,
  offsetX: 0,
  offsetY: 0,
})
</script>

<template>
  <div class="slidev-layout debbie-shot" :data-tone="tone" :data-mode="mode">
    <div class="debbie-shot__frame">
      <img
        v-if="image && mode === 'cover'"
        class="debbie-shot__img debbie-shot__img--cover"
        :src="image"
        :alt="alt"
        :style="{
          objectPosition: focus,
          transform: `scale(${coverScale})`,
        }"
      >
      <img
        v-else-if="image"
        class="debbie-shot__img debbie-shot__img--zoom"
        :src="image"
        :alt="alt"
        :style="{
          width: `${imgWidth}%`,
          left: `${offsetX}%`,
          top: `${offsetY}%`,
        }"
      >
      <slot />
    </div>
    <p v-if="caption" class="debbie-shot__caption">{{ caption }}</p>
  </div>
</template>

<style scoped>
.debbie-shot {
  position: relative;
  height: 100%;
  width: 100%;
  padding: 0;
  margin: 0;
  background: var(--debbie-paper);
  overflow: hidden;
}

.debbie-shot[data-tone='navy'] {
  background: var(--debbie-navy);
}

.debbie-shot__frame {
  position: absolute;
  inset: 0;
  overflow: hidden;
}

.debbie-shot__img--cover {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transform-origin: center center;
}

.debbie-shot__img--zoom {
  position: absolute;
  max-width: none;
  max-height: none;
  height: auto;
  display: block;
}

.debbie-shot__caption {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  margin: 0;
  padding: 14px 28px;
  font-size: var(--debbie-size-caption);
  font-weight: 700;
  line-height: 1.2;
  color: #ffffff;
  background: rgba(9, 26, 40, 0.88);
  z-index: 2;
}
</style>
