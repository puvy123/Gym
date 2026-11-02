import { Users, Trophy, HeartHandshake, Compass } from 'lucide-vue-next'
import type {
  NavLink,
  SocialLink,
  HeroSlide,
  ProgramPreview,
  ProgramDetailItem,
  Trainer,
  MembershipPlan,
  FaqItem,
  ValueItem,
  TeamHighlight,
} from '../types/gym'

export const navLinks: NavLink[] = [
  { label: 'Home', to: '/' },
  { label: 'Programs', to: '/programs' },
  { label: 'Trainers', to: '/trainers' },
  { label: 'Membership', to: '/membership' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' },
]

export const contactInfo = {
  brandName: 'CAMBODGE GYM',
  addressLine1: 'No 117, St 544, 335, Toul Kork, 120407',
  addressLine2: 'Phnom Penh, Cambodia',
  fullAddress: 'No 117, St 544, 335, Toul Kork, 120407, Phnom Penh, Cambodia',
  phone: '+855 096 345 4358',
  phoneHref: 'tel:+8550963454358',
  email: 'cambodgegym@info.com',
  emailHref: 'mailto:cambodgegym@info.com',
  weekdayHours: 'Mon–Fri · 5:00 AM – 11:00 PM',
  weekendHours: 'Sat–Sun · 7:00 AM – 9:00 PM',
  logoSrc: '/images/cambodge-gym-logo.jpg',
}

export const socialLinks: SocialLink[] = [
  {
    name: 'Facebook',
    handle: '@CambodgeGym',
    href: 'https://www.facebook.com/',
    svg: '<path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>',
  },
  {
    name: 'YouTube',
    handle: 'Cambodge Gym TV',
    href: 'https://www.youtube.com/',
    svg: '<path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"/><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"/>',
  },
  {
    name: 'LinkedIn',
    handle: 'Cambodge Gym',
    href: 'https://www.linkedin.com/',
    svg: '<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>',
  },
  {
    name: 'Instagram',
    handle: '@cambodge.gym',
    href: 'https://www.instagram.com/',
    svg: '<rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>',
  },
  {
    name: 'X',
    handle: '@cambodgegym',
    href: 'https://x.com/',
    svg: '<path d="M4 4l6.5 8L4 20h2l5.5-6.8L16 20h4l-6.8-8.5L19.5 4h-2l-5 6.2L8 4H4z"/>',
  },
  {
    name: 'Threads',
    handle: '@cambodge.gym',
    href: 'https://www.threads.net/',
    svg: '<path d="M19 12c0-4.4-3.2-7.5-7.2-7.5-4.2 0-7.3 3.2-7.3 7.5s3.1 7.5 7.3 7.5c2.6 0 4.6-.9 5.8-2.3"/><path d="M15.2 12c0 2-1.4 3.4-3.2 3.4-1.8 0-3.1-1.3-3.1-3.1 0-1.8 1.3-3.1 3.1-3.1 1.9 0 3.2 1.4 3.2 3.5v.8c0 1.4.8 2.2 1.9 2.2 1.2 0 1.9-1 1.9-3.7"/>',
  },
  {
    name: 'Telegram',
    handle: 't.me/cambodgegym',
    href: 'https://t.me/',
    svg: '<path d="M22 2L11 13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/>',
  },
]

export const heroSlides: HeroSlide[] = [
  { src: '/images/hero/slide-1.webp', title: 'STRENGTH & HYPERTROPHY', tag: '01 / POWER' },
  { src: '/images/hero/slide-2.webp', title: 'PRECISION CONDITIONING', tag: '02 / FOCUS' },
  { src: '/images/hero/slide-3.jpg', title: 'LOWER BODY DRIVE', tag: '03 / GRIT' },
  { src: '/images/hero/slide-4.jpg', title: 'ATHLETIC PHYSIQUE', tag: '04 / DISCIPLINE' },
]

export const homePrograms: ProgramPreview[] = [
  {
    number: '01',
    title: 'Strength Lab',
    description: 'Build real strength with progressive, coached lifting.',
    tag: 'BUILD POWER',
    image: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=900&q=85',
  },
  {
    number: '02',
    title: 'Conditioning',
    description: 'Push your engine. Improve stamina, speed, and grit.',
    tag: 'MOVE FASTER',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=900&q=85',
  },
  {
    number: '03',
    title: 'Athletic Performance',
    description: 'Train explosively with movement that carries over.',
    tag: 'PLAY STRONGER',
    image: 'https://images.unsplash.com/photo-1534258936925-c58bed479fcb?auto=format&fit=crop&w=900&q=85',
  },
]

export const homeBenefits: string[] = [
  'Coaching that meets you where you are',
  'Equipment built for serious progress',
  'A community that keeps you accountable',
]

export const detailedPrograms: ProgramDetailItem[] = [
  {
    n: '01',
    title: 'STRENGTH LAB',
    tag: 'BUILD POWER',
    desc: 'Progressive strength training built around good technique, smart programming, and measurable progress.',
    image: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=1200&q=85',
    details: ['Coach-led lifting blocks', 'Beginner to advanced options', 'Progress tracking'],
  },
  {
    n: '02',
    title: 'CONDITIONING',
    tag: 'FIND YOUR ENGINE',
    desc: 'High-energy sessions that build cardiovascular fitness, work capacity, and mental resilience.',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=85',
    details: ['Scalable interval training', 'Strength + cardio circuits', 'All fitness levels welcome'],
  },
  {
    n: '03',
    title: 'ATHLETIC PERFORMANCE',
    tag: 'MOVE BETTER',
    desc: 'Explosive movement, mobility, and power for athletes and everyday movers.',
    image: 'https://images.unsplash.com/photo-1534258936925-c58bed479fcb?auto=format&fit=crop&w=1200&q=85',
    details: ['Speed and agility drills', 'Mobility and stability', 'Sport-specific options'],
  },
  {
    n: '04',
    title: 'PERSONAL COACHING',
    tag: 'BUILT AROUND YOU',
    desc: 'One-on-one support tailored to your goals, schedule, and starting point.',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=1200&q=85',
    details: ['Individual training plan', 'Technique feedback', 'Regular check-ins'],
  },
]

export const trainersList: Trainer[] = [
  {
    number: '01',
    name: 'DARA ROTHA',
    role: 'HEAD STRENGTH COACH',
    focus: 'Strength · Powerlifting · Hypertrophy',
    image: '/images/Trainers/1.jpg',
  },
  {
    number: '02',
    name: 'CHAKRIYA MOON',
    role: 'PERFORMANCE & MOBILITY COACH',
    focus: 'Athletic Performance · Core & Toning',
    image: '/images/Trainers/2.jpg',
  },
  {
    number: '03',
    name: 'SOVANARY CHANN',
    role: 'GROUP FITNESS & HIIT SPECIALIST',
    focus: 'HIIT · Functional Conditioning · Stamina',
    image: '/images/Trainers/3.jfif',
  },
  {
    number: '04',
    name: 'MOUYKEA SAKOR',
    role: 'PERSONAL TRAINER & WELLNESS COACH',
    focus: 'Body Sculpting · Glutes & Mobility',
    image: '/images/Trainers/4.jpg',
  },
  {
    number: '05',
    name: 'DAVID SARABLUE',
    role: 'SENIOR PHYSIQUE & STRENGTH COACH',
    focus: 'Bodybuilding · Progressive Overload',
    image: '/images/Trainers/5.jpg',
  },
  {
    number: '06',
    name: 'ALEX SKY',
    role: 'ATHLETIC CONDITIONING COACH',
    focus: 'Explosive Power · Speed & Agility',
    image: '/images/Trainers/6.jfif',
  },
  {
    number: '07',
    name: 'ENGY KAKA',
    role: 'FITNESS & TRANSFORMATION COACH',
    focus: 'Fat Loss · Functional Strength · Grit',
    image: '/images/Trainers/7.jfif',
  },
  {
    number: '08',
    name: 'VIREAK CHHOUN',
    role: 'ELITE PERSONAL TRAINER',
    focus: 'Strength & Conditioning · Custom Roadmaps',
    image: '/images/Trainers/8.jfif',
  },
]

export const membershipPlans: MembershipPlan[] = [
  {
    name: 'BASIC',
    subName: 'Core · Starter · Gym Only',
    tierLabel: '01 / THE BASIC TIER',
    shortTierLabel: '01 / THE BASIC TIER',
    n: '01',
    monthly: 29,
    desc: 'Pure access for the self-guided fitness enthusiast.',
    shortDesc: 'Pure access for the self-guided fitness enthusiast. Full access to gym floor, weight room & cardio machines during standard hours.',
    included: [
      'Full access to the gym floor & weight room',
      'Cardio machines during standard operating hours',
    ],
    excluded: [
      'No group classes',
      'No pool or sauna access',
      'No towel service',
      'Restricted peak-hour access',
    ],
    featured: false,
  },
  {
    name: 'FITNESS PLUS',
    subName: 'Standard · Silver · Active',
    tierLabel: '02 / STANDARD & PREMIUM TIER',
    shortTierLabel: '02 / STANDARD & PREMIUM',
    n: '02',
    monthly: 59,
    desc: 'The complete, unhindered gym experience.',
    shortDesc: 'The complete, unhindered gym experience. Full floor access, unlimited group classes (Zumba, Yoga, HIIT, Spinning), sauna & 1 monthly guest pass.',
    included: [
      'Full gym floor, weight room & cardio access',
      'Unlimited group classes (Zumba, Yoga, HIIT, Spinning)',
      'Full amenity access (sauna, steam room, lockers, showers)',
    ],
    perks: [
      '1 free guest pass per month',
      'Introductory fitness assessment',
    ],
    featured: true,
  },
  {
    name: 'VIP+ ELITE',
    subName: 'VIP · Platinum · Performance',
    tierLabel: '03 / THE VIP / VIP+ TIER',
    shortTierLabel: '03 / THE VIP / VIP+ TIER',
    n: '03',
    monthly: 99,
    desc: 'Complete luxury, personalization, and acceleration of fitness goals.',
    shortDesc: 'Complete luxury, personalization & goal acceleration. Includes 2–4 PT sessions/month, towel service, permanent locker, weekly protein shake & unlimited guest passes.',
    included: [
      'Everything in Standard / Fitness Plus',
      '2–4 Personal Training (PT) sessions per month',
      'Complimentary towel service',
      'Permanent locker rental',
    ],
    perks: [
      'Free smoothie / protein shake per week',
      'Unlimited guest passes',
      'Priority booking for packed group classes',
    ],
    featured: false,
  },
]

export const membershipFaqs: FaqItem[] = [
  {
    q: 'Can I try the gym before joining?',
    a: 'Absolutely. Book a free tour and we can arrange a complimentary introductory session so you can meet the team and explore the space.',
  },
  {
    q: 'Can I change my membership later?',
    a: 'Yes. You can talk with our membership team about upgrading or changing your plan. Terms and notice periods should be confirmed when you sign up.',
  },
  {
    q: 'Do I need to be fit before I start?',
    a: 'Not at all. We welcome beginners and experienced athletes. Our coaches can help you choose a starting point that feels right.',
  },
]

export const coreValues: ValueItem[] = [
  {
    n: '01',
    title: 'CONSISTENCY OVER HYPE',
    desc: 'Real change comes from showing up, again and again. We build routines that last.',
  },
  {
    n: '02',
    title: 'PROGRESS, NOT PERFECTION',
    desc: 'Your starting point is yours. We measure growth against who you were yesterday.',
  },
  {
    n: '03',
    title: 'STRONGER TOGETHER',
    desc: 'Good people make hard things easier. We train with respect, support, and shared energy.',
  },
]

export const teamHighlights: TeamHighlight[] = [
  {
    n: '01',
    tag: 'CULTURE & UNITY',
    title: 'TEAM BUILDER',
    subtitle: 'Building unbreakable bonds inside and outside the gym.',
    desc: 'We believe a strong team creates an unstoppable community. Through group challenges, partner workouts, and leadership workshops, we turn training partners into lifelong teammates.',
    points: [
      'Monthly team fitness challenges & relay events',
      'Coach-and-member squad training sessions',
      'Supportive culture where nobody trains alone',
    ],
    image: '/images/Team/1.jfif',
    icon: Users,
  },
  {
    n: '02',
    tag: 'MILESTONES & PRIDE',
    title: 'ACHIEVEMENT',
    subtitle: 'Celebrating every personal record, transformation, and victory.',
    desc: 'From your very first pull-up to competitive physique and strength podiums, every milestone matters at CAMBODGE GYM. We track, honor, and celebrate the hard work behind every result.',
    points: [
      'Member transformation & PR wall of fame',
      'Regional fitness & strength competition prep',
      'Quarterly awards recognizing dedication & grit',
    ],
    image: '/images/Team/2.jpg',
    icon: Trophy,
  },
  {
    n: '03',
    tag: 'COMMUNITY SPIRIT',
    title: 'GO TOGETHER',
    subtitle: 'If you want to go fast, go alone. If you want to go far, go together.',
    desc: 'Our strength comes from moving forward as one family. Whether it is weekend community runs, charity workouts, or post-session recovery socials, we lift each other up every step of the way.',
    points: [
      'Weekend group runs & outdoor bootcamps',
      'Community charity lifts & wellness drives',
      'Shared accountability that keeps you consistent',
    ],
    image: '/images/Team/3.jpg',
    icon: HeartHandshake,
  },
  {
    n: '04',
    tag: 'ADVENTURE BEYOND WALLS',
    title: 'TOUR TRIP',
    subtitle: 'Taking our fitness, energy, and brotherhood on the road.',
    desc: 'Training at CAMBODGE GYM goes beyond four walls. Each season we organize unforgettable member & team tour trips across Cambodia — combining beach workouts, mountain hikes, and team retreats.',
    points: [
      'Annual coastal & mountain fitness retreats',
      'Outdoor adventure workouts & team campfires',
      'Unforgettable memories with the Cambodge Gym family',
    ],
    image: '/images/Team/4.jpg',
    icon: Compass,
  },
]
