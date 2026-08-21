# Decisions

## Sliding indicator in MotionTabs

The tabs were first converted from hard-coded buttons into a `v-for` loop over a controlled `activeId`, with template refs added on the container and each button so their DOM positions could be measured. The sliding indicator itself was then added by computing the active tab's index and, on mount and on selection, measuring its `offsetLeft`/`offsetWidth` against the container to derive a `start`/`size` pair (with edge cases for the first and last tabs) that drives the indicator's inline `left`/`width` styles instead of hard-coded values. Later commits layered on resize/content watchers to re-measure when tabs change size, a `prefers-reduced-motion` check to disable the sliding transition, and vertical-orientation support that swaps the left/width measurements for top/height.

## Navigation on mobile

Instead of trying to fit the horizontal MotionTabs bar onto small screens, the header hides it below the `lg` breakpoint and shows a hamburger button that opens a dropdown menu, using the same `MotionTabs` component but set to `orientation="vertical"`. This was chosen because the vertical-orientation feature already let the sliding indicator work up and down, so the mobile menu could reuse it and look the same instead of building a whole new menu just for mobile.

## What doesn't match the original exactly

I knew going in that I didn't have time to get every section pixel-perfect against the real site, so I treated the hero section (and the other sections I did build) as "close enough" rather than an exact copy. I focused my time on getting the overall layout, spacing, and feel right, and let smaller details like exact fonts, image choices, and animation timing be approximations instead of trying to match the original down to the pixel.

## Lighthouse

![Lighthouse score](https://sycamore-question2.vercel.app/images/lighthouse.png)

## Where I used AI

I used AI to help write and edit code throughout this project, especially in the navbar (`MotionTabs.vue`). I didn't just accept the first thing it gave me — I worked through it step by step, which is why the git history for the navbar is broken into small commits (set up refs, add the sliding indicator, add watchers, respect motion preferences, add vertical support, and so on) instead of one big commit.

When the AI's first pass left something out or skipped a best practice, I asked it to go back and fix that specific thing rather than moving on. For example, after the sliding indicator and resize observer were added, the observer wasn't being cleaned up, so I had it add an `onBeforeUnmount` hook to disconnect it and avoid a memory leak. The same thing happened with the `prefers-reduced-motion` media query listener — the first version added the listener but not the matching `removeEventListener` cleanup, so I pointed that out and had it added alongside the resize observer cleanup.
