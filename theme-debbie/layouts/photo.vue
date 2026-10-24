<script setup lang="ts">
withDefaults(defineProps<{
  image?: string
  alt?: string
  placeholder?: string
  role?: string
}>(), {
  image: '',
  alt: '',
  placeholder: '',
  role: '',
})
</script>

<template>
  <div class="slidev-layout debbie-photo">
    <div class="debbie-photo__media">
      <img
        v-if="image"
        class="debbie-photo__img"
        :src="image"
        :alt="alt || 'Portrait'"
      >
      <div
        v-else-if="placeholder"
        class="debbie-photo__placeholder"
        role="img"
        :aria-label="placeholder"
      >
        <span>{{ placeholder }}</span>
      </div>
    </div>
    <div class="debbie-photo__copy">
      <slot />
      <p v-if="role" class="debbie-photo__role">{{ role }}</p>
    </div>
  </div>
</template>

<style scoped>
.debbie-photo {
  display: grid;
  grid-template-columns: 340px 1fr;
  gap: 56px;
  align-items: center;
  height: 100%;
  padding: 56px 72px;
  background: var(--debbie-navy);
}

.debbie-photo__media {
  width: 320px;
  height: 320px;
}

.debbie-photo__img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  border: 3px solid #ffffff;
}

.debbie-photo__placeholder {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 24px;
  border: 3px dashed var(--debbie-red);
  background: var(--debbie-navy-deep);
  color: var(--debbie-ink-muted);
  font-size: 28px;
  font-weight: 700;
  line-height: 1.3;
}

.debbie-photo__copy {
  display: flex;
  flex-direction: column;
  gap: 18px;
  min-width: 0;
}

.debbie-photo__copy :deep(h1) {
  font-size: 64px;
  font-weight: 900;
  line-height: 1.05;
  letter-spacing: -0.03em;
}

.debbie-photo__copy :deep(h1 .surname) {
  color: var(--debbie-red);
}

.debbie-photo__copy :deep(p) {
  font-size: 32px;
  font-weight: 400;
  line-height: 1.35;
  color: var(--debbie-ink);
  max-width: 640px;
}

.debbie-photo__role {
  font-size: 28px !important;
  font-weight: 500 !important;
  color: var(--debbie-ink-muted) !important;
}
</style>
