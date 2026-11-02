<script setup lang="ts">
import { ArrowUpRight } from 'lucide-vue-next'
import { useCardTilt } from '../../composables/useCardTilt'

defineProps<{
  number: string
  title: string
  description: string
  tag: string
  image: string
}>()

const { onCardMove, onCardLeave } = useCardTilt(7)
</script>

<template>
  <article
    class="program-card"
    :style="{ '--stagger': `${(Number(number) - 1) * 130}ms` }"
    @mousemove="onCardMove"
    @mouseleave="onCardLeave"
  >
    <img :src="image" :alt="title + ' training'" loading="lazy" />
    <div class="program-shade"></div>
    <div class="program-number">{{ number }}</div>
    <div class="program-content">
      <span class="program-tag">{{ tag }}</span>
      <h3>{{ title }}</h3>
      <p>{{ description }}</p>
      <RouterLink to="/programs" class="round-link" :aria-label="'Explore ' + title">
        <ArrowUpRight :size="19" class="plan-arrow" />
      </RouterLink>
    </div>
  </article>
</template>
