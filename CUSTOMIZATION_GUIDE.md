# 📝 Customization Guide

## Quick Start Checklist

Follow these steps to personalize your birthday website:

### Step 1: Change the Birthday Person's Name

**File:** `src/App.jsx`

**Find lines 91-96:**
```jsx
{birthdayReached ? (
  <>
    Happy Birthday <span className="highlight">[Name]</span> 🎂
  </>
) : (
  <>
    Counting down to <span className="highlight">[Name]'s</span>{" "}
    special day 🎂
  </>
)}
```

**Replace:** `[Name]` with the birthday person's name

---

### Step 2: Set the Birthday Date

**File:** `src/components/Countdown.jsx`

**Find lines 13-30:**
```jsx
const targetDate = (() => {
  // OPTION 1: Automatic (tomorrow at midnight)
  const now = new Date();
  return new Date(
    now.getFullYear(),
    now.getMonth(),
    now.getDate() + 1,
    0,
    0,
    0
  );

  // OPTION 2: Custom date (uncomment and modify)
  // return new Date('2025-12-31T00:00:00');

  // OPTION 3: Test in 10 seconds (uncomment for quick test)
  // const now = new Date();
  // return new Date(now.getTime() + 10000);
})();
```

**Choose one option:**
- **Option 1:** Automatically sets to tomorrow at midnight (good for testing)
- **Option 2:** Set a specific date (recommended for production)
- **Option 3:** Test mode - countdown ends in 10 seconds

**Example for specific date:**
```jsx
// Comment out Option 1 and uncomment Option 2
return new Date('2025-12-31T00:00:00');
// Format: YYYY-MM-DDTHH:MM:SS
```

---

### Step 3: Write Your Birthday Message

**File:** `src/components/MessageCard.jsx`

**Find line 17:**
```jsx
const message = `[Recipient Name],

Your personalized birthday message goes here.

— [Your Name]`;
```

**Replace with your message:**
```jsx
const message = `My Dearest Sarah,

Every moment with you is a treasure. On this special day,
I want you to know how much you mean to me.

Your smile brightens my darkest days, and your love
makes everything worthwhile.

Happy Birthday, my love! 💖

— John`;
```

