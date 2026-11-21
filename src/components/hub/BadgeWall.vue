<!-- The footer's row of 88×31 buttons. One is a real GeoCities GIF; the rest
     are drawn in CSS at the same size. None of them go anywhere. -->
<script setup lang="ts">
import { retroGif } from '../../lib/retro-gif'
</script>

<template>
  <ul class="badges">
    <li>
      <img :src="retroGif('netscape-now')" alt="Netscape Now! 3.0" width="88" height="31">
    </li>
    <li class="badge syrup">
      powered by <b>maple syrup</b>
    </li>
    <li class="badge notepad">
      made with <b>Notepad</b>
    </li>
    <li class="badge screen">
      best viewed <b>800×600</b>
    </li>
  </ul>
</template>

<style scoped>
.badges {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: var(--space-xs);
  list-style: none;
  margin: var(--space-lg) 0;
  padding: 0;
}

.badges img {
  display: block;
}

.badge {
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 88px;
  height: 31px;
  border: var(--border-badge-88);
  font-size: 9px;
  font-weight: normal;
  line-height: 1.1;
  text-align: center;
  text-decoration: none;
  text-transform: uppercase;
}

.syrup {
  background: var(--surface-badge-syrup);
  color: var(--ink-badge-syrup);
}

.notepad {
  background: var(--surface-badge-notepad);
  color: var(--ink-badge-notepad);
}

.screen {
  background: var(--surface-badge-screen);
  color: var(--ink-badge-screen);
}
</style>
