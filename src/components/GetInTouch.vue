<template>
  <section id="contact" class="section container contact-section">
    <h2 class="section-title">Get In Touch</h2>
    
    <div class="contact-grid reveal up">
      <!-- معلومات الاتصال والروابط الاجتماعية -->
      <div class="contact-info card">
        <h3>Contact Information</h3>
        
        <div class="contact-details">
          <div class="contact-item">
            <div class="contact-icon">📧</div>
            <div>
              <h4>Email</h4>
              <p class="muted">ansamalmgdlawi@gmail.com</p>
            </div>
          </div>
          
          <div class="contact-item">
            <div class="contact-icon">💼</div>
            <div>
              <h4>GitHub</h4>
              <a href="https://github.com/Ansam-Almgdlawi" target="_blank" class="social-link">
                @Ansam-Almgdlawi
              </a>
            </div>
          </div>
          
          <div class="contact-item">
            <div class="contact-icon">🔗</div>
            <div>
              <h4>LinkedIn</h4>
              <a href="https://www.linkedin.com/in/ansam-almgdlawi-516574236" target="_blank" class="social-link">
                Ansam Almgdlawi
              </a>
            </div>
          </div>
          
          <div class="contact-item">
            <div class="contact-icon">👥</div>
            <div>
              <h4>Facebook</h4>
              <a href="https://www.facebook.com/share/1D8GMQRhs7" target="_blank" class="social-link">
                Ansam Almgdlawi
              </a>
            </div>
          </div>
        </div>
        
        <div class="social-icons">
          <a href="https://github.com/Ansam-Almgdlawi" target="_blank" class="social-btn">
            <span class="social-icon">🐙</span> GitHub
          </a>
          <a href="https://www.linkedin.com/in/ansam-almgdlawi-516574236" target="_blank" class="social-btn">
            <span class="social-icon">💼</span> LinkedIn
          </a>
          <a href="https://www.facebook.com/share/1D8GMQRhs7" target="_blank" class="social-btn">
            <span class="social-icon">👥</span> Facebook
          </a>
        </div>
      </div>
      
      <!-- نموذج الاتصال -->
      <div class="contact-form card">
        <h3>Send Me a Message</h3>
        
        <form 
           action="https://formspree.io/f/mqarvgve"
          method="POST"
          class="contact-form-fields"
          @submit.prevent="submitForm"
        >
          <div class="form-group">
            <label for="name" class="form-label">Your name</label>
            <input 
              type="text" 
              id="name" 
              name="name" 
              v-model="form.name"
              class="input" 
              required
              placeholder="Enter your name"
            >
          </div>
          
          <div class="form-group">
            <label for="email" class="form-label">Your email</label>
            <input 
              type="email" 
              id="email" 
              name="email"
              v-model="form.email"
              class="input" 
              required
              placeholder="Enter your email"
            >
          </div>
          
          <div class="form-group">
            <label for="subject" class="form-label">Message subject</label>
            <input 
              type="text" 
              id="subject" 
              name="subject"
              v-model="form.subject"
              class="input" 
              required
              placeholder="What is this about?"
            >
          </div>
          
          <div class="form-group">
            <label for="message" class="form-label">Write your great idea here...</label>
            <textarea 
              id="message" 
              name="message"
              v-model="form.message"
              class="input textarea" 
              rows="5"
              required
              placeholder="Your message..."
            ></textarea>
          </div>
          
          <!-- رسالة النجاح -->
          <div v-if="isSuccess" class="form-success">
            <p>✅ Message sent successfully! I'll get back to you soon.</p>
          </div>
          
          <!-- رسالة الخطأ -->
          <div v-if="errorMessage" class="form-error">
            <p>❌ {{ errorMessage }}</p>
          </div>
          
          <button type="submit" class="btn submit-btn" :disabled="isSubmitting">
            <span class="btn-icon">{{ isSubmitting ? '⏳' : '🚀' }}</span> 
            {{ isSubmitting ? 'Sending...' : 'Send Message' }}
          </button>
        </form>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

// نموذج البيانات
const form = ref({
  name: '',
  email: '',
  subject: '',
  message: ''
})

// حالات النموذج
const isSubmitting = ref(false)
const isSuccess = ref(false)
const errorMessage = ref('')

// دالة الإرسال
const submitForm = async () => {
  isSubmitting.value = true
  errorMessage.value = ''
  isSuccess.value = false
  
  try {
    // استبدل YOUR_FORM_ID_HERE بالمعرف الحقيقي من Formspree
     const response = await fetch('https://formspree.io/f/mqarvgve', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(form.value)
    })
    
    if (response.ok) {
      isSuccess.value = true
      // إعادة تعيين النموذج
      form.value = {
        name: '',
        email: '',
        subject: '',
        message: ''
      }
      
      // إخفاء رسالة النجاح بعد 5 ثوانٍ
      setTimeout(() => {
        isSuccess.value = false
      }, 5000)
    } else {
      errorMessage.value = 'Failed to send message. Please try again.'
    }
  } catch (error) {
    errorMessage.value = 'Network error. Please check your connection.'
  } finally {
    isSubmitting.value = false
  }
}
</script>

<style scoped>
/* ستضاف الأنماط في style.scss */
</style>