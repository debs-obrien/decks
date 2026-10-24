<template>
  <div class="slidev-layout debbie-default">
    <div class="debbie-default__inner">
      <slot />
    </div>
  </div>
</template>

<style scoped>
.debbie-default {
  height: 100%;
  padding: 56px 72px;
  background: var(--debbie-navy);
  color: var(--debbie-ink);
}

.debbie-default__inner {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
}

.debbie-default__inner :deep(h1) {
  font-size: var(--debbie-size-title);
  font-weight: 900;
  line-height: 1.1;
}

.debbie-default__inner :deep(h2) {
  font-size: 44px;
  font-weight: 900;
  line-height: 1.15;
}

.debbie-default__inner :deep(p),
.debbie-default__inner :deep(li) {
  font-size: var(--debbie-size-body);
  font-weight: 400;
  line-height: 1.35;
}

.debbie-default__inner :deep(ol),
.debbie-default__inner :deep(ul) {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 18px;
}

.debbie-default__inner :deep(li) {
  font-weight: 700;
}
</style>
