# 🎨 Professional Typography Guide

## Overview
Your portfolio now uses a **professional typography system** with modern Google Fonts, consistent sizing, and excellent readability. This guide explains how to use the typography system effectively.

---

## 📚 Font Families

### 1. **Primary Font (Body Text)**
- **Font:** Inter
- **Usage:** Paragraphs, body text, general content
- **Class:** `.font-primary` or default
- **Fallback:** System fonts (-apple-system, Segoe UI)

```css
font-family: var(--font-primary);
```

**Example:**
```html
<p>This is body text using the primary font.</p>
```

---

### 2. **Heading Font**
- **Font:** Space Grotesk
- **Usage:** Section headings, titles, h1-h6
- **Class:** `.font-heading`
- **Fallback:** Poppins, sans-serif

```css
font-family: var(--font-heading);
```

**Example:**
```html
<h2 class="font-heading">Section Heading</h2>
```

---

### 3. **Display Font**
- **Font:** Poppins
- **Usage:** Hero text, large display titles, CTAs
- **Class:** `.font-display`
- **Fallback:** Inter, sans-serif

```css
font-family: var(--font-display);
```

**Example:**
```html
<h1 class="display-1 font-display">Hero Title</h1>
```

---

### 4. **Monospace Font (Code)**
- **Font:** JetBrains Mono
- **Usage:** Code blocks, terminal text, tech stack
- **Class:** `.font-mono`
- **Fallback:** Courier New, monospace

```css
font-family: var(--font-mono);
```

**Example:**
```html
<code class="font-mono">const name = "Kirety";</code>
```

---

## 📏 Font Sizes

### Size Scale (CSS Variables)
```css
--text-xs: 0.75rem;      /* 12px - Small labels */
--text-sm: 0.875rem;     /* 14px - Small text */
--text-base: 1rem;       /* 16px - Body text */
--text-lg: 1.125rem;     /* 18px - Large body */
--text-xl: 1.25rem;      /* 20px - Subheadings */
--text-2xl: 1.5rem;      /* 24px - Small titles */
--text-3xl: 1.875rem;    /* 30px - Medium titles */
--text-4xl: 2.25rem;     /* 36px - Large titles */
--text-5xl: 3rem;        /* 48px - Hero text */
--text-6xl: 3.75rem;     /* 60px - Large hero */
--text-7xl: 4.5rem;      /* 72px - Extra large */
```

### Utility Classes
```html
<p class="text-xs">Extra small text</p>
<p class="text-sm">Small text</p>
<p class="text-base">Base size (default)</p>
<p class="text-lg">Large text</p>
<p class="text-xl">Extra large text</p>
```

### Responsive Sizing
Fonts automatically scale up on larger screens:
- **Mobile:** Base sizes (16px body)
- **Tablet (768px+):** +1px (17px body)
- **Desktop (1024px+):** +2px (18px body)

---

## ⚖️ Font Weights

### Available Weights
```css
--font-light: 300;      /* Light text */
--font-normal: 400;     /* Normal text */
--font-medium: 500;     /* Medium emphasis */
--font-semibold: 600;   /* Semi-bold */
--font-bold: 700;       /* Bold text */
--font-extrabold: 800;  /* Extra bold */
--font-black: 900;      /* Blackest weight */
```

### Utility Classes
```html
<p class="font-light">Light weight</p>
<p class="font-normal">Normal weight (default)</p>
<p class="font-medium">Medium weight</p>
<p class="font-semibold">Semibold weight</p>
<p class="font-bold">Bold weight</p>
<p class="font-extrabold">Extra bold</p>
<p class="font-black">Black weight</p>
```

---

## 📐 Line Heights

### Line Height Scale
```css
--leading-none: 1;         /* Tight for headings */
--leading-tight: 1.25;     /* Headings */
--leading-snug: 1.375;     /* Compact text */
--leading-normal: 1.5;     /* Default */
--leading-relaxed: 1.625;  /* Body text */
--leading-loose: 2;        /* Spaced text */
```

### Utility Classes
```html
<h1 class="leading-none">Tight heading</h1>
<p class="leading-relaxed">Relaxed paragraph</p>
<p class="leading-loose">Loose spacing</p>
```

---

## 🔤 Letter Spacing

### Tracking Scale
```css
--tracking-tighter: -0.05em;  /* Very tight */
--tracking-tight: -0.025em;   /* Tight */
--tracking-normal: 0;         /* Normal */
--tracking-wide: 0.025em;     /* Wide */
--tracking-wider: 0.05em;     /* Wider */
--tracking-widest: 0.1em;     /* Widest */
```

