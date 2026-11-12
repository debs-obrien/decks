<script setup lang="ts">
withDefaults(defineProps<{
  tone?: 'navy' | 'paper'
}>(), {
  tone: 'navy',
})
</script>

<template>
  <div class="slidev-layout debbie-statement" :data-tone="tone">
    <div class="debbie-statement__inner">
      <slot />
    </div>
    <div class="debbie-statement__rule" aria-hidden="true" />
  </div>
</template>

<style scoped>
.debbie-statement {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 64px 80px 72px;
  height: 100%;
  text-align: center;
  background: var(--debbie-navy);
  color: var(--debbie-ink);
  position: relative;
}

.debbie-statement[data-tone='paper'] {
  background: var(--debbie-paper);
  color: var(--debbie-slate);
}

.debbie-statement__inner {
  max-width: 1100px;
  width: 100%;
}

.debbie-statement__inner :deep(h1),
.debbie-statement__inner :deep(p.lead),
.debbie-statement__inner :deep(> p:first-child) {
  font-size: var(--debbie-size-statement);
  font-weight: 900;
  line-height: 1.05;
  letter-spacing: -0.035em;
}

.debbie-statement__inner :deep(p) {
  font-size: 40px;
  font-weight: 500;
  line-height: 1.25;
}

.debbie-statement__inner :deep(p + p) {
  margin-top: 18px;
}

.debbie-statement__inner :deep(mark) {
  color: var(--debbie-red);
  background: transparent;
}

.debbie-statement__rule {
  position: absolute;
  left: 80px;
  right: 80px;
  bottom: 36px;
  height: 3px;
  background: var(--debbie-red);
}

.debbie-statement[data-tone='paper'] .debbie-statement__rule {
  background: var(--debbie-red);
}
</style>
