<script setup lang="ts"></script>

<template>
  <div
    class="motion-tabs-scroll mx-auto w-full max-w-full px-4 sm:px-0"
    role="presentation"
  >
    <div
      role="tablist"
      class="motion-tabs relative p-2 mx-auto flex h-16 w-fit min-w-min max-w-full items-center justify-between rounded-full sm:min-w-0"
    >
      <div
        class="pointer-events-none absolute inset-0 rounded-[inherit] bg-linear-to-b from-neutral-700 to-neutral-800 shadow-[0_8px_32px_rgba(0,0,0,0.6),0_2px_8px_rgba(0,0,0,0.4),inset_0_1px_0_rgba(255,255,255,0.1),inset_0_-1px_2px_rgba(0,0,0,0.5)]"
        aria-hidden="true"
      />
      <div
        class="pointer-events-none absolute inset-0.75 rounded-[inherit] bg-linear-to-b from-neutral-800 to-neutral-900 shadow-[inset_0_2px_4px_rgba(0,0,0,0.8),inset_0_-1px_2px_rgba(255,255,255,0.05)]"
        aria-hidden="true"
      />

      <div
        class="pointer-events-none absolute rounded-full bg-linear-to-b from-[#E8E8E8] via-[#C0C0C0] to-[#A0A0A0] shadow-[0_2px_8px_rgba(0,0,0,0.4),0_1px_2px_rgba(0,0,0,0.3),inset_0_2px_0_rgba(255,255,255,0.5),inset_0_-2px_0_rgba(255,255,255,0.3),inset_0_-8px_16px_rgba(255,255,255,0.2),inset_0_0_0_1px_rgba(255,255,255,0.4),inset_0_1px_4px_rgba(0,0,0,0.1)]"
        aria-hidden="true"
        style="top: 8px; height: 48px; left: 8px; width: 96px"
      />

      <button
        type="button"
        role="tab"
        class="motion-tab-button relative z-10 flex shrink-0 cursor-pointer items-center justify-center gap-2 rounded-full transition-colors outline-none focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:ring-offset-0 px-4 py-3 sm:px-7"
      >
        <span
          class="text-center text-sm font-medium leading-tight transition-colors sm:text-base text-neutral-900"
          >Home</span
        >
      </button>
      <button
        type="button"
        role="tab"
        class="motion-tab-button relative z-10 flex shrink-0 cursor-pointer items-center justify-center gap-2 rounded-full transition-colors outline-none focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:ring-offset-0 px-4 py-3 sm:px-7"
      >
        <span
          class="text-center text-sm font-medium leading-tight transition-colors sm:text-base text-neutral-300"
          >Services</span
        >
      </button>
      <button
        type="button"
        role="tab"
        class="motion-tab-button relative z-10 flex shrink-0 cursor-pointer items-center justify-center gap-2 rounded-full transition-colors outline-none focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:ring-offset-0 px-4 py-3 sm:px-7"
      >
        <span
          class="text-center text-sm font-medium leading-tight transition-colors sm:text-base text-neutral-300"
          >Blogs</span
        >
      </button>
      <button
        type="button"
        role="tab"
        class="motion-tab-button relative z-10 flex shrink-0 cursor-pointer items-center justify-center gap-2 rounded-full transition-colors outline-none focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:ring-offset-0 px-4 py-3 sm:px-7"
      >
        <span
          class="text-center text-sm font-medium leading-tight transition-colors sm:text-base text-neutral-300"
          >Contact Us</span
        >
      </button>
    </div>
  </div>
</template>

<style scoped></style>
