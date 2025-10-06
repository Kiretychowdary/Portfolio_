# Portfolio Setup Guide for Kirety

## ✅ What's Been Fixed & Improved

### 🎨 **Personalization**
- ✅ Updated all references from "Renas Hassan" to "Kirety"
- ✅ GitHub link updated to: https://github.com/Kiretychowdary
- ✅ Social media links set as placeholders for easy customization

### 🐛 **Bug Fixes**
- ✅ Fixed cursor.js null reference errors (added proper null checks)
- ✅ Removed Splitbee analytics (was blocked by ad blockers)
- ✅ Fixed Font Awesome icons not displaying (moved CDN to head)
- ✅ Fixed aria-label typo in Resume link
- ✅ Added proper error handling for EmailJS

### 🚀 **Performance & SEO**
- ✅ Preloaded key font files (Centra fonts) for faster rendering
- ✅ Added theme-color meta tag (#0D0514)
- ✅ Added canonical link placeholder
- ✅ Improved meta description with better keywords
- ✅ All images now have descriptive alt text
- ✅ Added rel="noopener noreferrer" to external links for security

### 📱 **Responsiveness**
- ✅ Added mobile breakpoints (600px) for better mobile experience
- ✅ Improved sidebar navigation for small screens
- ✅ Better font scaling on mobile devices

---

## 🔧 Required Setup Steps

### **1. Configure EmailJS (Contact Form)**

The contact form needs EmailJS to work. Follow these steps:

1. **Sign up for EmailJS** (free): https://www.emailjs.com/
2. **Get your Public Key**:
   - Go to https://dashboard.emailjs.com/admin/account
   - Copy your "Public Key"
3. **Open `javascript/index.js`**:
   - Find line: `emailjs.init('YOUR_PUBLIC_KEY_HERE');`
   - Replace `YOUR_PUBLIC_KEY_HERE` with your actual public key
   
4. **Create an Email Service**:
   - In EmailJS dashboard, add an email service (Gmail, Outlook, etc.)
   - Copy the Service ID
   
5. **Create an Email Template**:
   - Create a new template in EmailJS
   - Use these variables: `{{from_name}}`, `{{reply_to}}`, `{{message}}`
   - Copy the Template ID
   
6. **Open `javascript/sendEmail.js`**:
   - Replace `YOUR_SERVICE_ID` with your Service ID
   - Replace `YOUR_TEMPLATE_ID` with your Template ID

**Example:**
```javascript
// In index.js
emailjs.init('user_abc123xyz456');

// In sendEmail.js
const serviceID = 'service_gmail123';
const templateID = 'template_contact789';
```

### **2. Update Social Media Links**

Open `index.html` and update these links (appears twice - desktop nav and mobile sidebar):

```html
<!-- LinkedIn -->
<a href="https://linkedin.com/in/yourprofile"...>

<!-- Facebook -->
<a href="https://facebook.com/yourprofile"...>

<!-- GitHub (already set) -->
<a href="https://github.com/Kiretychowdary"...>
```

### **3. Update Your Resume/CV**

- Replace `assets/Kirety_Manne.pdf` with your actual resume PDF
- Make sure the filename matches, or update the links in `index.html`:
  - Search for `./assets/cv.pdf` and update to your filename

### **4. Update Canonical URL**

Open `index.html` (line 9) and replace:
```html
<link rel="canonical" href="https://yourdomain.com/" />
```
With your actual domain when deployed.

### **5. Customize Projects Section**

Update the projects in `index.html` to showcase YOUR work:
- Project titles, descriptions, and links
- Technologies used (the icon badges)
- Demo links and GitHub repository links

---

## 🎨 Optional Customizations

### **Enable Custom Cursor (Optional)**
The custom cursor is currently disabled. To enable it:

1. In `index.html`, uncomment lines 36-38:
```html
<div class="cursor">
  <div class="cursor__border"></div>
</div>
```

2. The cursor.js already has proper null checks, so it will work automatically!

### **Add Analytics (Optional)**
Replace the Splitbee analytics with your preferred solution:

**Google Analytics:**
```html
<!-- Add in <head> section -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

**Plausible (Privacy-friendly):**
```html
<script defer data-domain="yourdomain.com" src="https://plausible.io/js/script.js"></script>
```

---

## 🚀 Testing Checklist

Before deploying, test these:

- [ ] Contact form sends emails successfully
- [ ] All navigation links work
- [ ] Social media links open correctly
- [ ] Resume PDF downloads
- [ ] Mobile menu opens/closes properly
- [ ] All project links work
- [ ] Test on mobile devices
- [ ] Test on different browsers (Chrome, Firefox, Safari, Edge)

---

## 📊 Further Improvements

1. **Run Lighthouse Audit** (Chrome DevTools):
   - Performance optimization suggestions
   - Accessibility checks
   - SEO recommendations

2. **Optimize Images**:
   - Compress PNG/JPG files (use TinyPNG.com)
   - Convert to WebP format for better performance
   - Use proper image sizes (don't serve huge images)

3. **Add Loading States**:
   - Loading skeletons for projects
   - Smooth transitions

4. **Consider Adding**:
   - Blog section
   - Testimonials
   - More projects
   - Skills proficiency levels

---

## 🛠️ Tech Stack

- **HTML5** - Semantic markup
- **CSS3** - Custom properties, flexbox, animations
- **JavaScript (ES6+)** - Modern JS with modules
- **Font Awesome 6.5.1** - Icons
- **Typed.js** - Text animation
- **EmailJS** - Contact form
- **Custom Fonts** - Centra & QuirkyRobot

---

## 📞 Need Help?

If you encounter any issues:
1. Check browser console for errors (F12)
2. Verify EmailJS setup
3. Ensure all file paths are correct
4. Test in incognito/private mode to rule out extensions

---

## 🎉 You're All Set!

Your portfolio is now professional, accessible, and performance-optimized. Update the content with your personal information and projects, then deploy to:
- **GitHub Pages** (free)
- **Netlify** (free, easy custom domain)
- **Vercel** (free, automatic deployments)

Good luck with your portfolio! 🚀
