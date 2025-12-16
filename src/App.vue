<template>
  <div>
    <div class="starry-bg" />
    
    <!-- Navbar مع قائمة جوال -->
    <nav>
      <div class="nav-inner">
        <div class="brand">Ansam <span>Almgdlawi</span></div>
        
        <!-- القائمة للشاشات الكبيرة -->
        <ul class="desktop-nav">
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#engineering">Engineering</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#education">Education</a></li>
          <li><a href="#volunteering">Volunteering</a></li>
          <li><a href="#contact">Get In Touch</a></li>
        </ul>
        
        <!-- زر القائمة للجوال - مخفي على اللابتوب -->
        <button class="mobile-menu-btn" @click="toggleMobileMenu">
          <span v-if="!mobileMenuOpen">☰</span>
          <span v-else>✕</span>
        </button>
        
        <ThemeToggle @toggle="toggleTheme" />
      </div>
      
      <!-- القائمة المنسدلة للجوال - مخفية على اللابتوب -->
      <div class="mobile-menu" :class="{ active: mobileMenuOpen }">
        <a href="#about" @click="closeMobileMenu">About</a>
        <a href="#skills" @click="closeMobileMenu">Skills</a>
        <a href="#engineering" @click="closeMobileMenu">Engineering</a>
        <a href="#projects" @click="closeMobileMenu">Projects</a>
        <a href="#education" @click="closeMobileMenu">Education</a>
        <a href="#volunteering" @click="closeMobileMenu">Volunteering</a>
        <a href="#contact" @click="closeMobileMenu">Get In Touch</a>
      </div>
    </nav>

    <header class="hero container">
      <h1 class="title fade-in">Software Engineer & <span style="color: var(--purple)">Laravel</span> Backend Developer</h1>
      <p class="subtitle muted fade-in">
        Building secure, scalable, and elegant backend systems with a calm aesthetic and space-inspired vibe.
      </p>
      <div class="cta fade-in">
        <a class="btn" href="#projects">View Projects</a>
        <a class="btn ghost" href="#skills">Explore Skills</a>
        <a class="btn" href="/cv.pdf" download>Download CV</a>
      </div>
    </header>

    <section id="about" class="section container">
      <h2 class="section-title">About</h2>
      <div class="card reveal left">
        <p>
          I'm Ansam Almgdlawi — a backend developer with strong experience in Laravel, database design, and REST APIs. I follow SOLID principles and clean code practices, and I enjoy turning ideas into performant, elegant products. I'm experienced with Git, CI/CD, Docker, and Agile project management with Jira.
        </p>
      </div>
    </section>

    <Skills />
    <Engineering />
    <Projects />
    <Education />
    <Volunteering />
    <GetInTouch />
    <Footer />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Skills from './components/Skills.vue'
import Projects from './components/Projects.vue'
import Education from './components/Education.vue'
import Volunteering from './components/Volunteering.vue'
import GetInTouch from './components/GetInTouch.vue'
import ThemeToggle from './components/ThemeToggle.vue'
import Engineering from './components/Engineering.vue'
import Footer from './components/Footer.vue'

const mobileMenuOpen = ref(false)

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value
}

const closeMobileMenu = () => {
  mobileMenuOpen.value = false
}

function toggleTheme(){
  const current = document.documentElement.dataset.theme || 'dark'
  const next = current === 'dark' ? 'light' : 'dark'
  document.documentElement.dataset.theme = next
  localStorage.setItem('theme', next)
}
</script>