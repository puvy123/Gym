<script setup lang="ts">
import PageHero from '../components/layout/PageHero.vue'
import CtaBanner from '../components/layout/CtaBanner.vue'
import ProgramDetailCard from '../components/cards/ProgramDetailCard.vue'
import { detailedPrograms } from '../data/gymData'
</script>

<template>
  <div class="inner-page">
    <PageHero
      eyebrow="THE WORK IS YOURS"
      title="FIND YOUR"
      accent="TRAINING."
      description="Purpose-built programs for real-world strength, fitness, and confidence. Start where you are. Build from there."
      left-meta="04 WAYS TO GET AFTER IT"
      right-meta="SCROLL TO EXPLORE ↓"
    />

    <section class="section-wrap programs-list">
      <ProgramDetailCard
        v-for="(p, idx) in detailedPrograms"
        :key="p.n"
        :program="p"
        :index="idx"
        total="04"
      />
    </section>

    <CtaBanner
      eyebrow="NOT SURE WHERE TO START?"
      title="WE'LL HELP YOU"
      accent="FIND YOUR FIT."
      description="Talk with a coach and choose a program that matches your goals."
      button-text="TALK TO A COACH"
    />
  </div>
</template>
