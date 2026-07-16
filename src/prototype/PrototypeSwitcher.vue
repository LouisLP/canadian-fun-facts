<!-- PROTOTYPE — floating variant-switcher bar. Dev-only; hidden in production builds. -->
<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue'

const props = defineProps<{
  variants: { key: string, name: string }[]
  current: string
}>()

const emit = defineEmits<{
  change: [key: string]
}>()

function cycle(step: number): void {
  const i = props.variants.findIndex(v => v.key === props.current)
  const next = (i + step + props.variants.length) % props.variants.length
  emit('change', props.variants[next]!.key)
}

function onKeydown(e: KeyboardEvent): void {
  const target = e.target as HTMLElement | null
  if (target && (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA' || target.isContentEditable))
    return
  if (e.key === 'ArrowLeft')
    cycle(-1)
  else if (e.key === 'ArrowRight')
    cycle(1)
}

onMounted(() => window.addEventListener('keydown', onKeydown))
onUnmounted(() => window.removeEventListener('keydown', onKeydown))

function currentName(): string {
  return props.variants.find(v => v.key === props.current)?.name ?? '?'
}

const isDev = import.meta.env.DEV
</script>

<template>
  <div v-if="isDev" class="switcher" role="toolbar" aria-label="Prototype variant switcher">
    <button type="button" aria-label="Previous variant" @click="cycle(-1)">
      ←
    </button>
    <span class="label">{{ current }} — {{ currentName() }}</span>
    <button type="button" aria-label="Next variant" @click="cycle(1)">
      →
    </button>
  </div>
</template>

<style scoped>
.switcher {
  position: fixed;
  bottom: 1rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  gap: 0.75rem;
  background: #111;
  color: #fff;
  font-family: system-ui, sans-serif;
  font-size: 0.9rem;
  padding: 0.5rem 1rem;
  border-radius: 999px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.4);
  z-index: 9999;
}

.switcher button {
  background: #333;
  color: #fff;
  border: none;
  border-radius: 50%;
  width: 2rem;
  height: 2rem;
  font-size: 1rem;
  cursor: pointer;
}

.switcher button:hover {
  background: #555;
}

.label {
  min-width: 10rem;
  text-align: center;
  white-space: nowrap;
}
</style>
