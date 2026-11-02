<script setup lang="ts">
import { ArrowUpRight } from 'lucide-vue-next'
import PageHero from '../components/layout/PageHero.vue'
import CtaBanner from '../components/layout/CtaBanner.vue'
import SectionHeading from '../components/SectionHeading.vue'
import ValueCard from '../components/cards/ValueCard.vue'
import TeamLifeCard from '../components/cards/TeamLifeCard.vue'
import { coreValues, teamHighlights } from '../data/gymData'
</script>

<template>
  <div class="inner-page">
    <PageHero
      eyebrow="A GYM WITH A POINT OF VIEW"
      title="MORE THAN"
      accent="MUSCLE."
      description="CAMBODGE GYM was built on a simple belief: when you get stronger physically, you build something powerful in every other part of your life."
      left-meta="OUR STORY / OUR STANDARD"
      right-meta="SCROLL TO LEARN MORE ↓"
    />

    <section class="about-story section-wrap">
      <div class="about-story-image">
        <img
          src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=85"
          alt="CAMBODGE GYM training floor"
          loading="lazy"
        />
        <div class="story-stamp">BUILT<br />ON<br /><span>EFFORT.</span></div>
      </div>
      <div class="about-story-copy">
        <SectionHeading kicker="WHY WE EXIST" title="THE BEST VERSION" accent="IS BUILT." />
        <p>
          We started CAMBODGE GYM to create a training space that felt different: serious about results, generous with support, and welcoming to anyone willing to put in the work.
        </p>
        <p>
          We believe fitness should add to your life, not take it over. That means smart programming, coaches who listen, equipment you can trust, and a community that celebrates every kind of progress.
        </p>
        <RouterLink to="/programs" class="text-link">
          SEE HOW WE TRAIN <ArrowUpRight :size="17" class="plan-arrow" />
        </RouterLink>
      </div>
    </section>

    <section class="values-section section-wrap">
      <SectionHeading
        kicker="THE CAMBODGE GYM STANDARD"
        title="WHAT WE"
        accent="STAND FOR."
        description="The principles behind every program, every session, and every rep."
        centered
      />
      <div class="values-grid">
        <ValueCard v-for="(v, idx) in coreValues" :key="v.n" :value="v" :index="idx" />
      </div>
    </section>

    <section class="team-life-section section-wrap">
      <SectionHeading
        kicker="BEYOND THE WEIGHT FLOOR"
        title="OUR TEAM &"
        accent="COMMUNITY LIFE."
        description="From team building and championship achievements to community events and adventure tour trips — discover how we grow stronger together."
        centered
      />
      <div class="team-life-grid">
        <TeamLifeCard v-for="(item, idx) in teamHighlights" :key="item.n" :item="item" :index="idx" />
      </div>
    </section>

    <section class="about-numbers">
      <div><strong>2.4K<span>+</span></strong><span>MEMBERS IN OUR COMMUNITY</span></div>
      <div><strong>40<span>+</span></strong><span>CLASSES EACH WEEK</span></div>
      <div><strong>18<span>+</span></strong><span>COACHES & SPECIALISTS</span></div>
      <div><strong>2020</strong><span>THE YEAR WE STARTED</span></div>
    </section>

    <CtaBanner
      eyebrow="THERE'S A PLACE FOR YOU HERE"
      title="COME BE PART OF"
      accent="THE ENERGY."
      description="Meet the community and find out what you can build at CAMBODGE GYM."
      button-text="COME SAY HELLO"
    />
  </div>
</template>
