<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { MapPin, Phone, Mail, Clock3 } from 'lucide-vue-next'
import { navLinks, contactInfo, socialLinks } from '../../data/gymData'
</script>

<template>
  <footer class="site-footer">
    <div class="footer-main">
      <div>
        <RouterLink to="/" class="brand footer-brand">
          <img :src="contactInfo.logoSrc" alt="Cambodge Gym Logo" class="brand-logo footer-logo" />
          <span>CAMBODGE<span class="brand-light">GYM</span></span>
        </RouterLink>
        <p class="footer-copy">
          Built for the ones who show up.<br />Every rep. Every round. Every day.
        </p>
        <div class="footer-socials" aria-label="Social Media Links">
          <a
            v-for="s in socialLinks"
            :key="s.name"
            :href="s.href"
            target="_blank"
            rel="noopener noreferrer"
            class="footer-social-btn"
            :aria-label="s.name"
            :title="s.name"
          >
            <svg
              viewBox="0 0 24 24"
              width="16"
              height="16"
              fill="none"
              stroke="currentColor"
              stroke-width="1.9"
              stroke-linecap="round"
              stroke-linejoin="round"
              v-html="s.svg"
            ></svg>
          </a>
        </div>
      </div>

      <div class="footer-links">
        <span class="eyebrow">EXPLORE</span>
        <RouterLink v-for="link in navLinks.slice(1)" :key="link.to" :to="link.to">
          {{ link.label }}
        </RouterLink>
      </div>

      <div class="footer-contact">
        <span class="eyebrow">CONTACT & LOCATION</span>
        <p class="footer-contact-row">
          <MapPin :size="14" class="footer-contact-icon" />
          <span>{{ contactInfo.fullAddress }}</span>
        </p>
        <a :href="contactInfo.phoneHref" class="footer-contact-row">
          <Phone :size="14" class="footer-contact-icon" />
          <span>{{ contactInfo.phone }}</span>
        </a>
        <a :href="contactInfo.emailHref" class="footer-contact-row">
          <Mail :size="14" class="footer-contact-icon" />
          <span>{{ contactInfo.email }}</span>
        </a>
        <p class="footer-contact-row">
          <Clock3 :size="14" class="footer-contact-icon" />
          <span>{{ contactInfo.weekdayHours }} | {{ contactInfo.weekendHours }}</span>
        </p>
      </div>

      <div class="footer-statement">NO<br /><span>EXCUSES.</span></div>
    </div>

    <div class="footer-bottom">
      <span>© {{ new Date().getFullYear() }} {{ contactInfo.brandName }}. ALL RIGHTS RESERVED.</span>
      <span>NO 117, ST 544, TOUL KORK, PHNOM PENH <span class="green">◆</span></span>
    </div>
  </footer>
</template>
