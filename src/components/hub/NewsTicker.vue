<!-- A scrolling news ticker under the banner, the <marquee> of old done in CSS.
     Announces the newest set and its slide headings. The track holds two
     copies of the text so the loop has no seam. -->
<script setup lang="ts">
import { slideHeading } from '../../content/schema'
import { ALL_SETS } from '../../content/sets'

const newest = ALL_SETS[0]

const text = newest
  ? [
      `NEW SET: ${newest.title}`,
      ...newest.slides.map(slideHeading),
      `${ALL_SETS.length} sets and counting`,
      'thanks for stopping by, eh',
    ].join('  🍁  ')
  : 'thanks for stopping by, eh'
</script>

<template>
  <div class="ticker">
    <div class="track">
      <span>🍁 {{ text }} 🍁&nbsp;</span>
      <span aria-hidden="true">🍁 {{ text }} 🍁&nbsp;</span>
    </div>
  </div>
</template>

<style scoped>
.ticker {
  overflow: hidden;
  background: var(--surface-ticker);
  color: var(--ink-ticker);
  border: var(--border-chrome);
  font-weight: bold;
  padding: var(--space-xs) 0;
  margin-bottom: var(--space-lg);
}

.track {
  display: flex;
  width: max-content;
  white-space: nowrap;
  animation: scroll var(--motion-ticker) linear infinite;
}

.ticker:hover .track {
  animation-play-state: paused;
}

@keyframes scroll {
  to {
    transform: translateX(-50%);
  }
}

/* Still: the text wraps in place and the duplicate goes. */
@media (prefers-reduced-motion: reduce) {
  .track {
    animation: none;
    width: auto;
    white-space: normal;
    padding: 0 var(--space-sm);
  }

  .track > [aria-hidden] {
    display: none;
  }
}
</style>
