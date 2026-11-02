<script setup lang="ts">
import { onMounted, onBeforeUnmount, ref } from 'vue'
import * as THREE from 'three'

const slides = [
  { src: '/images/hero/slide-1.webp', title: 'STRENGTH & HYPERTROPHY', tag: '01 / POWER' },
  { src: '/images/hero/slide-2.webp', title: 'PRECISION CONDITIONING', tag: '02 / FOCUS' },
  { src: '/images/hero/slide-3.jpg', title: 'LOWER BODY DRIVE', tag: '03 / GRIT' },
  { src: '/images/hero/slide-4.jpg', title: 'ATHLETIC PHYSIQUE', tag: '04 / DISCIPLINE' },
]

const host = ref<HTMLDivElement | null>(null)
const activeIndex = ref(0)

let renderer: THREE.WebGLRenderer | undefined
let frame = 0
let observer: ResizeObserver | undefined
let cleanup: (() => void) | undefined
let autoTimer: ReturnType<typeof setInterval> | undefined

// Target carousel index (can be fractional while dragging, snaps to integer)
let targetSlide = 0
let currentSlide = 0
let isHovered = false

const goToSlide = (index: number) => {
  const count = slides.length
  const currentMod = ((Math.round(targetSlide) % count) + count) % count
  let diff = index - currentMod
  if (diff > count / 2) diff -= count
  if (diff < -count / 2) diff += count
  targetSlide = Math.round(targetSlide) + diff
  activeIndex.value = ((Math.round(targetSlide) % count) + count) % count
}

const nextSlide = () => {
  targetSlide = Math.round(targetSlide) + 1
  const count = slides.length
  activeIndex.value = ((Math.round(targetSlide) % count) + count) % count
}

const prevSlide = () => {
  targetSlide = Math.round(targetSlide) - 1
  const count = slides.length
  activeIndex.value = ((Math.round(targetSlide) % count) + count) % count
}

