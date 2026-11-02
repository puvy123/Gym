<script setup lang="ts">
defineProps<{ kicker: string; title: string; accent?: string; description?: string; centered?: boolean }>()
</script>
<template>
  <div class="section-heading" :class="{ centered }">
    <span class="eyebrow"><span class="eyebrow-line"></span>{{ kicker }}</span>
    <h2 class="display-title">{{ title }} <span v-if="accent" class="green">{{ accent }}</span></h2>
    <p v-if="description" class="section-description">{{ description }}</p>
  </div>
</template>