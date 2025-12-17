# MessageCard Responsive Breakpoints Visual Guide

## 📐 Screen Size Reference

```
┌─────────────────────────────────────────────────────────────────┐
│                    DESKTOP (> 1024px)                            │
│  ┌───────────────────────────────────────────────────────┐      │
│  │  💌 A Message From My Heart                           │      │
│  │                                                        │      │
│  │  ┌──────────────────────────────────────────────┐     │      │
│  │  │ ════════════════════════════════════════════ │     │      │
│  │  │ ║                                          ║ │     │      │
│  │  │ ║        ✨ Click to Open ✨              ║ │     │      │
│  │  │ ║                                          ║ │     │      │
│  │  │ ════════════════════════════════════════════ │     │      │
│  │  └──────────────────────────────────────────────┘     │      │
│  │                                                        │      │
│  │  Font: 1.8rem (heading), 1.05rem (text)               │      │
│  │  Animation: 1.5s, 15° rotation                        │      │
│  └───────────────────────────────────────────────────────┘      │
└─────────────────────────────────────────────────────────────────┘

┌──────────────────────────────────────────────────────┐
│           TABLET (768px - 1024px)                    │
│  ┌──────────────────────────────────────────┐        │
│  │  💌 A Message From My Heart              │        │
│  │                                           │        │
│  │  ┌──────────────────────────────────┐    │        │
│  │  │ ══════════════════════════════  │    │        │
│  │  │ ║                            ║  │    │        │
│  │  │ ║   ✨ Click/Tap to Open ✨  ║  │    │        │
│  │  │ ║                            ║  │    │        │
│  │  │ ══════════════════════════════  │    │        │
│  │  └──────────────────────────────────┘    │        │
│  │                                           │        │
│  │  Font: 1.7rem (heading), 1.02rem (text)  │        │
│  │  Animation: 1.4s, 12° rotation           │        │
│  └──────────────────────────────────────────┘        │
└──────────────────────────────────────────────────────┘

┌──────────────────────────────────────┐
│    MOBILE PORTRAIT (< 768px)         │
│  ┌──────────────────────────┐        │
│  │ 💌 Message From Heart    │        │
│  │                          │        │
│  │  ┌──────────────────┐    │        │
│  │  │ ══════════════  │    │        │
│  │  │ ║            ║  │    │        │
│  │  │ ║ ✨ Tap ✨  ║  │    │        │
│  │  │ ║            ║  │    │        │
│  │  │ ══════════════  │    │        │
│  │  └──────────────────┘    │        │
│  │                          │        │
│  │  Font: 1.4rem, 0.95rem   │        │
│  │  Animation: 1.4s, 12°    │        │
│  └──────────────────────────┘        │
└──────────────────────────────────────┘

┌─────────────────────────────┐
│  SMALL MOBILE (< 480px)     │
│  ┌─────────────────┐        │
│  │ 💌 Message      │        │
│  │                 │        │
│  │  ┌─────────┐    │        │
│  │  │ ══════ │    │        │
│  │  │ ║    ║ │    │        │
│  │  │ ║ ✨  ║ │    │        │
│  │  │ ══════ │    │        │
│  │  └─────────┘    │        │
│  │                 │        │
│  │  Font: 1.2rem   │        │
│  │  Anim: 1.2s,10° │        │
│  └─────────────────┘        │
└─────────────────────────────┘
```

## 🎯 Breakpoint Details

### Large Desktop (> 1024px)

**Dimensions**: Full width experience

- **Heading**: 1.8rem
- **Body Text**: 1.05rem
- **Animation**: 1.5s duration, 15° rotation
- **Interaction**: Click with mouse cursor
- **Layout**: Maximum spacing and padding
- **Features**: All visual effects at full quality

### Tablet (768px - 1024px)

**Dimensions**: Medium-sized devices

- **Heading**: 1.7rem
- **Body Text**: 1.02rem
- **Animation**: 1.4s duration, 12° rotation
- **Interaction**: Touch or mouse
- **Layout**: Optimized spacing
- **Features**: Balanced performance and visuals

### Mobile Portrait (< 768px)

**Dimensions**: Vertical phone orientation

- **Heading**: 1.4rem
- **Body Text**: 0.95rem
- **Animation**: 1.4s duration, 12° rotation
- **Interaction**: Touch with "Tap to Open"
- **Layout**: Compact, touch-optimized
- **Features**: Performance-focused

### Small Mobile (< 480px)

**Dimensions**: Smaller phones

