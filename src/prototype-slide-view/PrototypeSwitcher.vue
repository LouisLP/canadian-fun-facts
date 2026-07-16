<script setup lang="ts">
// PROTOTYPE — floating variant switcher. Not part of any design being
// evaluated. Uses Shift+←/→ (plain arrows belong to the slide decks).
import { computed, onMounted, onUnmounted } from 'vue'

const props = defineProps<{
  variants: { key: string, name: string }[]
}>()

const current = defineModel<string>({ required: true })

const currentIndex = computed(() =>
  Math.max(0, props.variants.findIndex(v => v.key === current.value)),
)
const currentName = computed(() => props.variants[currentIndex.value]!.name)

function cycle(delta: number) {
  const n = props.variants.length
  current.value = props.variants[(currentIndex.value + delta + n) % n]!.key
}

function onKeydown(e: KeyboardEvent) {
  const target = e.target as HTMLElement
  if (
    target instanceof HTMLInputElement
    || target instanceof HTMLTextAreaElement
    || target.isContentEditable
  ) {
    return
  }
  if (e.shiftKey && e.key === 'ArrowRight')
    cycle(1)
  else if (e.shiftKey && e.key === 'ArrowLeft')
    cycle(-1)
}

onMounted(() => window.addEventListener('keydown', onKeydown))
onUnmounted(() => window.removeEventListener('keydown', onKeydown))
</script>

<template>
  <div class="switcher" @click.stop>
    <button type="button" aria-label="Previous variant" @click="cycle(-1)">
      ◀
    </button>
    <span class="label">{{ current }} — {{ currentName }}</span>
    <button type="button" aria-label="Next variant" @click="cycle(1)">
      ▶
    </button>
    <span class="kbd-hint">shift+←/→</span>
  </div>
</template>

<style scoped>
.switcher {
  position: fixed;
  bottom: 3rem;
  left: 50%;
  transform: translateX(-50%);
  z-index: 9999;
  display: flex;
  align-items: center;
  gap: 0.6rem;
  background: #111;
  color: #fff;
  border: 2px solid #0f0;
  border-radius: 999px;
  padding: 0.35rem 0.9rem;
  font-family: monospace;
  font-size: 0.85rem;
  box-shadow: 0 4px 16px #000000aa;
  cursor: default;
  user-select: none;
}

.switcher button {
  background: none;
  border: none;
  color: #0f0;
  cursor: pointer;
  font-size: 0.9rem;
  padding: 0.1rem 0.3rem;
}

.label {
  min-width: 16ch;
  text-align: center;
}

.kbd-hint {
  color: #888;
  font-size: 0.7rem;
}
</style>
