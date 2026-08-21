<script setup lang="ts">
export interface TabItem {
  id: string;
  label: string;
}

const props = defineProps<{
  tabs: TabItem[];
  modelValue?: string;
}>();

const emit = defineEmits<{
  "update:modelValue": [value: string];
}>();

const activeId = computed({
  get: () => props.modelValue ?? props.tabs[0]?.id ?? "",
  set: (value: string) => emit("update:modelValue", value),
});

const activeIndex = computed(() =>
  props.tabs.findIndex((tab) => tab.id === activeId.value),
);
const hoverIndex = ref<number | null>(null);
const indicatorsReady = ref(false);
const hoverIndicatorStyle = ref({ start: 0, size: 0 });

const containerRef = ref<HTMLElement | null>(null);
const tabRefs = ref<(HTMLButtonElement | null)[]>([]);
function setTabRef(
  el: Element | ComponentPublicInstance | null,
  index: number,
) {
  tabRefs.value[index] = el instanceof HTMLButtonElement ? el : null;
}

const indicatorStyle = ref({ start: 0, size: 0 });

function measureIndicator(index: number) {
  const tab = tabRefs.value[index];
  const container = containerRef.value;
  if (!tab || !container) {
    return { start: 0, size: 0 };
  }

  const lastIndex = props.tabs.length - 1;
  const tabLeft = tab.offsetLeft;
  const tabWidth = tab.offsetWidth;

  if (index === 0) return { start: 8, size: tabWidth };
  if (index === lastIndex) {
    return { start: container.offsetWidth - tabWidth - 8, size: tabWidth };
  }
  return { start: tabLeft + 8, size: tabWidth - 16 };
}

function updateIndicators() {
  const index = activeIndex.value;
  if (index >= 0) {
    indicatorStyle.value = measureIndicator(index);
  }
  if (hoverIndex.value === null) {
    const container = containerRef.value;
    hoverIndicatorStyle.value = container
      ? { start: 8, size: Math.max(container.offsetWidth - 16, 0) }
      : { start: 0, size: 0 };
  } else {
    hoverIndicatorStyle.value = measureIndicator(hoverIndex.value);
  }
}

function selectTab(id: string) {
  indicatorsReady.value = true;
  activeId.value = id;
  nextTick(() => {
    updateIndicators();
    scrollActiveIntoView();
  });
}

function scrollActiveIntoView() {
  const index = activeIndex.value;
  if (index < 0) return;

  tabRefs.value[index]?.scrollIntoView({
    behavior: prefersReducedMotion.value ? "auto" : "smooth",
    block: "nearest",
    inline: "nearest",
  });
}

let resizeObserver: ResizeObserver | null = null;

watch(
  () => [props.tabs, activeId.value, props.orientation] as const,
  () => nextTick(updateIndicators),
  { deep: true },
);

watch(hoverIndex, () => nextTick(updateIndicators));

const prefersReducedMotion = ref(false);

const transitionStyle = computed(() => {
  if (!indicatorsReady.value || prefersReducedMotion.value) return "none";
  return ["left", "width"]
    .map((prop) => `${prop} 0.45s cubic-bezier(0.34, 1.25, 0.64, 1)`)
    .join(", ");
});

let motionMediaQuery: MediaQueryList | null = null;

function onMotionPreferenceChange(event: MediaQueryListEvent) {
  prefersReducedMotion.value = event.matches;
}

onMounted(() => {
  motionMediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
  prefersReducedMotion.value = motionMediaQuery.matches;
  motionMediaQuery.addEventListener("change", onMotionPreferenceChange);

  nextTick(updateIndicators);

  if (containerRef.value) {
    resizeObserver = new ResizeObserver(() => updateIndicators());
    resizeObserver.observe(containerRef.value);
  }
});
onBeforeUnmount(() => {
  motionMediaQuery?.removeEventListener("change", onMotionPreferenceChange);

  resizeObserver?.disconnect();
});
</script>

<template>
  <div
    class="motion-tabs-scroll mx-auto w-full max-w-full px-4 sm:px-0"
    role="presentation"
  >
    <div
      role="tablist"
      class="motion-tabs relative p-2 mx-auto flex h-16 w-fit min-w-min max-w-full items-center justify-between rounded-full sm:min-w-0"
      ref="containerRef"
      @mouseleave="hoverIndex = null"
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
        class="pointer-events-none absolute rounded-full bg-linear-to-b from-white/10 to-white/5 shadow-[inset_0_1px_2px_rgba(255,255,255,0.2)] backdrop-blur-sm"
        aria-hidden="true"
        :style="{
          top: '8px',
          height: '48px',
          left: `${hoverIndicatorStyle.start}px`,
          width: `${hoverIndicatorStyle.size}px`,
          transition: transitionStyle,
        }"
      />
      <div
        class="pointer-events-none absolute rounded-full bg-linear-to-b from-[#E8E8E8] via-[#C0C0C0] to-[#A0A0A0] shadow-[0_2px_8px_rgba(0,0,0,0.4),0_1px_2px_rgba(0,0,0,0.3),inset_0_2px_0_rgba(255,255,255,0.5),inset_0_-2px_0_rgba(255,255,255,0.3),inset_0_-8px_16px_rgba(255,255,255,0.2),inset_0_0_0_1px_rgba(255,255,255,0.4),inset_0_1px_4px_rgba(0,0,0,0.1)]"
        aria-hidden="true"
        :style="{
          top: '8px',
          height: '48px',
          left: `${indicatorStyle.start}px`,
          width: `${indicatorStyle.size}px`,
          transition: transitionStyle,
        }"
      />

      <button
        v-for="(tab, index) in tabs"
        :key="tab.id"
        :ref="(el) => setTabRef(el, index)"
        role="tab"
        type="button"
        class="motion-tab-button relative z-10 flex shrink-0 cursor-pointer items-center justify-center gap-2 rounded-full transition-colors outline-none focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:ring-offset-0 px-4 py-3 sm:px-7"
        :aria-selected="activeId === tab.id"
        @click="selectTab(tab.id)"
        @mouseenter="
          indicatorsReady = true;
          hoverIndex = index;
        "
        @mouseleave="hoverIndex = null"
        @touchstart.passive="
          indicatorsReady = true;
          hoverIndex = index;
        "
        @touchend="hoverIndex = null"
        @touchcancel="hoverIndex = null"
      >
        <span
          class="text-center text-sm font-medium leading-tight transition-colors sm:text-base text-neutral-300"
          :class="activeId === tab.id ? 'text-neutral-900' : 'text-neutral-300'"
        >
          {{ tab.label }}
        </span>
      </button>
    </div>
  </div>
</template>

<style scoped></style>
