<template>
  <footer class="simple-footer">
    <div class="container">
      <div class="simple-footer-content">
        <div class="simple-footer-name">Ansam Almgdlawi</div>
        <div class="simple-footer-title">Software Engineer & Laravel Backend Developer</div>
        <div class="simple-footer-copyright">
          © {{ currentYear }} Ansam Almgdlawi. All rights reserved.
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const currentYear = ref('')

onMounted(() => {
  currentYear.value = new Date().getFullYear()
})
</script>

<style scoped>
.simple-footer {
  background: var(--bg-soft);
  border-top: 1px solid var(--divider);
  padding: 2rem 0;
  text-align: center;
  margin-top: 4rem;
}

.simple-footer-content {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.simple-footer-name {
  font-size: 1.2rem;
  font-weight: 700;
  color: var(--text);
}

.simple-footer-title {
  font-size: 0.95rem;
  color: var(--muted);
  margin-bottom: 0.5rem;
}

.simple-footer-copyright {
  font-size: 0.9rem;
  color: var(--muted);
  opacity: 0.8;
}

@media (max-width: 768px) {
  .simple-footer {
    padding: 1.5rem 0;
  }
  
  .simple-footer-name {
    font-size: 1.1rem;
  }
  
  .simple-footer-title {
    font-size: 0.9rem;
  }
  
  .simple-footer-copyright {
    font-size: 0.85rem;
  }
}
</style>