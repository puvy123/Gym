<script setup lang="ts">
defineProps<{
  eyebrow: string
  title: string
  accent: string
  description: string
  leftMeta: string
  rightMeta: string
}>()
</script>

<template>
  <section class="page-hero">
    <div class="page-hero-grid"></div>
    <span class="eyebrow"><span class="eyebrow-line"></span> {{ eyebrow }}</span>
    <h1 class="page-title">
      {{ title }}<br /><span class="green">{{ accent }}</span>
    </h1>
    <p>{{ description }}</p>
    <div class="page-hero-bottom">
      <span>{{ leftMeta }}</span>
      <span>{{ rightMeta }}</span>
    </div>
  </section>
</template>
