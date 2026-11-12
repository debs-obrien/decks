<script setup lang="ts">
withDefaults(defineProps<{
  beforeLabel?: string
  afterLabel?: string
}>(), {
  beforeLabel: 'Before',
  afterLabel: 'After',
})
</script>

<template>
  <div class="slidev-layout debbie-ba">
    <div class="debbie-ba__col debbie-ba__col--before">
      <p class="debbie-ba__label">{{ beforeLabel }}</p>
      <div class="debbie-ba__content">
        <slot name="before" />
      </div>
    </div>
    <div class="debbie-ba__divider" aria-hidden="true">
      <span>→</span>
    </div>
    <div class="debbie-ba__col debbie-ba__col--after">
      <p class="debbie-ba__label debbie-ba__label--after">{{ afterLabel }}</p>
      <div class="debbie-ba__content">
        <slot name="after" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.debbie-ba {
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: stretch;
  gap: 0;
  height: 100%;
  padding: 48px 56px;
  background: var(--debbie-navy);
}

.debbie-ba__col {
  display: flex;
  flex-direction: column;
  gap: 16px;
  min-width: 0;
  padding: 12px 20px;
}

.debbie-ba__label {
  font-size: 28px;
  font-weight: 700;
  color: var(--debbie-ink-muted);
  text-transform: uppercase;
  letter-spacing: 0.06em;
}

.debbie-ba__label--after {
  color: var(--debbie-red);
}

.debbie-ba__content {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 40px;
  font-weight: 700;
  line-height: 1.25;
}

.debbie-ba__content :deep(p),
.debbie-ba__content :deep(code) {
  font-size: 36px;
  line-height: 1.3;
}

.debbie-ba__content :deep(code) {
  font-family: var(--debbie-font-mono);
  color: var(--debbie-ink);
}

.debbie-ba__col--before .debbie-ba__content {
  color: var(--debbie-ink-muted);
}

.debbie-ba__col--after .debbie-ba__content {
  color: var(--debbie-ink);
}

.debbie-ba__divider {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 8px;
  color: var(--debbie-red);
  font-size: 40px;
  font-weight: 900;
}
</style>
