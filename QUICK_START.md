# 🚀 Quick Start Guide - Kirety's Portfolio

## ⚡ Essential Steps (5 minutes)

### 1️⃣ Setup EmailJS (Contact Form)
```
1. Sign up: https://www.emailjs.com/
2. Get Public Key from dashboard
3. Edit javascript/index.js - Line 15:
   emailjs.init('YOUR_PUBLIC_KEY_HERE');
   
4. Get Service ID + Template ID
5. Edit javascript/sendEmail.js - Lines 16-17:
   const serviceID = 'YOUR_SERVICE_ID';
   const templateID = 'YOUR_TEMPLATE_ID';
```

### 2️⃣ Update Social Links (in index.html)
```
Line ~69: LinkedIn - https://linkedin.com/in/yourprofile
Line ~77: Facebook - https://facebook.com/yourprofile  
Line ~85: GitHub - ✅ Already set to Kiretychowdary
```

### 3️⃣ Update Resume
```
Replace: assets/Kirety_Manne.pdf with your resume
OR update link in index.html if different filename
```

---

## ✅ What's Already Done

✅ Name changed to "Kirety" everywhere  
✅ Font Awesome icons working  
✅ JavaScript errors fixed  
✅ Mobile responsive  
✅ SEO optimized  
✅ Accessibility improved  
✅ Performance optimized  

---

## 🧪 Test Before Deploy

```bash
1. Open index.html in browser
2. Test contact form
3. Check all links work
4. Test on mobile (F12 > Toggle Device Toolbar)
5. Check console for errors (F12 > Console)
```

---

## 🌐 Deploy Options (Choose One)

**GitHub Pages** (Easiest)
```bash
1. Push code to GitHub
2. Settings > Pages > Deploy from main branch
3. Your site: https://kiretychowdary.github.io/Portfolio_
```

**Netlify** (Recommended)
```bash
1. Drag & drop folder to netlify.com
2. Done! Get instant URL + easy custom domain
```

**Vercel**
```bash
1. Import GitHub repo at vercel.com
2. Auto-deploys on every commit
```

---

## 📝 Content to Update

- [ ] index.html - Hero section description
- [ ] index.html - Projects section (your projects)
- [ ] index.html - Skills section (if needed)
- [ ] index.html - Social media URLs
- [ ] assets/ - Add your resume PDF
- [ ] javascript/sendEmail.js - EmailJS IDs
- [ ] javascript/index.js - EmailJS public key

---

## 🆘 Common Issues

**Contact form not working?**  
→ Check EmailJS setup & API keys

**Icons not showing?**  
→ Check internet connection (Font Awesome CDN)

**Animations not working?**  
→ Check browser console for JS errors

**Social links not working?**  
→ Update URLs in index.html (search for "yourprofile")

---

## 📚 Full Documentation

See `README_PROFESSIONALIZED.md` for detailed guide.

---

**Ready to go! 🎉**
