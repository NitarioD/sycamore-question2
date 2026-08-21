<script setup lang="ts">
const navTabs = [
  { id: "home", label: "Home" },
  { id: "pages", label: "Pages" },
  { id: "services", label: "Services" },
  { id: "blogs", label: "Blogs" },
  { id: "contact", label: "Contact Us" },
];

const activeTab = ref("home");
</script>

<template>
  <div class="min-h-screen bg-slate-950 p-10">
    <MotionTabs v-model="activeTab" :tabs="navTabs" />
  </div>
</template>
