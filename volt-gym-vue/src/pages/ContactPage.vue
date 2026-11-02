<script setup lang="ts">
import { ref } from 'vue'
import { ArrowUpRight, CheckCircle2, MapPin, Clock3, Mail, Phone } from 'lucide-vue-next'
import PageHero from '../components/layout/PageHero.vue'
import SectionHeading from '../components/SectionHeading.vue'
import { useCardTilt } from '../composables/useCardTilt'
import { contactInfo, socialLinks } from '../data/gymData'

const sent = ref(false)
const form = ref({ name: '', email: '', interest: 'Membership options', message: '' })

const { onCardMove, onCardLeave } = useCardTilt(5)

function submitForm() {
  sent.value = true
}
</script>

<template>
  <div class="inner-page">
    <PageHero
      eyebrow="EVERY JOURNEY STARTS SOMEWHERE"
      title="LET'S GET"
      accent="MOVING."
      description="Got a question, want a tour, or need help choosing a program? Our team is here to help you take the first step."
      left-meta="WE'RE READY WHEN YOU ARE"
      right-meta="GET IN TOUCH ↓"
    />

    <section class="contact-layout section-wrap">
      <div class="contact-info">
        <SectionHeading
          kicker="TALK TO THE TEAM"
          title="LET'S START A"
          accent="CONVERSATION."
          description="Tell us what you're working toward. We'll help you figure out the next move."
        />
        <div class="contact-method" style="--stagger: 0ms" @mousemove="onCardMove" @mouseleave="onCardLeave">
          <span class="contact-icon"><MapPin :size="20" /></span>
          <div>
            <strong>FIND THE GYM (ADDRESS)</strong>
            <p>{{ contactInfo.addressLine1 }}<br />{{ contactInfo.addressLine2 }}</p>
          </div>
        </div>
        <div class="contact-method" style="--stagger: 100ms" @mousemove="onCardMove" @mouseleave="onCardLeave">
          <span class="contact-icon"><Phone :size="20" /></span>
          <div>
            <strong>GIVE US A CALL (PHONE)</strong>
            <p><a :href="contactInfo.phoneHref" class="contact-link">{{ contactInfo.phone }}</a></p>
          </div>
        </div>
        <div class="contact-method" style="--stagger: 200ms" @mousemove="onCardMove" @mouseleave="onCardLeave">
          <span class="contact-icon"><Mail :size="20" /></span>
          <div>
            <strong>EMAIL US</strong>
            <p><a :href="contactInfo.emailHref" class="contact-link">{{ contactInfo.email }}</a></p>
          </div>
        </div>
        <div class="contact-method" style="--stagger: 300ms" @mousemove="onCardMove" @mouseleave="onCardLeave">
          <span class="contact-icon"><Clock3 :size="20" /></span>
          <div>
            <strong>WHEN WE'RE OPEN</strong>
            <p>{{ contactInfo.weekdayHours }}<br />{{ contactInfo.weekendHours }}</p>
          </div>
        </div>

        <div class="contact-socials-block">
          <span class="eyebrow"><span class="eyebrow-line"></span> FOLLOW CAMBODGE GYM</span>
          <div class="contact-socials-grid">
            <a
              v-for="(s, idx) in socialLinks"
              :key="s.name"
              :href="s.href"
              target="_blank"
              rel="noopener noreferrer"
              class="contact-social-card"
              :style="{ '--stagger': `${idx * 65}ms` }"
              @mousemove="onCardMove"
              @mouseleave="onCardLeave"
            >
              <span class="contact-social-icon">
                <svg
                  viewBox="0 0 24 24"
                  width="18"
                  height="18"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1.9"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  v-html="s.svg"
                ></svg>
              </span>
              <div class="contact-social-meta">
                <strong>{{ s.name }}</strong>
                <span>{{ s.handle }}</span>
              </div>
              <ArrowUpRight :size="15" class="plan-arrow" />
            </a>
          </div>
        </div>

        <div class="contact-note">
          <span class="green">NO PRESSURE.</span> No hard sell. Just helpful people and a good place to train.
        </div>
      </div>

      <form class="contact-form" style="--stagger: 150ms" @submit.prevent="submitForm" @mousemove="onCardMove" @mouseleave="onCardLeave">
        <template v-if="!sent">
          <div class="form-top">
            <span class="eyebrow">01 / YOUR DETAILS</span>
            <span class="form-required">* REQUIRED FIELDS</span>
          </div>
          <label>
            YOUR NAME <span>*</span>
            <input v-model.trim="form.name" type="text" autocomplete="name" required placeholder="How should we call you?" />
          </label>
          <label>
            EMAIL ADDRESS <span>*</span>
            <input v-model.trim="form.email" type="email" autocomplete="email" required placeholder="you@example.com" />
          </label>
          <label>
            WHAT CAN WE HELP WITH?
            <select v-model="form.interest">
              <option>Membership options</option>
              <option>Book a gym tour</option>
              <option>Personal coaching</option>
              <option>Group programs</option>
              <option>General question</option>
            </select>
          </label>
          <label>
            YOUR MESSAGE
            <textarea v-model.trim="form.message" rows="4" placeholder="Tell us a little about your goals..." required></textarea>
          </label>
          <button class="btn-primary form-submit" type="submit">
            SEND YOUR MESSAGE <ArrowUpRight :size="18" />
          </button>
          <p class="form-privacy">
            By submitting, you agree that the team may contact you about your enquiry. Connect a backend to deliver messages.
          </p>
        </template>
        <div v-else class="success-state">
          <span class="success-icon"><CheckCircle2 :size="34" /></span>
          <span class="eyebrow">MESSAGE PREPARED</span>
          <h2>THANKS FOR<br /><span class="green">REACHING OUT.</span></h2>
          <p>
            This demo form is working on the frontend, but it does not send data to a server yet. Connect an API or form service to receive submissions.
          </p>
          <button class="btn-outline" type="button" @click="sent = false">SEND ANOTHER MESSAGE</button>
        </div>
      </form>
    </section>
  </div>
</template>
