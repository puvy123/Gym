<script setup lang="ts">
import { Check } from 'lucide-vue-next'
import { useCardTilt } from '../../composables/useCardTilt'
import type { TeamHighlight } from '../../types/gym'

defineProps<{
  item: TeamHighlight
  index: number
}>()

const { onCardMove, onCardLeave } = useCardTilt(6)
</script>

<template>
  <article
    class="team-life-card"
    :style="{ '--stagger': `${index * 130}ms` }"
    @mousemove="onCardMove"
    @mouseleave="onCardLeave"
  >
    <div class="team-life-media">
      <img :src="item.image" :alt="item.title" loading="lazy" />
      <div class="team-life-shade"></div>
      <span class="team-life-badge">{{ item.n }} / {{ item.tag }}</span>
      <div class="team-life-icon">
        <component :is="item.icon" :size="20" />
      </div>
    </div>

    <div class="team-life-body">
      <h3>{{ item.title }}</h3>
      <p class="team-life-subtitle">{{ item.subtitle }}</p>
      <p class="team-life-desc">{{ item.desc }}</p>
      <ul class="check-list team-life-points">
        <li v-for="(pt, pIdx) in item.points" :key="pt" :style="{ '--f-delay': `${pIdx * 45}ms` }">
          <span><Check :size="14" class="feature-check" /></span>
          {{ pt }}
        </li>
      </ul>
    </div>
  </article>
</template>
