import type { Component } from 'vue'

export interface NavLink {
  label: string
  to: string
}

export interface SocialLink {
  name: string
  handle: string
  href: string
  svg: string
}

export interface HeroSlide {
  src: string
  title: string
  tag: string
}

export interface ProgramPreview {
  number: string
  title: string
  description: string
  tag: string
  image: string
}

export interface ProgramDetailItem {
  n: string
  title: string
  tag: string
  desc: string
  image: string
  details: string[]
}

export interface Trainer {
  number: string
  name: string
  role: string
  focus: string
  image: string
}

export interface MembershipPlan {
  name: string
  subName: string
  tierLabel: string
  shortTierLabel: string
  n: string
  monthly: number
  desc: string
  shortDesc: string
  included: string[]
  perks?: string[]
  excluded?: string[]
  featured: boolean
}

export interface FaqItem {
  q: string
  a: string
}

export interface ValueItem {
  n: string
  title: string
  desc: string
}

export interface TeamHighlight {
  n: string
  tag: string
  title: string
  subtitle: string
  desc: string
  points: string[]
  image: string
  icon: Component
}
