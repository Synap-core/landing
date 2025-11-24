# Mobile Responsiveness Checklist

This document outlines what has been implemented and what should be tested for mobile responsiveness.

## ✅ Implemented Mobile Optimizations

### 1. **Viewport & Meta Tags** (layout.tsx)
- ✅ `width=device-width, initial-scale=1`
- ✅ `maximum-scale=5, user-scalable=true` (allows zoom)
- ✅ Theme color for dark/light modes
- ✅ Apple mobile web app capable
- ✅ Format detection disabled for telephone

### 2. **Navigation** (Navigation.tsx)
- ✅ Hamburger menu on mobile (<800px)
- ✅ Desktop nav hidden on mobile
- ✅ Mobile menu dropdown with all links
- ✅ Click to close menu after navigation
- ✅ Proper z-index (1000) for fixed positioning

### 3. **Hero** (Hero.tsx)
- ✅ CTA buttons wrap on small screens (`flexWrap: 'wrap'`)
- ✅ Font size responsive: 36px mobile → 72px desktop
- ✅ Line height adjusted: 44px mobile → 80px desktop
- ✅ Centered layout works on all sizes

### 4. **TheShift** (TheShift.tsx)
- ✅ Cards stack vertically (needs testing)
- ✅ Padding adjusts via Tamagui `$sm` props

### 5. **Footer** (Footer.tsx)
- ✅ Columns stack on mobile (`$sm={{ flexDirection: 'column' }}`)
- ✅ Gap adjusted for mobile view
- ✅ Text remains readable on small screens

### 6. **Ecosystem** (Ecosystem.tsx)
- ✅ Category cards flex wrap
- ✅ Plugin grid wraps
- ✅ Mobile-first padding

### 7. **Typography**
- ✅ Responsive font sizes via Tamagui media queries
- ✅ Line heights adjusted for readability
- ✅ Headings don't break layout on small screens

---

## 🧪 Testing Required

### Devices to Test

1. **iPhone**:
   - Safari (iOS 15+)
   - Viewport: 375x667 (iPhone SE), 390x844 (iPhone 13)

2. **Android**:
   - Chrome
   - Viewport: 360x740 (common Android)

3. **Tablet**:
   - iPad (Safari)
   - Viewport: 768x1024

### Test Scenarios

#### Navigation
- [ ] Hamburger menu appears on mobile
- [ ] Menu opens/closes smoothly
- [ ] All links work on mobile
- [ ] No horizontal scroll

#### Hero
- [ ] Headline readable (not too big/small)
- [ ] CTAs stack vertically on mobile
- [ ] Buttons are tappable (min 44px target)
- [ ] Spacing looks good

#### The Shift
- [ ] Feudal/Sovereign cards don't overlap
- [ ] Cards are readable
- [ ] Animation doesn't cause performance issues
- [ ] Scroll behavior smooth

#### Ecosystem
- [ ] Category cards stack properly
- [ ] Plugin grid wraps nicely
- [ ] CTAs remain accessible

#### Whitepaper
- [ ] Markdown content readable on mobile
- [ ] Code blocks don't overflow
- [ ] Tables scroll horizontally if needed
- [ ] Font size comfortable for reading

#### Footer
- [ ] Columns stack vertically
- [ ] Links remain tappable
- [ ] No text overflow

---

## 📱 Known Issues (To Fix if Found)

### Potential Problems
1. **TheShift animation**: May be CPU-intensive on low-end devices
   - *Solution*: Add `prefers-reduced-motion` check
   
2. **Rive background**: Large file size?
   - *Solution*: Lazy load or disable on mobile

3. **Fixed navigation**: May cover content on very small screens
   - *Solution*: Adjust `paddingTop` on mobile

4. **Touch targets**: Some buttons may be <44px on mobile
   - *Solution*: Increase button `minHeight` and `minWidth`

---

## 🔧 Quick Fixes (If Needed)

### Add to globals.css:
```css
/* Prevent horizontal scroll */
html, body {
  overflow-x: hidden;
  max-width: 100vw;
}

/* Improve touch targets */
button, a {
  min-height: 44px;
  min-width: 44px;
}

/* Reduce motion for accessibility */
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## ✅ Final Checklist Before Launch

- [ ] Test on real iPhone (Safari)
- [ ] Test on real Android (Chrome)
- [ ] Test on iPad
- [ ] Lighthouse mobile audit (Score >90)
- [ ] No horizontal scroll on any page
- [ ] All buttons/links tappable (44px min)
- [ ] Readability good (no tiny text)
- [ ] No performance issues (smooth scrolling)
- [ ] Forms (if any) work with mobile keyboards

---

## 📊 Lighthouse Mobile Targets

**Run**: `npm run build && npx serve@latest out`

**Target Scores**:
- Performance: **>85** (mobile is harder than desktop)
- Accessibility: **>95**
- Best Practices: **100**
- SEO: **>90**

**Common Mobile Issues**:
- Large images (lazy load, optimize)
- Render-blocking resources (defer scripts)
- Tap targets too small (min 44x44px)
- Text too small (min 16px body, 12px secondary)

---

## Documentation Links

- **SEO**: Added to `layout.tsx`
- **Doc links**: Updated to `doc.synap.live`
- **Mobile nav**: Implemented with hamburger menu
- **Viewport**: Configured in `layout.tsx`

**Status**: ✅ Ready for mobile testing
**Next**: Test on real devices, iterate based on findings
