import { onBeforeUnmount, onMounted } from 'vue'

const MIN_GAP_MS = 45
const LEAVES = ['🍁', '🍂', '✨']

/**
 * Maple leaves that fall off the mouse pointer while the calling component is
 * mounted. Mouse only, and off entirely for reduced motion. Each leaf is a
 * `.cursor-leaf` span on <body> (styled in base.css) that removes itself when
 * its fall ends.
 */
export function useCursorTrail() {
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
    if (matchMedia('(prefers-reduced-motion: no-preference) and (pointer: fine)').matches)
      window.addEventListener('pointermove', drop, { passive: true })
  })

  onBeforeUnmount(() => window.removeEventListener('pointermove', drop))
}
