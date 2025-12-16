<template>
  <section id="projects" class="section container">
    <h2 class="section-title">Laravel Projects</h2>

    <div class="grid cols-2">
      <!-- نظام بنكي كامل -->
      <div class="card fade-in">
        <h3>Full Banking System</h3>
        <p class="muted">Managing bank accounts and operations within the bank, and implementing non-functional requirements such as performance measurement and testing and applying design patterns.</p>
        <div style="display:flex; gap:.5rem; flex-wrap:wrap">
          <a class="btn" href="https://github.com/AsmaaAlbukaai/bancking-system" target="_blank" rel="noopener">View Code on GitHub</a>
        </div>
      </div>

      <!-- نظام إدارة الشكاوي الحكومية -->
      <div class="card fade-in">
        <h3>Government Complaints Management System</h3>
        <p class="muted">Submitting complaints, processing complaint status, tracking processes within the system, in addition to data backup and scheduled reporting.</p>
        <div style="display:flex; gap:.5rem; flex-wrap:wrap">
          <a class="btn" href="https://github.com/Ansam-Almgdlawi/complaints-system" target="_blank" rel="noopener">View Code on GitHub</a>
        </div>
      </div>

      <!-- جمعية خيرية كنانة الشام -->
      <div class="card fade-in">
        <h3>Kinana Al‑Sham Charity Association</h3>
        <p class="muted">Managing all permissions within the system for donors, volunteers, and administration; managing financial and in-kind donations.</p>
        <div style="display:flex; gap:.5rem; flex-wrap:wrap">
          <a class="btn" href="https://github.com/Ansam-Almgdlawi/kinanaalsham" target="_blank" rel="noopener">View Code on GitHub</a>
        </div>
      </div>

      <!-- Learning Management System (LMS) -->
      <div class="card fade-in">
        <h3>Learning Management System (LMS)</h3>
        <p class="muted">Courses, tracks, quizzes, user roles; backend for web dashboard and mobile app.</p>
        <div style="display:flex; gap:.5rem; flex-wrap:wrap">
          <a class="btn" href="https://bitbucket.org/ansamalmgdlawi/lmsrepo/src/st%20age/" target="_blank" rel="noopener">View Code (Bitbucket)</a>
        </div>
      </div>

      <!-- Pharmacy Management System -->
      <div class="card fade-in">
        <h3>Pharmacy Management System</h3>
        <p class="muted">Inventory, invoices, suppliers, expiry alerts; dual interface (warehouse dashboard & pharmacy app).</p>
        <div style="display:flex; gap:.5rem; flex-wrap:wrap">
          <a class="btn" href="https://github.com/Ansam-Almgdlawi/Pharmacy%20project" target="_blank" rel="noopener">View Code on GitHub</a>
        </div>
      </div>
    </div>

    <!-- نافذة بسيطة للإشعارات -->
    <div v-if="notice" class="card" style="position:fixed; right:1rem; bottom:1rem; max-width:320px">
      <strong>تنويه</strong>
      <p class="muted">سيتم نشر رابط الكود لمشروع "{{ notice }}" قريبًا على GitHub.</p>
      <button class="btn" @click="notice=''">إغلاق</button>
    </div>
  </section>
</template>
<script setup>
import { ref } from 'vue'
const notice = ref('')
function comingSoon(name){ notice.value = name }
</script>
