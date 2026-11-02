<script setup lang="ts">
import { Check, X, Sparkles, ArrowUpRight } from 'lucide-vue-next'
import { useCardTilt } from '../../composables/useCardTilt'
import type { MembershipPlan } from '../../types/gym'

defineProps<{
  plan: MembershipPlan
  annual: boolean
  index: number
}>()

const { onCardMove, onCardLeave } = useCardTilt(7)
</script>

<template>
  <article
    class="pricing-card"
    :class="{ featured: plan.featured }"
    :style="{ '--stagger': `${index * 130}ms` }"
    @mousemove="onCardMove"
    @mouseleave="onCardLeave"
  >
    <div v-if="plan.featured" class="popular-tag">MOST POPULAR</div>
    <span class="plan-tier">{{ plan.tierLabel }}</span>
    <h3>{{ plan.name }}</h3>
    <span class="plan-aka">{{ plan.subName }}</span>
    <p class="pricing-desc">{{ plan.desc }}</p>

    <Transition name="price-flip" mode="out-in">
      <div :key="annual ? 'annual' : 'monthly'" class="plan-price">
        ${{ Math.round(plan.monthly * (annual ? 0.85 : 1)) }}<span>/ month</span>
      </div>
    </Transition>

    <p class="billing-note">
      {{ annual ? 'Billed annually · 15% saving applied' : 'Billed monthly · cancel terms apply' }}
    </p>

    <RouterLink to="/contact" class="btn-plan" :class="{ 'btn-plan-primary': plan.featured }">
      <span>CHOOSE {{ plan.name }}</span>
      <ArrowUpRight :size="17" class="plan-arrow" />
    </RouterLink>

    <div class="feature-divider"></div>
    <span class="feature-label">WHAT'S INCLUDED</span>
    <ul class="pricing-features">
      <li v-for="(f, fIdx) in plan.included" :key="f" :style="{ '--f-delay': `${fIdx * 45}ms` }">
        <Check :size="16" class="feature-check" />
        <span>{{ f }}</span>
      </li>
    </ul>

    <template v-if="plan.perks && plan.perks.length">
      <div class="feature-subdivider"></div>
      <span class="feature-label perks-label">MEMBER PERKS</span>
      <ul class="pricing-features perks-list">
        <li
          v-for="(perk, pIdx) in plan.perks"
          :key="perk"
          :style="{ '--f-delay': `${(plan.included.length + pIdx) * 45}ms` }"
        >
          <Sparkles :size="15" class="feature-check" />
          <span>{{ perk }}</span>
        </li>
      </ul>
    </template>

    <template v-if="plan.excluded && plan.excluded.length">
      <div class="feature-subdivider"></div>
      <span class="feature-label excluded-label">WHAT'S EXCLUDED</span>
      <ul class="pricing-features excluded-list">
        <li
          v-for="(ex, eIdx) in plan.excluded"
          :key="ex"
          :style="{ '--f-delay': `${(plan.included.length + eIdx) * 45}ms` }"
        >
          <X :size="15" class="feature-exclude" />
          <span>{{ ex }}</span>
        </li>
      </ul>
    </template>
  </article>
</template>
