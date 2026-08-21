<script setup lang="ts">
const photos = ['/images/team-1.png', '/images/team-2.png', '/images/team-3.png']
const track = [...photos, ...photos]

const trustPoints = ['99% Survey Report', 'Trusted by teams', 'Self-Service']
</script>

<template>
  <section id="about" class="overflow-hidden bg-white py-20 lg:py-28">
    <div class="mx-auto grid max-w-7xl items-center gap-12 px-5 lg:grid-cols-2 lg:gap-16 lg:px-8">
      <div data-reveal>
        <p class="text-sm font-bold uppercase tracking-[0.25em] text-finance-blue">Why Choose Us</p>
        <h2 class="mt-4 text-4xl font-bold leading-tight text-finance-ink lg:text-5xl">
          Manage team increase
          <br />
          productivity
        </h2>
        <p class="mt-5 max-w-lg leading-relaxed text-finance-muted">
          We use as filler text for layouts, non-readability is of great importance
          but because those who do not know how to pursue pleasure rationally
          encounter consequences that are extremely painful nor again is there
          anyone.
        </p>
        <div class="mt-6 flex flex-wrap gap-x-10 gap-y-3">
          <span
            v-for="item in trustPoints"
            :key="item"
            class="flex items-center gap-2 text-sm font-semibold text-finance-ink"
          >
            <span class="grid h-5 w-5 place-items-center rounded-full bg-finance-green/20 text-xs text-finance-green">✓</span>
            {{ item }}
          </span>
        </div>
      </div>

      <div data-reveal data-reveal-delay="1" class="relative -mx-5 overflow-hidden lg:mx-0 lg:rounded-[2rem]">
        <div class="flex h-[460px] w-max animate-marquee gap-4">
          <img
            v-for="(src, i) in track"
            :key="i"
            :src="src"
            alt=""
            class="h-full w-[280px] shrink-0 rounded-3xl object-cover"
          />
        </div>
      </div>
    </div>
  </section>
</template>
