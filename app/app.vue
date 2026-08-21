<script setup lang="ts">
const activeTab = ref("home");

const sectionMap: Record<string, string> = {
  home: "#home",
  contact: "#contact",
};

function scrollToSection(id: string) {
  const target = document.querySelector(sectionMap[id] ?? "#home");
  target?.scrollIntoView({ behavior: "smooth", block: "start" });
}

useReveal();
</script>

<template>
  <div class="min-h-screen bg-white">
    <FinanceHeader v-model="activeTab" @navigate="scrollToSection" />
    <main>
      <FinanceHero />
      <FinanceHighlights />
      <FinanceFoundations />
      <FinanceWhyChoose />
      <FinanceTestimonials />
    </main>
    <FinanceFooter />
  </div>
</template>
