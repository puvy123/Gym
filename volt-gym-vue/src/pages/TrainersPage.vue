<script setup lang="ts">
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'
import { ArrowUpRight, ChevronLeft, ChevronRight } from 'lucide-vue-next'
import PageHero from '../components/layout/PageHero.vue'
import SectionHeading from '../components/SectionHeading.vue'
import TrainerCard from '../components/cards/TrainerCard.vue'
import { trainersList, contactInfo } from '../data/gymData'
import type { Trainer } from '../types/gym'

const pageSize = 4
const trainerPages = computed(() => {
  const pages: Trainer[][] = []
  for (let i = 0; i < trainersList.length; i += pageSize) {
    pages.push(trainersList.slice(i, i + pageSize))
  }
  return pages
})

const currentPage = ref(0)
const isPaused = ref(false)
let autoTimer: ReturnType<typeof setInterval> | undefined

const nextPage = () => {
  currentPage.value = (currentPage.value + 1) % trainerPages.value.length
}

const prevPage = () => {
  currentPage.value = (currentPage.value - 1 + trainerPages.value.length) % trainerPages.value.length
}

const goToPage = (idx: number) => {
  currentPage.value = idx
}

let pointerStartX = 0
let isSwiping = false

const onSwipeStart = (e: PointerEvent) => {
  pointerStartX = e.clientX
  isSwiping = true
}

const onSwipeEnd = (e: PointerEvent) => {
  if (!isSwiping) return
  isSwiping = false
  const diff = e.clientX - pointerStartX
  if (Math.abs(diff) > 50) {
    if (diff < 0) nextPage()
    else prevPage()
  }
}

onMounted(() => {
  autoTimer = setInterval(() => {
    if (!isPaused.value) {
      nextPage()
    }
  }, 5200)
})

onBeforeUnmount(() => {
  if (autoTimer) clearInterval(autoTimer)
})
</script>

<template>
  <div class="inner-page">
    <PageHero
      eyebrow="GOOD PEOPLE. GREAT COACHING."
      title="MEET YOUR"
      accent="CORNER."
      description="Coaches who care about your progress as much as you do. No shouting from the sidelines — real guidance, every step."
      left-meta="08 FEATURED COACHES"
      right-meta="SCROLL TO MEET THEM ↓"
    />

    <section
      class="section-wrap"
      @mouseenter="isPaused = true"
      @mouseleave="isPaused = false"
    >
      <div class="trainer-header-row">
        <SectionHeading
          kicker="THE PEOPLE BEHIND THE PROGRESS"
          title="EXPERTISE WITH"
          accent="HEART."
          description="Different backgrounds. One shared mission: help you become stronger."
        />
        <div class="trainer-carousel-nav">
          <span class="trainer-page-indicator">
            0{{ currentPage + 1 }} <span>/ 0{{ trainerPages.length }}</span>
          </span>
          <button
            type="button"
            class="trainer-nav-btn"
            aria-label="Previous 4 trainers"
            @click="prevPage"
          >
            <ChevronLeft :size="20" />
          </button>
          <button
            type="button"
            class="trainer-nav-btn"
            aria-label="Next 4 trainers"
            @click="nextPage"
          >
            <ChevronRight :size="20" />
          </button>
        </div>
      </div>

      <div
        class="trainer-carousel-viewport"
        @pointerdown="onSwipeStart"
        @pointerup="onSwipeEnd"
      >
        <div
          class="trainer-carousel-track"
          :style="{ transform: `translate3d(-${currentPage * 100}%, 0, 0)` }"
        >
          <div
            v-for="(page, pageIdx) in trainerPages"
            :key="pageIdx"
            class="trainer-carousel-slide"
          >
            <div class="trainer-grid">
              <TrainerCard
                v-for="(t, idx) in page"
                :key="t.number"
                :trainer="t"
                :index="idx"
                total="08"
              />
            </div>
          </div>
        </div>
      </div>

      <div class="trainer-carousel-dots">
        <button
          v-for="(_, pageIdx) in trainerPages"
          :key="pageIdx"
          type="button"
          class="trainer-dot-btn"
          :class="{ active: currentPage === pageIdx }"
          :aria-label="`Show trainers ${pageIdx * 4 + 1} to ${(pageIdx + 1) * 4}`"
          @click="goToPage(pageIdx)"
        >
          <span class="trainer-dot-bar"></span>
          <span class="trainer-dot-label">COACHES 0{{ pageIdx * 4 + 1 }}–0{{ (pageIdx + 1) * 4 }}</span>
        </button>
      </div>
    </section>

    <section class="coach-callout">
      <div class="coach-callout-mark">
        <img :src="contactInfo.logoSrc" alt="Cambodge Gym Logo" class="callout-logo" />
      </div>
      <div>
        <span class="eyebrow"><span class="eyebrow-line"></span> YOUR GOALS. OUR GAME PLAN.</span>
        <h2>LET'S BUILD<br /><span class="green">SOMETHING STRONG.</span></h2>
        <p>Meet a coach, talk through your goals, and map out your next steps.</p>
      </div>
      <RouterLink to="/contact" class="btn-primary">MEET A COACH <ArrowUpRight :size="18" /></RouterLink>
    </section>
  </div>
</template>
