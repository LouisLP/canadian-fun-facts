<!-- A system alert with nothing to warn about. Both buttons close it. -->
<script setup lang="ts">
import { Icon } from '@iconify/vue'

const emit = defineEmits<{ close: [] }>()
</script>

<template>
  <div class="alert">
    <p class="message">
      <Icon icon="twemoji:warning" class="glyph" />
      <span>This site contains 100% Canadian content. Sorry about that.</span>
    </p>
    <div class="actions">
      <button type="button" class="button" @click="emit('close')">
        OK
      </button>
      <button type="button" class="button" @click="emit('close')">
        Sorry
      </button>
    </div>
  </div>
</template>

<style scoped>
.alert {
  padding: var(--space-sm);
}

.message {
  display: flex;
  align-items: center;
  gap: var(--space-sm);
  margin: 0 0 var(--space-md);
}

.glyph {
  flex-shrink: 0;
  width: 32px;
  height: 32px;
}

.actions {
  display: flex;
  justify-content: center;
  gap: var(--space-sm);
}

.button {
  min-width: 70px;
  padding: 3px var(--space-sm);
  border: 0;
  background: var(--surface-window);
  box-shadow: var(--bevel-raised);
  font: inherit;
  color: inherit;
  cursor: var(--cursor-pointer);
}

.button:active {
  box-shadow: var(--bevel-sunken);
}

.button:focus-visible {
  outline: 1px dotted var(--ink-body);
  outline-offset: -4px;
}
</style>
