<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { ArrowUpRight } from 'lucide-vue-next'

defineProps<{
  eyebrow: string
  title: string
  accent: string
  description: string
  buttonText: string
  to?: string
}>()
</script>

<template>
  <section class="home-cta">
    <div>
      <span class="eyebrow"><span class="eyebrow-line"></span> {{ eyebrow }}</span>
      <h2>
        {{ title }} <span class="green">{{ accent }}</span>
      </h2>
      <p>{{ description }}</p>
    </div>
    <RouterLink :to="to || '/contact'" class="btn-primary">
      {{ buttonText }} <ArrowUpRight :size="18" />
    </RouterLink>
  </section>
</template>
