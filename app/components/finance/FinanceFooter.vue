<script setup lang="ts">
const footerLinks = {
  products: ['HR Management', 'Invoice System', 'Email Marketing', 'Web Services', 'Digital Marketing'],
  why: ['Customers', 'Why Staco ?', 'Book a demo'],
  resources: ['Supports', 'Knowledgebase', 'FAQs'],
  company: ['About', 'What we do', 'Contact us', 'Careers'],
}

const socials = [
  { label: 'Facebook', icon: 'f' },
  { label: 'X', icon: '𝕏' },
  { label: 'LinkedIn', icon: 'in' },
  { label: 'Instagram', icon: '◎' },
  { label: 'YouTube', icon: '▶' },
]
</script>

<template>
  <div>
    <footer id="contact" class="rounded-t-[2rem] bg-finance-dark pt-16 text-white">
      <div class="mx-auto max-w-7xl px-5 lg:px-8">
        <div class="grid gap-10 border-b border-white/10 pb-12 sm:grid-cols-2 lg:grid-cols-6">
          <div class="lg:col-span-2">
            <a href="#home" class="inline-block">
              <img src="/images/staco-logo.svg" alt="Staco" class="h-8 w-auto" />
            </a>
            <p class="mt-4 max-w-xs leading-relaxed text-white/60">
              Staco is the dedicated platform for performance management that helps
              to grow your startup quickly.
            </p>
            <div class="mt-5 flex gap-3">
              <a
                v-for="social in socials"
                :key="social.label"
                href="#home"
                :aria-label="social.label"
                class="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-xs font-bold transition-colors hover:border-white/40 hover:bg-white/10"
              >
                {{ social.icon }}
              </a>
            </div>
          </div>

          <div>
            <h3 class="text-sm font-bold">Products 🔥</h3>
            <ul class="mt-4 space-y-2.5">
              <li v-for="link in footerLinks.products" :key="link">
                <a href="#services" class="text-sm text-white/60 transition-colors hover:text-white">{{ link }}</a>
              </li>
            </ul>
          </div>

          <div>
            <h3 class="text-sm font-bold">Why choose 🌟</h3>
            <ul class="mt-4 space-y-2.5">
              <li v-for="link in footerLinks.why" :key="link">
                <a href="#about" class="text-sm text-white/60 transition-colors hover:text-white">{{ link }}</a>
              </li>
            </ul>
          </div>

          <div>
            <h3 class="text-sm font-bold">Resources ❇️</h3>
            <ul class="mt-4 space-y-2.5">
              <li v-for="link in footerLinks.resources" :key="link">
                <a href="#contact" class="text-sm text-white/60 transition-colors hover:text-white">{{ link }}</a>
              </li>
            </ul>
          </div>

          <div>
            <h3 class="text-sm font-bold">Company 💎</h3>
            <ul class="mt-4 space-y-2.5">
              <li v-for="link in footerLinks.company" :key="link">
                <a href="#contact" class="text-sm text-white/60 transition-colors hover:text-white">{{ link }}</a>
              </li>
            </ul>
          </div>
        </div>

        <div class="flex flex-col gap-4 py-8 text-sm text-white/60 sm:flex-row sm:items-center sm:justify-between">
          <p>2023 Staco. All rights reserved.</p>
          <div class="flex flex-wrap gap-5">
            <a href="#contact" class="transition-colors hover:text-white">Terms and conditions</a>
            <a href="#contact" class="transition-colors hover:text-white">Cookies</a>
            <a href="#contact" class="transition-colors hover:text-white">Privacy policy</a>
          </div>
        </div>
      </div>
    </footer>

    <section class="bg-finance-offwhite py-10">
      <div class="mx-auto max-w-7xl px-5 lg:px-8">
        <h6 class="text-sm font-bold text-finance-ink">Disclaimer:</h6>
        <p class="mt-3 max-w-4xl text-sm leading-relaxed text-finance-muted">
          There are many variations of passages of Lorem Ipsum available, but the
          majority have suffered alteration in some form, by injected humour, or
          randomised words which don&rsquo;t look even slightly believable. If you
          are going to use a passage of Lorem Ipsum, you need to be sure there
          isn&rsquo;t anything embarrassing hidden in the middle of text. All the
          Lorem Ipsum generators on the Internet tend to repeat predefined chunks
          as necessary.
        </p>
        <p class="mt-3 max-w-4xl text-sm leading-relaxed text-finance-muted">
          Making this the first true generator on the Internet. It uses a
          dictionary of over 200 Latin words, combined handful of model sentence
          structures, to generate which looks reasonable. The generated Lorem
          Ipsum is therefore always
        </p>
      </div>
    </section>
  </div>
</template>
