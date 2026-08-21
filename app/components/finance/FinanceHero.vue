<script setup lang="ts">
const words = ['Easier', 'Accountable', 'Unbeatable']
const currentWord = ref(0)
const displayWord = computed(() => words[currentWord.value]!)

let timer: ReturnType<typeof setInterval> | null = null

function cycleWord() {
  currentWord.value = (currentWord.value + 1) % words.length
}

const leaves = [
  { left: '25%', top: '18%', w: 44, h: 42, rot: -10 },
  { left: '66%', top: '19%', w: 36, h: 42, rot: 25 },
  { left: '44%', top: '34%', w: 48, h: 38, rot: -30 },
  { left: '57%', top: '55%', w: 40, h: 40, rot: 60 },
  { left: '45%', top: '77%', w: 42, h: 34, rot: -50 },
]

const videoRef = ref<HTMLVideoElement | null>(null)
const playing = ref(true)

function togglePlay() {
  const video = videoRef.value
  if (!video) return
  if (playing.value) {
    video.pause()
  } else {
    video.play()
  }
  playing.value = !playing.value
}

onMounted(() => {
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  if (!reduced) {
    timer = setInterval(cycleWord, 3000)
  }
})

onBeforeUnmount(() => {
  if (timer) clearInterval(timer)
})
</script>

<template>
  <section id="home" class="relative overflow-hidden bg-finance-dark pb-24 pt-14 text-white lg:pb-32 lg:pt-16">
    <!-- Decorative leaf shapes -->
    <span
      v-for="(leaf, i) in leaves"
      :key="i"
      class="pointer-events-none absolute rounded-tl-[6px] rounded-tr-[60%] rounded-bl-[60%] rounded-br-[60%] bg-emerald-900/50"
      :style="{
        left: leaf.left,
        top: leaf.top,
        width: `${leaf.w}px`,
        height: `${leaf.h}px`,
        transform: `rotate(${leaf.rot}deg)`,
      }"
      aria-hidden="true"
    />
    <span
      class="pointer-events-none absolute h-3 w-6 rounded-full bg-emerald-900/50"
      style="left: 25%; top: 87%; transform: rotate(-20deg)"
      aria-hidden="true"
    />

    <!-- Looping accent line -->
    <svg
      class="pointer-events-none absolute right-[6%] top-0 hidden h-[110%] w-[26%] text-finance-green md:block"
      viewBox="0 0 300 800"
      fill="none"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <path
        class="animate-line-draw"
        d="M 260 -20
           C 200 70, 230 150, 165 195
           C 100 240, 40 200, 45 250
           C 50 300, 130 305, 155 260
           C 180 215, 250 235, 250 320
           C 250 460, 165 520, 165 620
           C 165 700, 230 745, 205 830"
        stroke="currentColor"
        stroke-width="6"
        stroke-linecap="round"
      />
    </svg>

    <div class="relative mx-auto grid max-w-7xl items-center gap-12 px-5 lg:grid-cols-2 lg:gap-16 lg:px-8">
      <div data-reveal>
        <h1 class="text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl">
          Financial Security
          <br />
          Made
          <span class="relative inline-block overflow-hidden pb-2 align-top">
            <Transition name="word-fade" mode="default">
              <span :key="displayWord" class="relative inline-block text-finance-green-light">
                {{ displayWord }}
                <span :key="displayWord" class="animate-line-load absolute bottom-0 left-0 h-2 rounded-full bg-finance-green-light" />
              </span>
            </Transition>
          </span>
        </h1>
        <p class="mt-6 max-w-xl text-lg leading-relaxed text-white/70">
          Staco is the dedicated platform for human management that helps to grow
          your startup business quickly
        </p>
        <div class="mt-8 flex flex-wrap items-center gap-6">
          <a
            href="#contact"
            class="inline-flex items-center gap-2 rounded-full bg-finance-green px-7 py-3.5 text-sm font-bold text-finance-ink transition-transform hover:scale-[1.03]"
          >
            Get Start For Free
          </a>
          <a href="#about" class="inline-flex items-center gap-2 text-sm font-bold text-white">
            Let&rsquo;s talk
            <span
              class="grid h-7 w-7 place-items-center rounded-full bg-white/10 text-xs transition-transform group-hover:translate-x-1"
              aria-hidden="true"
            >
              ›
            </span>
          </a>
        </div>
      </div>

      <div data-reveal data-reveal-delay="1" class="relative">
        <div class="relative overflow-hidden rounded-[2rem] shadow-2xl shadow-black/40">
          <video
            ref="videoRef"
            class="aspect-[6/5] w-full object-cover"
            src="/images/hero-video.mp4"
            autoplay
            loop
            muted
            playsinline
          />
          <button
            type="button"
            class="absolute bottom-5 right-5 flex h-12 w-12 items-center justify-center rounded-full bg-white text-finance-green shadow-lg transition-transform hover:scale-105"
            :aria-label="playing ? 'Pause video' : 'Play video'"
            @click="togglePlay"
          >
            <span v-if="playing" aria-hidden="true" class="flex gap-1">
              <span class="h-4 w-1.5 rounded-sm bg-finance-green" />
              <span class="h-4 w-1.5 rounded-sm bg-finance-green" />
            </span>
            <span
              v-else
              aria-hidden="true"
              class="ml-0.5 h-0 w-0 border-y-[8px] border-l-[13px] border-y-transparent border-l-finance-green"
            />
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.word-fade-enter-active,
.word-fade-leave-active {
  transition: opacity 0.3s;
}
.word-fade-enter-from,
.word-fade-leave-to {
  opacity: 0;
}
.word-fade-leave-active {
  position: absolute;
}

@media (prefers-reduced-motion: reduce) {
  .word-fade-enter-active,
  .word-fade-leave-active {
    transition: none;
  }
}
</style>
