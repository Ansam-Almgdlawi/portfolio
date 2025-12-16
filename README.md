---
title: "Ansam Portfolio (Vue + Vite)"
author: "AnyGen"
date: "2025-12-16"
---

# **Ansam Portfolio (Vue + Vite)**

مشروع بورتفوليو احترافي لعرض خبرات أنسام المِغْدلاوي ومشاريع Laravel، بمظهر فضائي أسود/بنفسجي وأنيميشن راقي. خالٍ تمامًا من الباك إند ومناسب للرفع على Vercel.

## **التشغيل محليًا**

يفضل تثبيت الاعتمادات وتشغيل خادم التطوير لرؤية الواجهات فورًا.

```bash
npm install
npm run dev
```

بعد تشغيل الأمر الثاني، افتحي الرابط الظاهر في الطرفية (غالبًا `http://localhost:5173`). لمعاينة نسخة الإنتاج بعد البناء:

```bash
npm run build
npm run preview
```

## **النشر على Vercel عبر GitHub**

### **طريقة GUI (الأسهل)**

1. أنشئي مستودع GitHub جديد وادفعي الكود:
   ```bash
   git init
   git add .
   git commit -m "init: ansam portfolio"
   git branch -M main
   git remote add origin https://github.com/<USERNAME>/ansam-portfolio-vue.git
   git push -u origin main
   ```
2. ادخلي إلى [Vercel](https://vercel.com) → "Add New… → Project".
3. اختاري المستودع `ansam-portfolio-vue`.
4. الإعدادات:
   - Framework: "Vite" أو "Vue".
   - Build Command: `vite build`.
   - Output Directory: `dist`.
5. اضغطي Deploy. عند الانتهاء ستحصلين على رابط عام للموقع.

### **طريقة CLI (اختياري)**

```bash
npm i -g vercel
vercel login
vercel
```
سيتعرف تلقائيًا على مجلد `dist` بعد `npm run build`.

## **تخصيص المحتوى**

- عدّلي النصوص في `src/components/*` و `src/App.vue` بما يلائم خبراتك.
- الألوان والخلفية النجمية في `src/style.scss`.
- أضيفي روابط مشاريع أخرى في `Projects.vue` ضمن الأزرار.

## **روابط المشاريع المدرجة**

- نظام بنكي: https://github.com/AsmaaAlbukaai/bancking-system
- نظام الشكاوي: https://github.com/Ansam-Almgdlawi/complaints-system

## **ملاحظات**

- لا يوجد أي باك إند؛ المشروع ثابت بالكامل.
- مناسب للنشر على Vercel دون إعدادات خاصة.