### Utility Classes
```html
<h1 class="tracking-tight">Tight Heading</h1>
<p class="tracking-wide uppercase">WIDE SPACING</p>
<button class="tracking-widest">BUTTON TEXT</button>
```

---

## 🎯 Heading Styles

### Default Heading Sizes
```html
<h1>Main Title</h1>        <!-- 48px / 3rem -->
<h2>Section Title</h2>     <!-- 36px / 2.25rem -->
<h3>Subsection</h3>        <!-- 30px / 1.875rem -->
<h4>Card Title</h4>        <!-- 24px / 1.5rem -->
<h5>Small Heading</h5>     <!-- 20px / 1.25rem -->
<h6>Tiny Heading</h6>      <!-- 18px / 1.125rem -->
```

### Display Classes (For Hero Sections)
```html
<h1 class="display-1">Huge Hero Title</h1>     <!-- 72px -->
<h1 class="display-2">Large Hero Title</h1>    <!-- 60px -->
<h1 class="display-3">Medium Hero Title</h1>   <!-- 48px -->
```

---

## 🌈 Text Colors

### Color Utility Classes
```html
<p class="text-primary">Primary text color</p>
<p class="text-secondary">Secondary text color</p>
<p class="text-muted">Muted text color</p>
<p class="text-cyan">Cyan accent text</p>
<p class="text-magenta">Magenta accent text</p>
<p class="text-blue">Blue accent text</p>
<p class="text-purple">Purple accent text</p>
<p class="text-gold">Gold accent text</p>
<p class="text-white">White text</p>
```

### Gradient Text
```html
<h1 class="gradient-text">Cyan to Magenta Gradient</h1>
<h1 class="gradient-text-blue">Cyan to Blue Gradient</h1>
<h1 class="gradient-text-purple">Magenta to Purple Gradient</h1>
```

**Effect:** Text with gradient color (perfect for headings!)

---

## ✨ Text Transform

### Utility Classes
```html
<p class="uppercase">UPPERCASE TEXT</p>
<p class="lowercase">lowercase text</p>
<p class="capitalize">Capitalize Each Word</p>
<p class="normal-case">Normal Case</p>
```

---

## 📍 Text Alignment

### Utility Classes
```html
<p class="text-left">Left aligned</p>
<p class="text-center">Center aligned</p>
<p class="text-right">Right aligned</p>
<p class="text-justify">Justified text</p>
```

---

## 💡 Special Text Styles

### Lead Paragraph (Intro Text)
```html
<p class="lead">
  This is a lead paragraph with larger text for introductions.
</p>
```
**Size:** 20px (1.25rem)

### Code & Monospace
```html
<code>const greeting = "Hello";</code>
<kbd>Ctrl+C</kbd>
<pre><code>Multi-line
code block</code></pre>
```

### Blockquotes
```html
<blockquote>
  <p>This is a professional quote with styling.</p>
  <cite>- Author Name</cite>
</blockquote>
```

### Emphasis & Strong
```html
<p>This is <em>emphasized</em> and this is <strong>strong</strong>.</p>
```

### Highlight/Mark
```html
<p>This text has a <mark>highlighted section</mark> for emphasis.</p>
```

---

## 📱 Responsive Typography

### Automatic Scaling
All text automatically scales based on screen size:

**Mobile (< 768px):**
- Body: 16px
- H1: 48px
- Display: 72px

**Tablet (768px - 1024px):**
- Body: 17px
- H1: 56px
- Display: 88px

**Desktop (1024px+):**
- Body: 18px
- H1: 64px
- Display: 96px

**Large Desktop (1440px+):**
- Display: 112px

---

## 🎨 Section Headers

### Standard Section Layout
```html
<div class="section-header">
  <h2 class="section-title gradient-text">About Me</h2>
  <p class="section-subtitle">
    Passionate developer crafting digital experiences
  </p>
</div>
```

**Features:**
- Centered alignment
- Gradient title
- Subtitle with max-width for readability
- Bottom margin spacing

---

## ♿ Accessibility Features

### 1. **Screen Reader Only Text**
```html
<span class="sr-only">Hidden from visual but read by screen readers</span>
```

### 2. **Focus Visible**
All interactive elements have visible focus indicators for keyboard navigation.

### 3. **Selection Highlighting**
Text selection has custom cyan highlighting.

