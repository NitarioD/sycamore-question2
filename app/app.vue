<script setup lang="ts">
const labTabs = [
  { id: "home", label: "Home" },
  { id: "pages", label: "Pages" },
  { id: "services", label: "Services" },
  { id: "blogs", label: "Blogs" },
  { id: "contact", label: "Contact Us" },
];
</script>

<template>
  <div class="min-h-screen bg-slate-950 p-10">
    <MotionTabs :tabs="labTabs" />
  </div>
</template>
