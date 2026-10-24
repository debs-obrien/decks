<script setup lang="ts">
withDefaults(defineProps<{
  event?: string
  title?: string
  subtitle?: string
  author?: string
  site?: string
}>(), {
  event: '',
  title: '',
  subtitle: '',
  author: "Debbie O'Brien",
  site: 'debbie.codes',
})
</script>

<template>
  <div class="slidev-layout debbie-cover">
    <p v-if="event" class="debbie-cover__event">{{ event }}</p>

    <div class="debbie-cover__body">
      <slot>
        <h1 v-if="title" class="debbie-cover__title">{{ title }}</h1>
        <p v-if="subtitle" class="debbie-cover__subtitle">{{ subtitle }}</p>
      </slot>
    </div>

    <footer class="debbie-cover__footer">
      <p class="debbie-cover__name" aria-label="Debbie O'Brien">
        <span class="debbie-cover__given">Debbie</span>
        <span class="debbie-cover__surname">O'Brien</span>
      </p>
      <p class="debbie-cover__site">{{ site }}</p>
    </footer>
  </div>
</template>

<style scoped>
.debbie-cover {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 48px 72px 40px;
  background: var(--debbie-navy);
  height: 100%;
}

.debbie-cover__event {
  font-size: 28px;
  font-weight: 500;
  color: var(--debbie-ink-muted);
  letter-spacing: 0.02em;
}

.debbie-cover__body {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  max-width: 1080px;
}

.debbie-cover__title,
.debbie-cover__body :deep(h1) {
  font-size: 72px;
  font-weight: 900;
  line-height: 1.05;
  letter-spacing: -0.03em;
  color: var(--debbie-ink);
}

.debbie-cover__subtitle,
.debbie-cover__body :deep(p) {
  font-size: 32px;
  font-weight: 400;
  color: var(--debbie-ink-muted);
  line-height: 1.3;
  max-width: 900px;
}

.debbie-cover__footer {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 24px;
  border-top: 2px solid var(--debbie-red);
  padding-top: 18px;
}

.debbie-cover__name {
  font-size: 28px;
  font-weight: 900;
  letter-spacing: 0.04em;
  text-transform: uppercase;
}

.debbie-cover__given {
  color: #ffffff;
}

.debbie-cover__surname {
  color: var(--debbie-red);
  margin-left: 0.35em;
}

.debbie-cover__site {
  font-size: 24px;
  font-weight: 500;
  color: var(--debbie-ink-muted);
}
</style>
