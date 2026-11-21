import { onBeforeUnmount, onMounted } from 'vue'

const MIN_GAP_MS = 45
const LEAVES = ['🍁', '🍂', '✨']

/** On <html> while mounted; swaps the pointer for the hockey stick (base.css). */
const CURSOR_CLASS = 'hockey-cursor'

/**
 * The hub's mouse pointer while the calling component is mounted: a pixel
 * hockey stick, red-taped over anything clickable, that sheds maple leaves as
 * it moves. The
 * cursor shows for everyone; the falling leaves are mouse only and off for
 * reduced motion. Each falling leaf is a `.cursor-leaf` span on <body> that
 * removes itself when its fall ends.
 */
export function useHockeyCursor() {
  let last = 0

  function drop(event: PointerEvent) {
    if (event.pointerType !== 'mouse' || event.timeStamp - last < MIN_GAP_MS)
      return
    last = event.timeStamp
    const leaf = document.createElement('span')
    leaf.className = 'cursor-leaf'
    leaf.textContent = LEAVES[Math.floor(Math.random() * LEAVES.length)] ?? '🍁'
    leaf.style.left = `${event.clientX}px`
    leaf.style.top = `${event.clientY}px`
    leaf.style.setProperty('--drift', `${Math.round(Math.random() * 40 - 20)}px`)
    leaf.addEventListener('animationend', () => leaf.remove(), { once: true })
    document.body.append(leaf)
  }

  onMounted(() => {
    document.documentElement.classList.add(CURSOR_CLASS)
    if (matchMedia('(prefers-reduced-motion: no-preference) and (pointer: fine)').matches)
      window.addEventListener('pointermove', drop, { passive: true })
  })

  onBeforeUnmount(() => {
    document.documentElement.classList.remove(CURSOR_CLASS)
    window.removeEventListener('pointermove', drop)
  })
}
