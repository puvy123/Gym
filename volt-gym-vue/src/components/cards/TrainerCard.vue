<script setup lang="ts">
import { Instagram } from 'lucide-vue-next'
import { useCardTilt } from '../../composables/useCardTilt'
import type { Trainer } from '../../types/gym'

defineProps<{
  trainer: Trainer
  index: number
  total?: string
}>()

const { onCardMove, onCardLeave } = useCardTilt(7)
</script>

<template>
  <article
    class="trainer-card"
    :style="{ '--stagger': `${index * 110}ms` }"
    @mousemove="onCardMove"
    @mouseleave="onCardLeave"
  >
    <div class="trainer-photo">
      <img :src="trainer.image" :alt="trainer.name" loading="lazy" />
      <span class="trainer-index">{{ trainer.number }} / {{ total || '08' }}</span>
      <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" class="trainer-social" aria-label="Instagram">
        <Instagram :size="17" />
      </a>
    </div>
    <div class="trainer-info">
      <span class="eyebrow">{{ trainer.role }}</span>
      <h3>{{ trainer.name }}</h3>
      <p>{{ trainer.focus }}</p>
    </div>
  </article>
</template>
