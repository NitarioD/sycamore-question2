<script setup lang="ts">
const navTabs = [
  { id: "home", label: "Home" },
  { id: "pages", label: "Pages" },
  { id: "services", label: "Services" },
  { id: "blogs", label: "Blogs" },
  { id: "contact", label: "Contact Us" },
];

const activeTab = defineModel<string>({ default: "home" });

const emit = defineEmits<{
  navigate: [id: string];
}>();

const langOpen = ref(false);
const languages = ["English (US)", "English (UK)", "Español", "Français"];

const mobileMenuOpen = ref(false);

watch(activeTab, (id) => {
  if (id) emit("navigate", id);
  mobileMenuOpen.value = false;
});
</script>

<template>
  <header class="sticky top-0 z-50 bg-finance-dark/95 backdrop-blur-xl">
    <div
      class="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-4 lg:px-8"
    >
      <a
        href="#home"
        class="flex shrink-0 items-center gap-2.5"
        aria-label="Staco home"
      >
        <img src="/images/staco-logo.svg" alt="Staco" class="h-8 w-auto" />
      </a>

      <div class="hidden flex-1 justify-center lg:flex">
        <MotionTabs v-model="activeTab" :tabs="navTabs" />
      </div>

      <div class="flex items-center gap-3 sm:gap-4">
        <div class="relative hidden sm:block">
          <button
            type="button"
            class="flex items-center gap-2 rounded-full border border-white/15 px-3.5 py-2 text-sm font-medium text-white transition-colors hover:border-white/30"
            @click="langOpen = !langOpen"
          >
            <span aria-hidden="true">🌐</span>
            EN
          </button>
          <Transition name="fade-pop">
            <div
              v-if="langOpen"
              class="absolute right-0 mt-2 w-40 rounded-2xl border border-slate-100 bg-white p-2 text-sm font-medium text-finance-muted shadow-xl"
            >
              <button
                v-for="lang in languages"
                :key="lang"
                type="button"
                class="block w-full rounded-lg px-3 py-2 text-left transition-colors hover:bg-finance-card hover:text-finance-ink"
                @click="langOpen = false"
              >
                {{ lang }}
              </button>
            </div>
          </Transition>
        </div>

        <a
          href="#contact"
          class="hidden text-sm font-medium text-white/80 transition-colors hover:text-white sm:block"
        >
          Sign in
        </a>
        <a
          href="#contact"
          class="hidden items-center rounded-full bg-finance-green px-5 py-2.5 text-sm font-bold text-finance-ink transition-transform hover:scale-[1.03] sm:inline-flex"
        >
          Start Free
        </a>

        <button
          type="button"
          class="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-white/15 text-white transition-colors hover:border-white/30 lg:hidden"
          :aria-expanded="mobileMenuOpen"
          aria-label="Toggle menu"
          @click="mobileMenuOpen = !mobileMenuOpen"
        >
          <span class="relative block h-3.5 w-5" aria-hidden="true">
            <span
              class="absolute left-0 h-0.5 w-full rounded-full bg-white transition-all duration-300"
              :style="
                mobileMenuOpen
                  ? { top: '50%', transform: 'translateY(-50%) rotate(45deg)' }
                  : { top: '0%', transform: 'translateY(0) rotate(0deg)' }
              "
            />
            <span
              class="absolute left-0 top-1/2 h-0.5 w-full -translate-y-1/2 rounded-full bg-white transition-opacity duration-200"
              :class="mobileMenuOpen ? 'opacity-0' : 'opacity-100'"
            />
            <span
              class="absolute left-0 h-0.5 w-full rounded-full bg-white transition-all duration-300"
              :style="
                mobileMenuOpen
                  ? { top: '50%', transform: 'translateY(-50%) rotate(-45deg)' }
                  : { top: '100%', transform: 'translateY(-100%) rotate(0deg)' }
              "
            />
          </span>
        </button>
      </div>
    </div>

    <Transition name="mobile-menu">
      <div v-if="mobileMenuOpen" class="border-t border-white/10 lg:hidden">
        <div class="overflow-hidden">
          <div class="px-4 py-4">
            <MotionTabs
              v-model="activeTab"
              :tabs="navTabs"
              orientation="vertical"
            />
          </div>
          <div
            class="flex items-center justify-center gap-6 pb-5 text-sm font-medium text-white/80 sm:hidden"
          >
            <a
              href="#contact"
              class="transition-colors hover:text-white"
              @click="mobileMenuOpen = false"
              >Sign in</a
            >
            <a
              href="#contact"
              class="inline-flex items-center rounded-full bg-finance-green px-5 py-2 text-sm font-bold text-finance-ink"
              @click="mobileMenuOpen = false"
            >
              Start Free
            </a>
          </div>
        </div>
      </div>
    </Transition>
  </header>
</template>

<style scoped>
.fade-pop-enter-active,
.fade-pop-leave-active {
  transition:
    opacity 0.15s ease,
    transform 0.15s ease;
}
.fade-pop-enter-from,
.fade-pop-leave-to {
  opacity: 0;
  transform: translateY(-6px);
}

.mobile-menu-enter-active,
.mobile-menu-leave-active {
  transition:
    grid-template-rows 0.3s ease,
    opacity 0.25s ease;
  display: grid;
  grid-template-rows: 1fr;
}
.mobile-menu-enter-from,
.mobile-menu-leave-to {
  grid-template-rows: 0fr;
  opacity: 0;
}
.mobile-menu-enter-to,
.mobile-menu-leave-from {
  grid-template-rows: 1fr;
  opacity: 1;
}

@media (prefers-reduced-motion: reduce) {
  .mobile-menu-enter-active,
  .mobile-menu-leave-active {
    transition: opacity 0.15s ease;
  }
}
</style>