onMounted(() => {
  if (!host.value) return

  const scene = new THREE.Scene()
  const camera = new THREE.PerspectiveCamera(38, 1, 0.1, 100)
  camera.position.set(0, 0, 7.2)

  try {
    renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: 'high-performance' })
  } catch {
    return
  }
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
  renderer.setSize(host.value.clientWidth, host.value.clientHeight)
  renderer.outputColorSpace = THREE.SRGBColorSpace
  host.value.appendChild(renderer.domElement)

  const root = new THREE.Group()
  scene.add(root)

  // Subtle background orbital rings
  const ringMat = new THREE.MeshBasicMaterial({
    color: 0xb7ff35,
    transparent: true,
    opacity: 0.25,
    wireframe: true,
  })
  const ringA = new THREE.Mesh(new THREE.TorusGeometry(2.55, 0.01, 8, 100), ringMat)
  ringA.rotation.x = 1.18
  ringA.rotation.y = 0.22
  root.add(ringA)

  const ringB = new THREE.Mesh(
    new THREE.TorusGeometry(2.8, 0.007, 6, 100),
    new THREE.MeshBasicMaterial({ color: 0x70a925, transparent: true, opacity: 0.2 })
  )
  ringB.rotation.x = 0.45
  ringB.rotation.y = 1.05
  root.add(ringB)

  // Floating background particles
  const particleCount = 320
  const positions = new Float32Array(particleCount * 3)
  for (let i = 0; i < particleCount; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 10
    positions[i * 3 + 1] = (Math.random() - 0.5) * 7.5
    positions[i * 3 + 2] = (Math.random() - 0.5) * 5 - 1.0
  }
  const particleGeo = new THREE.BufferGeometry()
  particleGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3))
  const particles = new THREE.Points(
    particleGeo,
    new THREE.PointsMaterial({ color: 0xb7ff35, size: 0.02, transparent: true, opacity: 0.55 })
  )
  scene.add(particles)

  // --- 3D CAROUSEL CARDS ---
  const cardWidth = 2.55
  const cardHeight = 3.45
  const cardAspect = cardWidth / cardHeight

  interface CarouselCard {
    group: THREE.Group
    imageMat: THREE.MeshBasicMaterial
    borderMat: THREE.MeshBasicMaterial
    backingMat: THREE.MeshBasicMaterial
    texture?: THREE.Texture
  }

  const cards: CarouselCard[] = []
  const loader = new THREE.TextureLoader()
  const maxAnisotropy = renderer.capabilities.getMaxAnisotropy()

  const applyCoverUV = (tex: THREE.Texture, imgWidth: number, imgHeight: number) => {
    const imgAspect = imgWidth / Math.max(imgHeight, 1)
    tex.wrapS = THREE.ClampToEdgeWrapping
    tex.wrapT = THREE.ClampToEdgeWrapping
    if (imgAspect > cardAspect) {
      // Image is wider than card -> crop horizontally, center
      const scale = cardAspect / imgAspect
      tex.repeat.set(scale, 1)
      tex.offset.set((1 - scale) * 0.5, 0)
    } else {
      // Image is taller than card -> crop vertically, bias slightly toward top for head/torso
      const scale = imgAspect / cardAspect
      tex.repeat.set(1, scale)
      tex.offset.set(0, (1 - scale) * 0.65)
    }
    tex.needsUpdate = true
  }

  const planeGeo = new THREE.PlaneGeometry(cardWidth, cardHeight)
  const backingGeo = new THREE.BoxGeometry(cardWidth + 0.08, cardHeight + 0.08, 0.05)
  const borderEdgesGeo = new THREE.EdgesGeometry(new THREE.BoxGeometry(cardWidth + 0.09, cardHeight + 0.09, 0.055))

  slides.forEach((slide, idx) => {
    const cardGroup = new THREE.Group()
    cardGroup.userData.slideIndex = idx
    root.add(cardGroup)

    const backingMat = new THREE.MeshBasicMaterial({
      color: 0x0d110d,
      transparent: true,
      opacity: 0.95,
    })
    const backing = new THREE.Mesh(backingGeo, backingMat)
    backing.position.z = -0.03
    cardGroup.add(backing)

    const imageMat = new THREE.MeshBasicMaterial({
      color: 0xffffff,
      transparent: true,
      opacity: 1,
      toneMapped: false,
    })
    const photoMesh = new THREE.Mesh(planeGeo, imageMat)
    photoMesh.userData.slideIndex = idx
    cardGroup.add(photoMesh)

    const borderMat = new THREE.LineBasicMaterial({
      color: 0xb7ff35,
      transparent: true,
      opacity: 0.85,
    }) as unknown as THREE.MeshBasicMaterial
    const borderLines = new THREE.LineSegments(borderEdgesGeo, borderMat as unknown as THREE.LineBasicMaterial)
    borderLines.position.z = -0.025
    cardGroup.add(borderLines)

    const cardObj: CarouselCard = {
      group: cardGroup,
      imageMat,
      borderMat,
      backingMat,
    }
    cards.push(cardObj)

    loader.load(slide.src, (tex) => {
      tex.colorSpace = THREE.SRGBColorSpace
      tex.minFilter = THREE.LinearFilter
      tex.magFilter = THREE.LinearFilter
      tex.anisotropy = maxAnisotropy
      const img = tex.image as { width?: number; height?: number }
      if (img && img.width && img.height) {
        applyCoverUV(tex, img.width, img.height)
      }
      imageMat.map = tex
      imageMat.needsUpdate = true
      cardObj.texture = tex
    })
  })

  // Pointer drag / swipe & tilt interaction
  let isDragging = false
  let dragStartX = 0
  let dragStartTarget = 0
  let pointerTiltX = 0
  let pointerTiltY = 0

  const onPointerDown = (event: PointerEvent) => {
    isDragging = true
    dragStartX = event.clientX
    dragStartTarget = targetSlide
  }

  const onPointerMove = (event: PointerEvent) => {
    if (!host.value) return
    const rect = host.value.getBoundingClientRect()
    pointerTiltY = ((event.clientX - rect.left) / rect.width - 0.5) * 0.18
    pointerTiltX = ((event.clientY - rect.top) / rect.height - 0.5) * 0.12

    if (isDragging) {
      const deltaX = event.clientX - dragStartX
      targetSlide = dragStartTarget - deltaX / Math.max(rect.width * 0.42, 160)
    }
  }

  const onPointerUp = (event: PointerEvent) => {
    if (!isDragging) return
    isDragging = false
    const moved = Math.abs(event.clientX - dragStartX)
    if (moved < 6 && host.value && renderer) {
      // Check if user clicked a side card to bring it forward
      const rect = host.value.getBoundingClientRect()
      const mouse = new THREE.Vector2(
        ((event.clientX - rect.left) / rect.width) * 2 - 1,
        -((event.clientY - rect.top) / rect.height) * 2 + 1
      )
      const raycaster = new THREE.Raycaster()
      raycaster.setFromCamera(mouse, camera)
      const hits = raycaster.intersectObjects(root.children, true)
      const hitSlide = hits.find((h) => h.object.userData?.slideIndex !== undefined)
      if (hitSlide && hitSlide.object.userData.slideIndex !== activeIndex.value) {
        goToSlide(hitSlide.object.userData.slideIndex)
        return
      }
    }
    targetSlide = Math.round(targetSlide)
    const count = slides.length
    activeIndex.value = ((Math.round(targetSlide) % count) + count) % count
  }

  const onPointerEnter = () => {
    isHovered = true
  }
  const onPointerLeave = () => {
    isHovered = false
    if (isDragging) {
      isDragging = false
      targetSlide = Math.round(targetSlide)
      const count = slides.length
      activeIndex.value = ((Math.round(targetSlide) % count) + count) % count
    }
    pointerTiltX = 0
    pointerTiltY = 0
  }

  const el = host.value
  el.addEventListener('pointerdown', onPointerDown)
  window.addEventListener('pointermove', onPointerMove)
  window.addEventListener('pointerup', onPointerUp)
  el.addEventListener('pointerenter', onPointerEnter)
  el.addEventListener('pointerleave', onPointerLeave)

  // Auto-advance carousel every 3.8s when not hovered/dragging
  autoTimer = setInterval(() => {
    if (!isHovered && !isDragging) {
      nextSlide()
    }
  }, 3800)

  const resize = () => {
    if (!host.value || !renderer) return
    const width = host.value.clientWidth
    const height = host.value.clientHeight
    camera.aspect = width / Math.max(height, 1)
    camera.position.z = width < 600 ? 7.8 : 6.8
    camera.updateProjectionMatrix()
    renderer.setSize(width, height)
  }
  observer = new ResizeObserver(resize)
  observer.observe(host.value)
  resize()

  const clock = new THREE.Clock()
  const count = slides.length

  const animate = () => {
    frame = requestAnimationFrame(animate)
    const t = clock.getElapsedTime()

    // Smoothly interpolate carousel position
    currentSlide += (targetSlide - currentSlide) * 0.085

    cards.forEach((card, i) => {
      // Shortest signed offset around the circular carousel (-count/2 .. +count/2)
      let offset = (i - currentSlide) % count
      if (offset > count / 2) offset -= count
      if (offset < -count / 2) offset += count

      const absOffset = Math.abs(offset)
      const angle = (offset / count) * Math.PI * 2

      // Coverflow + 3D Cylindrical Ring positioning
      const radiusX = 1.85
      const radiusZ = 1.45
      card.group.position.x = Math.sin(angle) * radiusX
      card.group.position.z = Math.cos(angle) * radiusZ - 0.45
      card.group.position.y = Math.sin(t * 1.6 + i) * 0.035

      // Angle side cards inward for 3D depth
      card.group.rotation.y = -Math.sin(angle) * 0.52

      // Scale front card to 1, side/back cards smaller so everything fits nicely
      const scale = Math.max(0.62, 1.04 - absOffset * 0.24)
      card.group.scale.setScalar(scale)

      // Dim side/back cards so the active front image pops
      const focus = Math.max(0, 1 - absOffset * 0.65)
      const brightness = 0.35 + focus * 0.65
      card.imageMat.color.setRGB(brightness, brightness, brightness)
      card.imageMat.opacity = Math.max(0.35, 1 - absOffset * 0.32)
      card.borderMat.opacity = 0.2 + focus * 0.8
    })

    // Subtle parallax tilt on root
    root.rotation.y += (pointerTiltY - root.rotation.y) * 0.06
    root.rotation.x += (pointerTiltX - root.rotation.x) * 0.06

    ringA.rotation.z = t * 0.1
    ringB.rotation.z = -t * 0.07
    particles.rotation.y = t * 0.015

    renderer?.render(scene, camera)
  }
  animate()

  cleanup = () => {
    if (autoTimer) clearInterval(autoTimer)
    el.removeEventListener('pointerdown', onPointerDown)
    window.removeEventListener('pointermove', onPointerMove)
    window.removeEventListener('pointerup', onPointerUp)
    el.removeEventListener('pointerenter', onPointerEnter)
    el.removeEventListener('pointerleave', onPointerLeave)
    planeGeo.dispose()
    backingGeo.dispose()
    borderEdgesGeo.dispose()
    particleGeo.dispose()
    ringMat.dispose()
    cards.forEach((c) => {
      c.texture?.dispose()
      c.imageMat.dispose()
      c.borderMat.dispose()
      c.backingMat.dispose()
    })
    renderer?.dispose()
    renderer?.domElement.remove()
    scene.clear()
  }
})

