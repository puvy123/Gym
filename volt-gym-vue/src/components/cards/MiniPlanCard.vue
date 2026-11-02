<script setup lang="ts">
import { ArrowUpRight } from 'lucide-vue-next'
import { useCardTilt } from '../../composables/useCardTilt'
import type { MembershipPlan } from '../../types/gym'

defineProps<{
  plan: MembershipPlan
  index: number
}>()

const { onCardMove, onCardLeave } = useCardTilt(7)
</script>

<template>
  <article
    class="mini-plan"
    :class="{ featured: plan.featured }"
    :style="{ '--stagger': `${index * 130}ms` }"
    @mousemove="onCardMove"
    @mouseleave="onCardLeave"
  >
    <span v-if="plan.featured" class="popular-tag">MOST POPULAR</span>
    <span class="plan-tier">{{ plan.shortTierLabel }}</span>
    <h3>{{ plan.name }}</h3>
    <span class="plan-aka">{{ plan.subName }}</span>
    <p>{{ plan.shortDesc }}</p>
    <div class="plan-price">${{ plan.monthly }}<span>/ month</span></div>
    <RouterLink to="/membership" class="plan-link">
      VIEW PLAN <ArrowUpRight :size="16" class="plan-arrow" />
    </RouterLink>
  </article>
</template>
