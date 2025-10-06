# ✏️ Customization Checklist for Kirety

Use this checklist to personalize your portfolio step by step.

---

## 📄 Files to Edit

### **index.html**

#### Personal Information
- [ ] Line 7: Meta description (update with your tagline)
- [ ] Line 9: Canonical URL (update when deployed)
- [ ] Line 14: Page title (already "Kirety - Portfolio" ✅)
- [ ] Line 159: Hero heading (already "Hi, I'm Kirety!" ✅)
- [ ] Line 167-169: Update typed animation text if needed
- [ ] Line 173-176: Hero paragraph (describe yourself)

#### Social Media Links (Update in 2 places)
**Desktop Navigation (~Line 68-90):**
- [ ] Line 69: LinkedIn URL → `https://linkedin.com/in/YOUR_USERNAME`
- [ ] Line 77: Facebook URL → `https://facebook.com/YOUR_USERNAME`
- [ ] Line 85: GitHub URL → ✅ Already set to Kiretychowdary

**Mobile Sidebar (~Line 115-125):**
- [ ] Line 115: LinkedIn URL
- [ ] Line 119: Facebook URL  
- [ ] Line 123: GitHub URL → ✅ Already set

#### Resume Link (2 places)
- [ ] Line 92: Desktop nav resume link
- [ ] Line 131: Mobile sidebar resume link
- [ ] Check filename matches: `./assets/cv.pdf` or update to your filename

#### Projects Section (~Line 195-440)
**Project 1: Chatify**
- [ ] Line 204: Title
- [ ] Line 205-207: Description
- [ ] Line 257-261: Demo account credentials (if applicable)
- [ ] Line 263: Demo link URL
- [ ] Line 266: GitHub repo URL

**Project 2: Tweeter**
- [ ] Line 277: Title
- [ ] Line 278-282: Description
- [ ] Line 346-350: Demo account
- [ ] Line 352: Demo link
- [ ] Line 355: GitHub repo

**Project 3: Engineers**
- [ ] Line 379: Title
- [ ] Line 380-383: Description
- [ ] Line 404: Live site link

**Project 4: Your Project (Placeholder)**
- [ ] Line 425: Title
- [ ] Line 426-429: Call to action text
- [ ] Or replace with another real project

#### Contact Section (~Line 640)
- [ ] Form is ready to use (just setup EmailJS)

---

### **javascript/index.js**

#### EmailJS Configuration
- [ ] Line 15: Replace `'YOUR_PUBLIC_KEY_HERE'` with your EmailJS public key
  - Get from: https://dashboard.emailjs.com/admin/account

---

### **javascript/sendEmail.js**

#### EmailJS Service Setup
- [ ] Line 16: Replace `'YOUR_SERVICE_ID'` with your EmailJS service ID
- [ ] Line 17: Replace `'YOUR_TEMPLATE_ID'` with your EmailJS template ID
  - Get from: https://dashboard.emailjs.com/admin

---

### **assets/ folder**

#### Resume/CV
- [ ] Add your resume as `cv.pdf` in assets folder
- [ ] OR update the links in index.html to match your filename
- [ ] Current file: `Kirety_Manne.pdf` (update if needed)

#### Images (Optional)
- [ ] Replace logo: `assets/images/logo2.png`
- [ ] Update project screenshots in `assets/videos/` folder
- [ ] Optimize all images (compress for web)

---

## 🎨 Style Customizations (Optional)

### **styles/globals.css**

#### Colors (~Line 43-49)
```css
--main-background: #0D0514;
--primary-color: #a527d6;      /* Purple accent */
--secondary-color: #57df79;    /* Green accent */
--tertiary-color: #4aa9d1;     /* Blue accent */
--fourth-color: #E7B43A;       /* Yellow accent */
```
- [ ] Update color scheme if desired

#### Fonts
- [ ] Current: Centra (body) & QuirkyRobot (headings)
- [ ] Replace font files in `assets/fonts/` if desired
- [ ] Update @font-face declarations in globals.css

---

## 🧪 Testing Checklist

### Functionality
- [ ] All navigation links scroll to correct sections
- [ ] Mobile hamburger menu opens/closes
- [ ] Contact form shows success/error messages
- [ ] EmailJS sends actual emails to your inbox
- [ ] All external links open in new tab
- [ ] Resume downloads correctly

### Content
- [ ] All "YOUR_" placeholders replaced
- [ ] Personal info updated (name, bio, etc.)
- [ ] Social media links work and go to YOUR profiles
- [ ] Projects showcase YOUR work
- [ ] Contact form sends to YOUR email

### Responsive Design
- [ ] Test on mobile (375px width)
- [ ] Test on tablet (768px width)
- [ ] Test on desktop (1920px width)
- [ ] All text readable
- [ ] Images display correctly
- [ ] No horizontal scroll

### Browser Testing
- [ ] Chrome/Edge
- [ ] Firefox
- [ ] Safari (if on Mac)
- [ ] Mobile browsers (iOS Safari, Chrome Mobile)

### Performance
- [ ] Run Lighthouse audit (aim for 90+ scores)
- [ ] Images optimized/compressed
- [ ] No console errors
- [ ] Fast load time (<3 seconds)

---

## 🚀 Pre-Deploy Checklist

- [ ] All EmailJS configuration complete and tested
- [ ] All social media links updated
- [ ] Resume file uploaded
- [ ] Projects updated with YOUR work
- [ ] Canonical URL updated (in index.html)
- [ ] No console errors
- [ ] Tested on mobile device
- [ ] All links verified
- [ ] Contact form tested and working
- [ ] Removed or replaced placeholder content

---

## 📱 Post-Deploy Tasks

- [ ] Test live site thoroughly
- [ ] Submit to search engines (Google Search Console)
- [ ] Add custom domain (optional)
- [ ] Setup analytics (optional)
- [ ] Share on social media
- [ ] Add to LinkedIn profile
- [ ] Monitor contact form submissions

---

**You've got this! 🎉**

Once you complete this checklist, your portfolio will be 100% personalized and ready to impress!
