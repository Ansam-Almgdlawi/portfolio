<template>
  <button class="btn ghost" @click="emit('toggle')" title="Toggle theme" aria-label="Toggle theme">
    <span v-if="theme==='dark'">🌙</span>
    <span v-else>☀️</span>
  </button>
</template>
<script setup>
import { ref, onMounted } from 'vue'
const theme = ref('dark')
const emit = defineEmits(['toggle'])

onMounted(()=>{
  theme.value = document.documentElement.dataset.theme || 'dark'
  const obs = new MutationObserver(()=>{ theme.value = document.documentElement.dataset.theme || 'dark' })
  obs.observe(document.documentElement, { attributes:true, attributeFilter:['data-theme'] })
})
</script>
