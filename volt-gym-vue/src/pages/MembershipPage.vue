<script setup lang="ts">
import { ref } from 'vue'
import { Minus, Plus } from 'lucide-vue-next'
import PageHero from '../components/layout/PageHero.vue'
import CtaBanner from '../components/layout/CtaBanner.vue'
import SectionHeading from '../components/SectionHeading.vue'
import MembershipCard from '../components/cards/MembershipCard.vue'
import { membershipPlans, membershipFaqs } from '../data/gymData'

const annual = ref(false)
const openedFaq = ref(0)
</script>

<template>
  <div class="inner-page">
    <PageHero
      eyebrow="YOUR GOALS ARE WORTH IT"
      title="INVEST IN"
      accent="YOURSELF."
      description="Clear pricing. Real value. Choose the level of support that gets you moving — and keep your momentum."
      left-meta="NO HIDDEN FEES IN THIS MOCKUP"
      right-meta="CHOOSE YOUR PLAN ↓"
    />

    <section class="section-wrap pricing-section">
      <SectionHeading
        kicker="MEMBERSHIP OPTIONS"
        title="YOUR PLAN."
        accent="YOUR PACE."
        description="Every membership gets you access to a space built for progress."
        centered
      />
      <div class="billing-toggle">
        <span :class="{ active: !annual }">MONTHLY</span>
        <button
          class="toggle-switch"
          :class="{ on: annual }"
          @click="annual = !annual"
          :aria-label="annual ? 'Switch to monthly billing' : 'Switch to annual billing'"
        >
          <span></span>
        </button>
        <span :class="{ active: annual }">ANNUAL <b>SAVE 15%</b></span>
      </div>

      <div class="pricing-grid">
        <MembershipCard
          v-for="(p, idx) in membershipPlans"
          :key="p.n"
          :plan="p"
          :annual="annual"
          :index="idx"
        />
      </div>

      <p class="pricing-disclaimer">
        * Illustrative prices for this UI demo. Confirm actual pricing, terms, taxes, and availability before publishing.
      </p>
    </section>

    <section class="faq-section section-wrap">
      <div>
        <SectionHeading
          kicker="GOOD TO KNOW"
          title="QUESTIONS?"
          accent="ANSWERED."
          description="A few things people usually want to know before they get started."
        />
      </div>
      <div class="faq-list">
        <article
          v-for="(faq, i) in membershipFaqs"
          :key="faq.q"
          class="faq-item"
          :class="{ open: openedFaq === i }"
        >
          <button @click="openedFaq = openedFaq === i ? -1 : i">
            <span>{{ faq.q }}</span>
            <component :is="openedFaq === i ? Minus : Plus" :size="19" />
          </button>
          <p v-if="openedFaq === i">{{ faq.a }}</p>
        </article>
      </div>
    </section>

    <CtaBanner
      eyebrow="NO PRESSURE. JUST A FIRST STEP."
      title="COME SEE"
      accent="FOR YOURSELF."
      description="Visit the gym, meet the team, and ask anything you need to know."
      button-text="BOOK A TOUR"
    />
  </div>
</template>
