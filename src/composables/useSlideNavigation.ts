import type { Ref } from 'vue'
import { onMounted, onUnmounted, ref } from 'vue'

/**
 * Drives a scroll-snap presentation: which panel is on screen, and the
 * keyboard/programmatic ways to change that.
 *
 * The caller binds `container` to the scrolling element and stamps each panel
 * with `data-index`. Everything else — the listener, the observer, and their
 * teardown — is owned here.
 */
export function useSlideNavigation(sectionCount: Ref<number>) {
  const container = ref<HTMLElement | null>(null)
  const current = ref(0)

  function scrollTo(index: number) {
    const target = container.value?.children[index] as HTMLElement | undefined
    target?.scrollIntoView({ behavior: 'smooth' })
  }

  function next() {
    scrollTo(Math.min(current.value + 1, sectionCount.value - 1))
  }

  function previous() {
    scrollTo(Math.max(current.value - 1, 0))
  }

  function onKeydown(e: KeyboardEvent) {
    // Leave modified keys to the browser — cmd+arrow is not a slide change.
    if (e.metaKey || e.ctrlKey || e.altKey)
      return

    if (e.key === 'ArrowDown' || e.key === 'ArrowRight' || e.key === ' ' || e.key === 'PageDown') {
      e.preventDefault()
      next()
    }
    else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft' || e.key === 'PageUp') {
      e.preventDefault()
      previous()
    }
  }

  let observer: IntersectionObserver | undefined

  onMounted(() => {
    window.addEventListener('keydown', onKeydown)
    observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting)
            current.value = Number((entry.target as HTMLElement).dataset.index)
        }
      },
      { root: container.value, threshold: 0.6 },
    )
    for (const child of container.value?.children ?? [])
      observer.observe(child)
  })

  onUnmounted(() => {
    window.removeEventListener('keydown', onKeydown)
    observer?.disconnect()
  })

  return { container, current, scrollTo, next, previous }
}
