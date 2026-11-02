<script setup lang="ts">
import { ref, watch } from 'vue'
import { useRoute, RouterLink } from 'vue-router'
import { Menu, X as CloseIcon, ArrowUpRight } from 'lucide-vue-next'
import { navLinks, contactInfo } from '../../data/gymData'

const route = useRoute()
const menuOpen = ref(false)

watch(
  () => route.fullPath,
  () => {
    menuOpen.value = false
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
)
</script>

<template>
  <div>
    <div class="topline">
      <span class="pulse-dot"></span> NOW ACCEPTING NEW MEMBERS <span class="topline-divider">/</span> YOUR NEXT LEVEL STARTS HERE
    </div>
    <header class="site-header">
      <RouterLink to="/" class="brand" aria-label="CAMBODGE GYM home">
        <img :src="contactInfo.logoSrc" alt="Cambodge Gym Logo" class="brand-logo" />
        <span>CAMBODGE<span class="brand-light">GYM</span></span>
      </RouterLink>
      <nav class="desktop-nav" aria-label="Main navigation">
        <RouterLink
          v-for="link in navLinks"
          :key="link.to"
          :to="link.to"
          :class="{ active: route.path === link.to }"
        >
          {{ link.label }}
        </RouterLink>
      </nav>
      <RouterLink to="/membership" class="header-cta">
        JOIN THE CLUB <ArrowUpRight :size="16" />
      </RouterLink>
      <button
        class="mobile-toggle"
        :aria-label="menuOpen ? 'Close menu' : 'Open menu'"
        @click="menuOpen = !menuOpen"
      >
        <CloseIcon v-if="menuOpen" :size="23" /><Menu v-else :size="23" />
      </button>
    </header>
    <transition name="mobile-menu">
      <nav v-if="menuOpen" class="mobile-nav" aria-label="Mobile navigation">
        <RouterLink v-for="link in navLinks" :key="link.to" :to="link.to">
          {{ link.label }} <ArrowUpRight :size="17" />
        </RouterLink>
        <RouterLink to="/membership" class="mobile-join">
          Become a member <ArrowUpRight :size="17" />
        </RouterLink>
      </nav>
    </transition>
  </div>
</template>