- **Heading**: 1.2rem
- **Body Text**: 0.92rem
- **Animation**: 1.2s duration, 10° rotation
- **Interaction**: Large touch targets
- **Layout**: Minimal padding
- **Features**: Essential animations only

### Very Small Mobile (< 360px)

**Dimensions**: Compact devices

- **Heading**: 1.2rem
- **Body Text**: 0.9rem
- **Animation**: 1.2s duration, 10° rotation
- **Interaction**: Simplified
- **Layout**: Maximum content fit
- **Features**: Reduced complexity

## 📊 Responsive Specifications

### Typography Scale

```
Screen Size        Heading    Body Text   Line Height
─────────────────────────────────────────────────────
> 1024px           1.8rem     1.05rem     1.7
768px - 1024px     1.7rem     1.02rem     1.65
600px - 768px      1.4rem     0.95rem     1.55
480px - 600px      1.3rem     0.92rem     1.5
< 480px            1.2rem     0.9rem      1.45
```

### Animation Timings

```
Screen Size        Duration    Rotation    Delay
───────────────────────────────────────────────────
> 768px            1.5s        15°         0.8s
481px - 768px      1.4s        12°         0.6s
< 480px            1.2s        10°         0.6s
```

### Spacing & Padding

```
Screen Size        Container   Message     Hint Button
──────────────────────────────────────────────────────
> 1024px           30/20px     30/40px     20/40px
768px - 1024px     25/15px     28/35px     18/35px
600px - 768px      20/15px     25/30px     16/32px
480px - 600px      15/10px     22/20px     14/28px
< 480px            12/8px      20/18px     12/24px
```

### Element Sizes

```
Element            Desktop    Tablet     Mobile     Small
────────────────────────────────────────────────────────
Curtain Rod        20px       18px       16px       14px
Rod Finials        30px       25px       22px       20px
Min Height         400px      380px      320px      280px
Max Text Height    60vh       55vh       50vh       45vh
```

## 🎨 Visual Adjustments by Screen Size

### Desktop Experience

- Full 3D perspective effects
- Dramatic curtain animations
- Ample white space
- Hover effects enabled
- Mouse cursor indicators

### Tablet Experience

- Moderate 3D effects
- Balanced animations
- Comfortable spacing
- Touch-friendly targets
- Hybrid interactions

### Mobile Experience

- Simplified 3D (performance)
- Faster animations
- Compact layout
- Large touch areas
- Touch-only interactions

## 🔄 Animation Behavior

### Opening Sequence

```
1. User clicks/taps curtain hint
2. Hint button scales down (0.1s)
3. Curtains slide and rotate outward (1.2-1.5s)
4. Curtains fade to opacity 0 (0.5s)
5. Message content fades in and scales up (0.8-1s)
```

### Reset Sequence (on page navigation)

```
1. Message fades out (0.3s)
2. Curtains fade in (0.3s)
3. Curtains slide back to center (0.5s)
4. Hint button reappears
```

## 🎯 Touch Target Sizes

Minimum touch target sizes follow iOS and Android guidelines:

| Element        | Desktop    | Mobile     | Notes                      |
| -------------- | ---------- | ---------- | -------------------------- |
| Curtain Hint   | 60×40px    | 60×48px    | Comfortable tap size       |
| Curtain Area   | Full width | Full width | Entire curtain is tappable |
| Message Scroll | Auto       | 44px+      | Scroll area for long text  |

## 🌟 Best Practices Applied

1. **Mobile-First**: Core functionality works on smallest screens
2. **Progressive Enhancement**: Additional effects on larger screens
3. **Touch Optimization**: Large targets, clear feedback
4. **Performance**: GPU-accelerated transforms
5. **Accessibility**: Keyboard nav, ARIA labels
6. **Responsive Images**: Scales with viewport
7. **Fluid Typography**: Smooth scaling between breakpoints
8. **Flexible Layouts**: Adapts to any screen size

## 🧪 Testing Viewports

### Recommended Test Sizes

- 320px (iPhone SE, older Android)
- 375px (iPhone 12/13 Mini)
- 390px (iPhone 12/13/14)
- 430px (iPhone 14 Pro Max)
- 768px (iPad Portrait)
- 1024px (iPad Landscape)
- 1440px (Laptop)
- 1920px (Desktop)

### Chrome DevTools Presets

- Mobile S (320px)
- Mobile M (375px)
- Mobile L (425px)
- Tablet (768px)
- Laptop (1024px)
- Laptop L (1440px)

---

**Use this guide** to understand how the MessageCard adapts across devices and to verify responsive behavior during testing!
