<script setup lang="ts">
const highlights = [
  {
    title: 'Used advanced technologies',
    copy: 'I must explain to you how all this mistaken. Idea of main denouncing pleasure and praising pain was born',
    icon: '▤',
    tone: 'bg-slate-400/40 text-slate-700',
  },
  {
    title: 'Clean design & Typography',
    copy: 'I must explain to you how all this mistaken. Idea of main denouncing pleasure and praising pain was born',
    icon: '◐',
    tone: 'bg-finance-green/40 text-emerald-800',
  },
  {
    title: 'Best customer support',
    copy: 'I must explain to you how all this mistaken. Idea of main denouncing pleasure and praising pain was born',
    icon: '▥',
    tone: 'bg-violet-300/50 text-violet-800',
  },
]
</script>

<template>
  <section class="bg-white pt-16 lg:pt-20">
    <div class="mx-auto max-w-7xl px-5 lg:px-8">
      <div class="grid gap-6 md:grid-cols-3">
        <article
          v-for="(item, index) in highlights"
          :key="item.title"
          data-reveal
          :data-reveal-delay="String(index + 1)"
          class="group flex flex-col rounded-3xl bg-finance-card p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
        >
          <div class="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl text-xl" :class="item.tone">
            {{ item.icon }}
          </div>
          <h3 class="text-xl font-bold text-finance-ink">{{ item.title }}</h3>
          <p class="mt-3 leading-relaxed text-finance-muted">{{ item.copy }}</p>
          <a
            href="#services"
            class="mt-8 inline-flex items-center gap-3 text-sm font-bold text-finance-ink"
          >
            Learn more
            <span
              class="grid h-9 w-9 place-items-center rounded-full bg-slate-200 transition-transform group-hover:translate-x-1"
              aria-hidden="true"
            >
              →
            </span>
          </a>
        </article>
      </div>
    </div>
  </section>
</template>
