export function useReveal(threshold = 0.15) {
  const prefersReducedMotion = ref(false)

  onMounted(() => {
    prefersReducedMotion.value = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold, rootMargin: '0px 0px -8% 0px' },
    )

    document.querySelectorAll('[data-reveal]').forEach((el) => {
      if (prefersReducedMotion.value) {
        el.classList.add('is-visible')
        return
      }
      observer.observe(el)
    })
  })
}
