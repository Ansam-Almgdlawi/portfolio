// في main.js
import { createApp } from 'vue'
import App from './App.vue'
import './style.scss'

// Initialize theme
const saved = localStorage.getItem('theme')
document.documentElement.dataset.theme = saved || 'dark'

// IntersectionObserver for reveal animations
const observer = new IntersectionObserver((entries)=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){ 
      entry.target.classList.add('in-view')
      // إذا كان عنصر wave-animation، أضف تأثير إضافي
      if (entry.target.classList.contains('wave-animation')) {
        entry.target.style.animationPlayState = 'running'
      }
    }
  })
}, { 
  threshold: 0.1,
  rootMargin: '0px 0px -100px 0px'
})

// Observe reveals after mount
setTimeout(()=>{
  // للعناصر العادية
  document.querySelectorAll('.reveal').forEach(el => observer.observe(el))
  
  // للعناصر مع wave-animation
  document.querySelectorAll('.wave-animation').forEach(el => {
    // تأخير بداية الأنيميشن حتى يظهر العنصر
    el.style.animationPlayState = 'paused'
    observer.observe(el)
  })
}, 500) // تأخير 500ms لضمان تحميل الصفحة

createApp(App).mount('#app')