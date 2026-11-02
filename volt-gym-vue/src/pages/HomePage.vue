<script setup lang="ts">
import { ArrowDown, ArrowRight, ArrowUpRight, Play, Check } from 'lucide-vue-next'
import ThreeHero from '../components/ThreeHero.vue'
import SectionHeading from '../components/SectionHeading.vue'
import ProgramCard from '../components/cards/ProgramCard.vue'
import MiniPlanCard from '../components/cards/MiniPlanCard.vue'
import CtaBanner from '../components/layout/CtaBanner.vue'
import { homePrograms, homeBenefits, membershipPlans, contactInfo } from '../data/gymData'
</script>

<template>
  <div>
    <section class="hero-section">
      <div class="hero-grid"></div>
      <div class="hero-glow"></div>
      <div class="hero-copy">
        <div class="eyebrow"><span class="eyebrow-line"></span> BUILT DIFFERENT. BUILT FOR YOU.</div>
        <h1 class="hero-title">
          TRAIN<br />BEYOND <span class="outline-word">LIMITS</span><span class="hero-period">.</span>
        </h1>
        <p class="hero-description">
          More than a gym. A new standard. Get stronger, move better, and become the version of you that doesn't quit.
        </p>
        <div class="hero-actions">
          <RouterLink to="/membership" class="btn-primary">
            START YOUR JOURNEY <ArrowUpRight :size="18" />
          </RouterLink>
          <RouterLink to="/programs" class="btn-quiet">
            <span class="play-icon"><Play :size="13" fill="currentColor" /></span> EXPLORE PROGRAMS
          </RouterLink>
        </div>
        <div class="hero-proof">
          <div class="avatar-stack">
            <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=80&q=80" alt="" />
            <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=80&q=80" alt="" />
            <img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=80&q=80" alt="" />
          </div>
          <div>
            <strong>2,400+</strong>
            <span>MEMBERS GETTING STRONGER</span>
          </div>
          <div class="proof-stars">★★★★★<span>4.9 / 5</span></div>
        </div>
      </div>

      <div class="hero-visual">
        <ThreeHero />
        <div class="hero-orbit-label">
          <span class="orbit-dot"></span> STRENGTH IN MOTION <span>EST. 2020</span>
        </div>
        <div class="floating-stat">
          <span class="stat-symbol">⚡</span>
          <div>
            <strong>+28%</strong>
            <span>AVG. STRENGTH GAIN</span>
          </div>
        </div>
        <div class="hero-side-label">DISCIPLINE / CONSISTENCY / RESULTS</div>
      </div>

      <a href="#intro" class="scroll-cue">
        <span class="scroll-line"></span> SCROLL TO EXPLORE <ArrowDown :size="14" />
      </a>
      <div class="hero-index">01 <span>/</span> 06</div>
    </section>

    <section class="ticker" aria-label="Gym values">
      <div class="ticker-track">
        <span v-for="n in 4" :key="n">
          NO SHORTCUTS <b>✦</b> JUST RESULTS <b>✦</b> BUILT BY DISCIPLINE <b>✦</b> EARN YOUR EDGE <b>✦</b>
        </span>
      </div>
    </section>

    <section id="intro" class="intro-section section-wrap">
      <div class="intro-visual">
        <img
          src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1100&q=85"
          alt="Modern gym training floor"
          loading="lazy"
        />
        <div class="image-corner"></div>
        <div class="intro-badge">
          <img :src="contactInfo.logoSrc" alt="Cambodge Gym Logo" class="intro-badge-logo" />
          <strong>YOUR<br />TIME IS<br /><em>NOW.</em></strong>
        </div>
        <div class="image-caption">01 / THE CAMBODGE GYM ENVIRONMENT</div>
      </div>

      <div class="intro-copy">
        <SectionHeading
          kicker="WELCOME TO CAMBODGE GYM"
          title="YOUR WORK."
          accent="YOUR RULES."
          description="We built CAMBODGE GYM for people who are ready to stop waiting and start doing. No ego. No gimmicks. Just great coaching, smart training, and a community that shows up."
        />
        <ul class="check-list">
          <li v-for="benefit in homeBenefits" :key="benefit">
            <span><Check :size="15" /></span>{{ benefit }}
          </li>
        </ul>
        <RouterLink to="/about" class="text-link">
          DISCOVER OUR PHILOSOPHY <ArrowRight :size="17" />
        </RouterLink>
        <div class="intro-metrics">
          <div>
            <strong>24<span>/7</span></strong>
            <small>ACCESS OPTIONS</small>
          </div>
          <div>
            <strong>18<span>+</span></strong>
            <small>EXPERT COACHES</small>
          </div>
          <div>
            <strong>40<span>+</span></strong>
            <small>WEEKLY CLASSES</small>
          </div>
        </div>
      </div>
    </section>

    <section class="program-section section-wrap">
      <div class="section-row">
        <SectionHeading
          kicker="FIND YOUR EDGE"
          title="TRAIN WITH"
          accent="PURPOSE."
          description="Whatever your goal, there's a way to train for it here."
        />
        <RouterLink to="/programs" class="text-link desktop-only">
          ALL PROGRAMS <ArrowRight :size="17" />
        </RouterLink>
      </div>
      <div class="program-grid">
        <ProgramCard v-for="program in homePrograms" :key="program.number" v-bind="program" />
      </div>
      <RouterLink to="/programs" class="btn-outline mobile-full">
        EXPLORE ALL PROGRAMS <ArrowRight :size="17" />
      </RouterLink>
    </section>

    <section class="manifesto">
      <div class="manifesto-bg">CAMBODGE</div>
      <span class="eyebrow"><span class="eyebrow-line"></span> THIS IS YOUR REMINDER</span>
      <h2>
        YOU DON'T NEED<br />TO BE <span class="green">READY.</span><br />YOU NEED TO <span class="outline-word">BEGIN.</span>
      </h2>
      <RouterLink to="/membership" class="btn-primary">
        MAKE YOUR MOVE <ArrowUpRight :size="18" />
      </RouterLink>
      <div class="manifesto-coordinate">11°33' N — 104°55' E / EVERYWHERE YOU SHOW UP</div>
    </section>

    <section class="membership-preview section-wrap">
      <div class="section-row">
        <SectionHeading
          kicker="INVEST IN YOURSELF"
          title="PICK YOUR"
          accent="PACE."
          description="Straightforward memberships. Serious value. No guesswork."
        />
        <RouterLink to="/membership" class="text-link desktop-only">
          COMPARE PLANS <ArrowRight :size="17" />
        </RouterLink>
      </div>
      <div class="mini-plans">
        <MiniPlanCard v-for="(plan, idx) in membershipPlans" :key="plan.n" :plan="plan" :index="idx" />
      </div>
    </section>

    <CtaBanner
      eyebrow="YOUR FIRST SESSION STARTS HERE"
      title="READY TO"
      accent="SHOW UP?"
      description="Book a no-pressure tour and see what training at CAMBODGE GYM feels like."
      button-text="BOOK A FREE TOUR"
    />
  </div>
</template>
