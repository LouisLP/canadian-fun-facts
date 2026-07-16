<script setup lang="ts">
// PROTOTYPE — THROWAWAY (wayfinder issue #3).
// Plan: three variants of the slide presentation view, switchable via
// `?variant=` on the app root (no router in this starter yet), cycled with
// the floating bar or Shift+←/→. Dummy data; does not presuppose the
// content schema from issue #2.
import type { Component } from 'vue'
import { ref, watchEffect } from 'vue'
import PrototypeSwitcher from './PrototypeSwitcher.vue'
import VariantA from './VariantA.vue'
import VariantB from './VariantB.vue'
import VariantC from './VariantC.vue'
import VariantD from './VariantD.vue'

const variants: { key: string, name: string, component: Component }[] = [
  { key: 'A', name: 'Big-screen deck', component: VariantA },
  { key: 'B', name: 'Scroll-snap vertical', component: VariantB },
  { key: 'C', name: 'Overhead transparency', component: VariantC },
  { key: 'D', name: 'Vertical big-screen (A+B)', component: VariantD },
]

function initialVariant(): string {
  const fromUrl = new URLSearchParams(window.location.search).get('variant')
  return variants.some(v => v.key === fromUrl) ? fromUrl! : 'A'
}

const current = ref(initialVariant())

// Hide the switcher if this ever leaks into a production build.
const isProd = import.meta.env.PROD

// Keep the URL shareable/reload-stable.
watchEffect(() => {
  const url = new URL(window.location.href)
  url.searchParams.set('variant', current.value)
  window.history.replaceState(null, '', url)
})
</script>

<template>
  <component :is="variants.find(v => v.key === current)!.component" :key="current" />
  <PrototypeSwitcher v-if="!isProd" v-model="current" :variants="variants" />
</template>