**Tips:**
- Use backticks (\`) for multi-line text
- Add emojis for extra flair
- Keep it personal and heartfelt
- Line breaks are preserved automatically

---

### Step 4: Add Your Photos

**Location:** `public/images/`

**Steps:**
1. Navigate to the `public/images/` folder
2. Replace these files with your photos:
   - `pic1.jpg`
   - `pic2.jpg`
   - `pic3.jpg`
   - `pic4.jpg`
   - `pic5.jpg`
   - `pic6.jpg`

**Photo Guidelines:**
- **Format:** JPG or PNG
- **Size:** 800x800px or larger (square works best)
- **Resolution:** High quality (but not too large, aim for <2MB each)
- **Naming:** Must match exactly: `pic1.jpg`, `pic2.jpg`, etc.

**Add More Photos:**
Edit `src/components/Gallery.jsx`:
```jsx
const images = [
  { id: 1, src: "/images/pic1.jpg", alt: "Memory 1" },
  { id: 2, src: "/images/pic2.jpg", alt: "Memory 2" },
  // Add more:
  { id: 7, src: "/images/pic7.jpg", alt: "Memory 7" },
];
```

---

### Step 5: Change Background Music

**Location:** `public/music.mp3`

**Steps:**
1. Find your favorite song/audio file
2. Convert it to MP3 format (if needed)
3. Rename it to `music.mp3`
4. Replace the file in `public/music.mp3`

**Alternative:** Use a different filename
Edit `src/components/MusicPlayer.jsx`, line 7:
```jsx
const audioRef = useRef(new Audio("/your-song.mp3"));
```

**Music Tips:**
- Keep file size reasonable (under 10MB)
- Use 128-320 kbps quality
- Test that it plays in your browser
- Consider copyright if deploying publicly

---

### Step 6: Update Final Message

**File:** `src/App.jsx`

**Find lines 169-172:**
```jsx
<h2 className="final-message">💖 Forever Yours — [Your Name] 💖</h2>
<p className="final-subtitle">
  Your personalized closing message ✨
</p>
```

**Customize:**
```jsx
<h2 className="final-message">💖 Forever Yours — Michael 💖</h2>
<p className="final-subtitle">
  Thank you for bringing joy to my life ✨
</p>
```

---

### Step 7: Customize Hero Message

**File:** `src/App.jsx`

**Find line 103:**
```jsx
<p>Your personalized message goes here 💗</p>
```

**Change to:**
```jsx
<p>You make every day special 💗</p>
```

---

## 🎨 Advanced Customization

### Change Color Theme

**File:** `src/index.css`

**Find the :root variables:**
```css
:root {
  --primary-color: #ff69b4;      /* Hot pink */
  --secondary-color: #ff1493;     /* Deep pink */
  --accent-color: #ffd700;        /* Gold */
  --text-color: #ffffff;          /* White */
  --bg-gradient-start: #1a1a2e;  /* Dark blue */
  --bg-gradient-end: #16213e;    /* Navy blue */
}
```

**Example themes:**

**Purple Dream:**
```css
--primary-color: #9b59b6;
--secondary-color: #8e44ad;
--bg-gradient-start: #2c2c54;
--bg-gradient-end: #474787;
```

**Sunset Orange:**
```css
--primary-color: #ff6b6b;
--secondary-color: #ee5a6f;
--bg-gradient-start: #1e3a8a;
--bg-gradient-end: #7c2d12;
```

**Mint Green:**
```css
--primary-color: #00d2d3;
--secondary-color: #01a3a4;
--bg-gradient-start: #134e4a;
--bg-gradient-end: #064e3b;
```

---

### Modify Q&A Questions

**File:** `src/components/CelebrationPage.jsx`

**Find the questions array:**
```jsx
const questions = [
  {
    id: 1,
    question: "What's your favorite memory of us?",
    answers: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"],
    correctAnswer: 0,
  },
  // Add more questions...
];
```

---

### Change Animation Speed

**File:** `src/components/Countdown.css`

**Find flip animation:**
```css
.flip .card {
  animation: flip 0.6s ease-in-out;
}
```

**Slower animation:**
```css
animation: flip 1s ease-in-out;
```

---

### Add More Hearts

**File:** `src/components/Hearts.jsx`

**Find:**
```jsx
const heartsCount = 15;
```

**Change to:**
```jsx
const heartsCount = 25; // More hearts!
```

---

## 🧪 Testing

### Test the Countdown Quickly

**File:** `src/components/Countdown.jsx`

**Uncomment Option 3:**
```jsx
// OPTION 3: Test in 10 seconds
const now = new Date();
return new Date(now.getTime() + 10000); // 10 seconds
```

This makes the countdown end in 10 seconds so you can test the celebration!

**Remember to change it back before deployment!**

---

## 🚀 Before Deploying

### Checklist:
- [ ] All names updated
- [ ] Birthday date set correctly
- [ ] Personal message written
- [ ] Photos replaced (all 6)
- [ ] Music file added
- [ ] Colors customized (optional)
- [ ] Tested on mobile device
- [ ] Countdown date is NOT in test mode
- [ ] Remove any console.logs (optional)

### Build and Test:
```bash
npm run build
npm run preview
```

This shows exactly how it will look in production!

---

## 💡 Tips

1. **Keep it Personal:** The more specific and heartfelt, the better
2. **Test Everything:** Click through all pages before sharing
3. **Mobile First:** Most people will view on phones
4. **Photo Quality:** Use good quality photos but compress them
5. **Music Volume:** Not too loud, around 50-70% is good
6. **Backup:** Keep a copy of your customized version

---

## ❓ Common Questions

**Q: Can I add more than 6 photos?**
A: Yes! Edit `Gallery.jsx` and add more image objects to the array.

**Q: How do I remove the music player?**
A: Comment out `<MusicPlayer ref={musicPlayerRef} />` in `App.jsx`

**Q: Can I change the countdown to count up after birthday?**
A: Currently it shows celebration message. You'd need to modify the logic in `Countdown.jsx`

**Q: How do I add video instead of images?**
A: Replace `<img>` tags in `Gallery.jsx` with `<video>` tags

**Q: Can I deploy this for free?**
A: Yes! Use Vercel, Netlify, or GitHub Pages (all free)

---

**Need help? Check the main README.md or create an issue on GitHub!** 🎉
