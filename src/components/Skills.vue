<template>
  <section id="skills" class="section container skills-section">
    <h2 class="section-title">Technical Skills</h2>
    <div class="grid cols-3 reveal-wave">
      <!-- لاحظ إضافة data-icon و wave-animation -->
      <div class="card wave-animation" data-icon="backend" style="--delay: 0s">
        <div class="card-icon">⚙️</div>
        <h3 class="card-title">Backend</h3>
        <p class="muted skills-text">Laravel, PHP, MVC, REST APIs, Realtime (Pusher/Firebase)</p>
      </div>
      <div class="card wave-animation" data-icon="databases" style="--delay: 0.1s">
        <div class="card-icon">🗄️</div>
        <h3 class="card-title">Databases</h3>
        <p class="muted skills-text">MySQL (schema design, optimization, querying), Eloquent, PostgreSQL, Redis, Stripe Integration</p>
      </div>
      <div class="card wave-animation" data-icon="devops" style="--delay: 0.2s">
        <div class="card-icon">🚀</div>
        <h3 class="card-title">DevOps & VCS</h3>
        <p class="muted skills-text">Git, GitHub/GitLab, CI/CD, Nginx, Docker, Vercel</p>
      </div>
      <div class="card wave-animation" data-icon="testing" style="--delay: 0.3s">
        <div class="card-icon">🧪</div>
        <h3 class="card-title">Testing</h3>
        <p class="muted skills-text">Unit & Integration Testing, JMeter Apache</p>
      </div>
      <div class="card wave-animation" data-icon="web" style="--delay: 0.4s">
        <div class="card-icon">🌐</div>
        <h3 class="card-title">Frontend Basics</h3>
        <p class="muted skills-text">Blade, HTML, CSS, JavaScript, Vue.js</p>
      </div>
      <div class="card wave-animation" data-icon="management" style="--delay: 0.5s">
        <div class="card-icon">📋</div>
        <h3 class="card-title">Project Management</h3>
        <p class="muted skills-text">Agile/Scrum, Jira, Kanban, Documentation</p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted } from 'vue'

onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view')
      }
    })
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  })

  document.querySelectorAll('.wave-animation').forEach(el => {
    observer.observe(el)
  })
})
</script>