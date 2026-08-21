<script setup lang="ts">
const wrapperRef = ref<HTMLElement | null>(null)
const imageRef = ref<HTMLElement | null>(null)
const prefersReducedMotion = ref(false)

let ticking = false

function updateParallax() {
  ticking = false
  const wrapper = wrapperRef.value
  const image = imageRef.value
  if (!wrapper || !image) return

  if (prefersReducedMotion.value) {
    image.style.transform = 'translateY(0)'
    return
  }

  const top = wrapper.getBoundingClientRect().top
  const progress = Math.min(Math.max(top / (window.innerHeight / 2), 0), 1)
  const distance = image.offsetHeight
  image.style.transform = `translateY(${progress * distance}px)`
}

function onScroll() {
  if (ticking) return
  ticking = true
  requestAnimationFrame(updateParallax)
}

onMounted(() => {
  prefersReducedMotion.value = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  updateParallax()
  window.addEventListener('scroll', onScroll, { passive: true })
  window.addEventListener('resize', onScroll)
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', onScroll)
  window.removeEventListener('resize', onScroll)
})
</script>

<template>
  <section class="bg-white py-20 lg:py-28">
    <div class="mx-auto max-w-7xl px-5 lg:px-8">
      <div
        data-reveal
        class="grid items-center gap-10 overflow-hidden rounded-[30px] bg-finance-teal px-8 py-14 text-white lg:grid-cols-2 lg:px-16 lg:py-0 lg:min-h-[380px]"
      >
        <div>
          <h2 class="text-4xl font-extrabold leading-tight sm:text-5xl">
            We are building
            <br />
            financial foundations
          </h2>
          <a
            href="#contact"
            class="mt-8 inline-flex items-center gap-2 rounded-full bg-finance-green-light px-7 py-3.5 text-sm font-bold text-finance-ink transition-transform hover:scale-[1.03]"
          >
            Let&rsquo;s Talk
            <span aria-hidden="true">→</span>
          </a>
        </div>

        <div ref="wrapperRef" class="relative mx-auto w-full max-w-sm overflow-hidden lg:max-w-none">
          <svg
            ref="imageRef"
            viewBox="0 0 372 250"
            class="h-auto w-full"
            style="will-change: transform"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M120.81 137.65L15.7733 235.304L0 249.943L46.5404 250L58.3819 235.35L137.134 137.65H120.81Z" fill="#95A196" />
            <path d="M149.295 137.65L90.2023 235.304L81.3184 249.943L127.882 250L132.822 235.35L165.618 137.65H149.295Z" fill="#85A088" />
            <path d="M177.781 137.65L164.622 235.304L162.627 249.943L209.225 250L207.276 235.35L194.105 137.65H177.781Z" fill="#5C9F63" />
            <path d="M206.268 137.65L239.052 235.304L243.947 249.943L290.579 250L281.73 235.35L222.591 137.65H206.268Z" fill="#439F4D" />
            <path d="M234.754 137.65L313.471 235.304L325.267 249.943L371.922 250L356.172 235.35L251.077 137.65H234.754Z" fill="#019D12" />
            <path d="M137.134 105.312H120.811V137.65H137.134V105.312Z" fill="#22675D" />
            <path d="M165.62 86.6959H149.297V137.65H165.62V86.6959Z" fill="#30766C" />
            <path d="M194.105 66.1309H177.781V137.65H194.105V66.1309Z" fill="#3A8A7F" />
            <path d="M222.591 45.1879H206.268V137.65H222.591V45.1879Z" fill="#6CA88B" />
            <path d="M251.077 23.8549H234.754V137.65H251.077V23.8549Z" fill="#44C486" />
          </svg>
        </div>
      </div>
    </div>
  </section>
</template>