### 4. **Optimal Line Length**
Use `.prose` class for readable line lengths:
```html
<div class="prose">
  <p>Long form content with optimal reading width (65 characters).</p>
</div>
```

---

## 📖 Best Practices

### 1. **Hierarchy**
```html
<!-- ✅ Good: Clear hierarchy -->
<h1>Main Title</h1>
<h2>Section Title</h2>
<h3>Subsection</h3>
<p>Body text</p>

<!-- ❌ Bad: Skipping levels -->
<h1>Main Title</h1>
<h4>Section Title</h4>
```

### 2. **Contrast**
- Use `.text-primary` for important text
- Use `.text-secondary` for regular text
- Use `.text-muted` for less important text

### 3. **Line Length**
Keep paragraphs readable (65-75 characters per line):
```html
<div class="prose">
  <p>Your content here...</p>
</div>
```

### 4. **Spacing**
Use consistent spacing between elements:
- Headings: Tight line height (1.25)
- Body: Relaxed line height (1.625)
- Lists: Normal spacing (1.5)

---

## 🔧 Common Patterns

### Hero Section
```html
<h1 class="display-1 font-display gradient-text tracking-tight">
  Full Stack Developer
</h1>
<p class="lead text-secondary">
  Building amazing web experiences
</p>
```

### Card Title
```html
<h3 class="font-heading font-bold text-primary">
  Project Title
</h3>
<p class="text-sm text-muted">
  Project description
</p>
```

### Button Text
```html
<button class="font-semibold tracking-wide uppercase">
  Get In Touch
</button>
```

### Code Display
```html
<pre><code class="font-mono text-sm">
npm install react
</code></pre>
```

---

## 🎯 Quick Reference

### Most Used Classes
```css
/* Fonts */
.font-primary      /* Inter - Body text */
.font-heading      /* Space Grotesk - Headings */
.font-display      /* Poppins - Hero text */
.font-mono         /* JetBrains Mono - Code */

/* Sizes */
.text-sm           /* Small */
.text-base         /* Default */
.text-lg           /* Large */
.text-xl           /* Extra large */

/* Weights */
.font-normal       /* 400 */
.font-medium       /* 500 */
.font-semibold     /* 600 */
.font-bold         /* 700 */

/* Colors */
.text-primary      /* Main text */
.text-secondary    /* Secondary text */
.text-cyan         /* Accent color */
.gradient-text     /* Gradient effect */

/* Spacing */
.tracking-wide     /* Letter spacing */
.leading-relaxed   /* Line height */

/* Transform */
.uppercase         /* UPPERCASE */
.text-center       /* Center align */
```

---

## 📊 Typography Checklist

✅ **Use proper heading hierarchy** (h1 → h2 → h3)  
✅ **Apply gradient-text to section titles** for visual appeal  
✅ **Use lead class for introduction paragraphs**  
✅ **Add tracking-wide to uppercase text** for readability  
✅ **Use font-mono for code and technical terms**  
✅ **Keep line lengths readable with .prose class**  
✅ **Use semantic HTML** (strong, em, code, etc.)  
✅ **Ensure sufficient color contrast**  
✅ **Test on multiple screen sizes**  
✅ **Verify keyboard navigation focus states**  

---

## 🚀 Examples in Your Portfolio

### Hero Section
```html
<h1 class="display-1 gradient-text tracking-tight">
  Kirety Manne
</h1>
<p class="lead font-medium">
  Full Stack Developer & AI/ML Enthusiast
</p>
```

### About Section
```html
<h2 class="section-title gradient-text uppercase">
  About Me
</h2>
<p class="lead text-center text-secondary">
  Passionate developer crafting digital experiences
</p>
```

### Project Cards
```html
<h3 class="font-heading font-bold text-xl">
  Project Name
</h3>
<p class="text-sm text-secondary leading-relaxed">
  Project description goes here...
</p>
```

### Footer
```html
<h4 class="font-semibold text-lg tracking-wide uppercase">
  Quick Links
</h4>
```

---

## 🎨 Summary

Your portfolio now has:
- ✅ **4 professional font families** (Inter, Space Grotesk, Poppins, JetBrains Mono)
- ✅ **Complete size scale** (12px - 112px)
- ✅ **7 font weights** (300 - 900)
- ✅ **Responsive typography** (auto-scaling)
- ✅ **Gradient text effects**
- ✅ **Accessibility features**
- ✅ **Consistent spacing & hierarchy**
- ✅ **Professional readability**

**The typography is now production-ready and looks amazing on all devices! 🎉**
