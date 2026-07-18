/** Whole-page fullscreen, per the presentation view's decision #3. */
export function useFullscreen() {
  function toggle() {
    if (document.fullscreenElement)
      document.exitFullscreen()
    else
      document.documentElement.requestFullscreen()
  }

  return { toggle }
}
