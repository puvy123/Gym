<script setup lang="ts">
import { ArrowUpRight, Check } from 'lucide-vue-next'
import { useCardTilt } from '../../composables/useCardTilt'
import type { ProgramDetailItem } from '../../types/gym'

defineProps<{
  program: ProgramDetailItem
  index: number
  total?: string
}>()

const { onCardMove, onCardLeave } = useCardTilt(4)
</script>

<template>
  <article
    class="program-detail"
    :style="{ '--stagger': `${index * 130}ms` }"
    @mousemove="onCardMove"
    @mouseleave="onCardLeave"
  >
    <div class="program-detail-image">
      <img :src="program.image" :alt="program.title" loading="lazy" />
      <span>{{ program.n }} / {{ total || '04' }}</span>
    </div>
    <div class="program-detail-copy">
      <span class="eyebrow"><span class="eyebrow-line"></span>{{ program.tag }}</span>
      <h2>{{ program.title }}</h2>
      <p>{{ program.desc }}</p>
      <ul class="check-list">
        <li v-for="(d, dIdx) in program.details" :key="d" :style="{ '--f-delay': `${dIdx * 45}ms` }">
          <span><Check :size="14" class="feature-check" /></span>{{ d }}
        </li>
      </ul>
      <RouterLink to="/contact" class="text-link">
        FIND YOUR SESSION <ArrowUpRight :size="17" class="plan-arrow" />
      </RouterLink>
    </div>
  </article>
</template>
