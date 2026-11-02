<script setup lang="ts">
import { Check } from 'lucide-vue-next'
import { useCardTilt } from '../../composables/useCardTilt'
import type { ValueItem } from '../../types/gym'

defineProps<{
  value: ValueItem
  index: number
}>()

const { onCardMove, onCardLeave } = useCardTilt(7)
</script>

<template>
  <article
    class="value-card"
    :style="{ '--stagger': `${index * 130}ms` }"
    @mousemove="onCardMove"
    @mouseleave="onCardLeave"
  >
    <span>{{ value.n }} / OUR VALUES</span>
    <div class="value-icon"><Check :size="22" /></div>
    <h3>{{ value.title }}</h3>
    <p>{{ value.desc }}</p>
  </article>
</template>