onBeforeUnmount(() => {
  cancelAnimationFrame(frame)
  observer?.disconnect()
  cleanup?.()
})
</script>

<template>
  <div ref="host" class="three-hero" aria-label="3D Athlete Image Carousel">
    <div class="carousel-controls">
      <button type="button" class="carousel-btn" aria-label="Previous slide" @click.stop="prevSlide">‹</button>
      <div class="carousel-dots">
        <button
          v-for="(slide, idx) in slides"
          :key="slide.src"
          type="button"
          class="carousel-dot"
          :class="{ active: idx === activeIndex }"
          :aria-label="`Go to slide ${idx + 1}`"
          @click.stop="goToSlide(idx)"
        />
      </div>
      <button type="button" class="carousel-btn" aria-label="Next slide" @click.stop="nextSlide">›</button>
    </div>
  </div>
</template>

<style scoped>
.carousel-controls {
  position: absolute;
  bottom: 16px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 5;
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 6px 12px;
  background: rgba(12, 16, 11, 0.82);
  border: 1px solid rgba(183, 255, 53, 0.3);
  backdrop-filter: blur(8px);
}

.carousel-btn {
  width: 26px;
  height: 26px;
  display: grid;
  place-items: center;
  background: transparent;
  border: 1px solid rgba(183, 255, 53, 0.35);
  color: #b7ff35;
  font-size: 16px;
  line-height: 1;
  cursor: pointer;
  transition: background 0.2s, color 0.2s;
}

.carousel-btn:hover {
  background: #b7ff35;
  color: #10140b;
}

.carousel-dots {
  display: flex;
  align-items: center;
  gap: 6px;
}

.carousel-dot {
  width: 8px;
  height: 8px;
  padding: 0;
  border: 0;
  background: rgba(241, 243, 237, 0.28);
  cursor: pointer;
  transition: width 0.25s, background 0.25s;
}

.carousel-dot.active {
  width: 22px;
  background: #b7ff35;
}
</style>
