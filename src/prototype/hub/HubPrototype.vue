<!-- PROTOTYPE — hub page prototype (wayfinder issue #4).
     Three variants of the hub, switchable via ?variant= on the root route:
     A "The Feed", B "The Corkboard", C "The Index". Throwaway code. -->
<script setup lang="ts">
import { ref } from 'vue'
import PrototypeSwitcher from '../PrototypeSwitcher.vue'
import HubVariantA from './HubVariantA.vue'
import HubVariantB from './HubVariantB.vue'
import HubVariantC from './HubVariantC.vue'

const VARIANTS = [
  { key: 'A', name: 'The Feed' },
  { key: 'B', name: 'The Corkboard' },
  { key: 'C', name: 'The Index' },
]

function initialVariant(): string {
  const fromUrl = new URLSearchParams(window.location.search).get('variant')?.toUpperCase()
  return VARIANTS.some(v => v.key === fromUrl) ? fromUrl! : 'A'
}

const variant = ref(initialVariant())

function setVariant(key: string): void {
  variant.value = key
  const url = new URL(window.location.href)
  url.searchParams.set('variant', key)
  window.history.replaceState(null, '', url)
}
</script>

<template>
  <HubVariantA v-if="variant === 'A'" />
  <HubVariantB v-else-if="variant === 'B'" />
  <HubVariantC v-else />
  <PrototypeSwitcher :variants="VARIANTS" :current="variant" @change="setVariant" />
</template>
