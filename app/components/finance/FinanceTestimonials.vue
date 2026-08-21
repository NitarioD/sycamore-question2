<script setup lang="ts">
const testimonials = [
  {
    quote: 'Because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful nor again is there anyone.',
    name: 'Adon Neo',
    role: 'Investor',
    photo: '/images/testimonial-1.png',
  },
  {
    quote: 'We use as filler text for layouts, non-readability is of great importance but because those who do not know how to pleasure rationally encounter consequences.',
    name: 'Roe Smith',
    role: 'Director, Growth Marketing',
    photo: '/images/testimonial-2.png',
  },
  {
    quote: 'Very denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, combined with a handful.',
    name: 'Peter Leo',
    role: 'CTO - Criston',
    photo: '/images/testimonial-3.png',
  },
  {
    quote: 'Making this the first true generator on the Internet. It uses a dictionary of over words, combined with a handful of model sentence structures, to generate.',
    name: 'Dennis Lail',
    role: 'Marketer',
    photo: '/images/testimonial-4.png',
  },
]

const logos = [
  { src: '/images/logo-jquery.png', alt: 'jQuery' },
  { src: '/images/logo-github.png', alt: 'GitHub' },
  { src: '/images/logo-portis.png', alt: 'Portis' },
  { src: '/images/logo-envato.png', alt: 'Envato' },
  { src: '/images/logo-daomak.png', alt: 'Daomak' },
]
const logoTrack = [...logos, ...logos]

const active = ref(0)
let timer: ReturnType<typeof setInterval> | null = null
const duration = 5000

function goTo(index: number) {
  active.value = index
  restart()
}

function restart() {
  if (timer) clearInterval(timer)
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  if (reduced) return
  timer = setInterval(() => {
    active.value = (active.value + 1) % testimonials.length
  }, duration)
}

onMounted(restart)
onBeforeUnmount(() => {
  if (timer) clearInterval(timer)
})
</script>

<template>
  <section class="bg-finance-offwhite py-20 lg:py-28">
    <div class="mx-auto max-w-5xl px-5 lg:px-8">
      <div data-reveal class="relative overflow-hidden rounded-[2rem] bg-white p-8 sm:p-12">
        <span
          class="pointer-events-none absolute -left-16 bottom-0 h-64 w-64 rounded-t-full bg-finance-teal"
          aria-hidden="true"
        />

        <div class="relative grid items-center gap-10 sm:grid-cols-[220px_1fr]">
          <div class="relative mx-auto h-56 w-48 overflow-hidden rounded-t-full bg-finance-green-light">
            <Transition name="crossfade" mode="out-in">
              <img :key="active" :src="testimonials[active]!.photo" alt="" class="h-full w-full object-cover" />
            </Transition>
          </div>

          <div>
            <div
              class="mb-5 grid h-14 w-14 place-items-center rounded-full border-2 border-finance-green text-2xl font-black text-finance-teal"
            >
              &rdquo;&rdquo;
            </div>
            <Transition name="fade-slide" mode="out-in">
              <div :key="active">
                <p class="text-lg leading-relaxed text-finance-ink">{{ testimonials[active]!.quote }}</p>
                <p class="mt-6 font-bold text-finance-ink">
                  {{ testimonials[active]!.name }},
                  <span class="font-medium text-finance-muted">{{ testimonials[active]!.role }}</span>
                </p>
              </div>
            </Transition>
          </div>
        </div>

        <div class="relative mt-10 flex gap-2 border-t border-slate-100 pt-6">
          <button
            v-for="(_, i) in testimonials"
            :key="i"
            type="button"
            class="h-1 flex-1 overflow-hidden rounded-full bg-slate-200"
            :aria-label="`Show testimonial ${i + 1}`"
            @click="goTo(i)"
          >
            <span
              class="block h-full origin-left bg-finance-green transition-transform duration-500"
              :class="i === active ? 'scale-x-100' : 'scale-x-0'"
            />
          </button>
        </div>
      </div>

      <div data-reveal data-reveal-delay="1" class="mt-14 overflow-hidden">
        <div class="flex w-max animate-marquee items-center gap-16 opacity-60 grayscale">
          <img v-for="(logo, i) in logoTrack" :key="i" :src="logo.src" :alt="logo.alt" class="h-6 w-auto shrink-0" />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.crossfade-enter-active,
.crossfade-leave-active {
  transition: opacity 0.4s ease;
}
.crossfade-enter-from,
.crossfade-leave-to {
  opacity: 0;
}

.fade-slide-enter-active,
.fade-slide-leave-active {
  transition: opacity 0.35s ease, transform 0.35s ease;
}
.fade-slide-enter-from {
  opacity: 0;
  transform: translateY(10px);
}
.fade-slide-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

@media (prefers-reduced-motion: reduce) {
  .animate-marquee {
    animation: none;
  }
}
</style>
