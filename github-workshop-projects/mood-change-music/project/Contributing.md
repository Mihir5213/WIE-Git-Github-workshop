# Contributing Guide

---

### ✅ Your Mission

The `main.js` file is incomplete. The core logic for switching moods, updating the UI, and handling audio playback is missing.  
Your task is to find all the `// TODO:` comments in the file and implement the missing functionality.

---

### Task Descriptions

1. **Complete the Mood Switching Functionality**  
   Implement the missing logic inside the `setMood()` function to:
   - Change the background gradient based on the selected mood  
   - Display the corresponding emoji and suggestion text  
   - Play the correct background music  

   💡 *Hint:* Use `document.body.style.background`, `textContent`, and `audio.play()` to update the page.

---

2. **Stop Previous Audio**  
   Prevent multiple audio tracks from playing at the same time.  
   Before playing a new track, make sure the currently playing one is stopped.

   💡 *Hint:* Call `currentAudio.pause()` before assigning a new one.

---

3. **Add a New Mood**  
   Create a new mood (e.g., **Relaxed**, **Focused**, or **Excited**).  
   Add:
   - A new button in `index.html`  
   - Its emoji, color gradient, and audio file path inside the `moods` object in `main.js`  

   Ensure it works exactly like the existing moods.


---

### 🧪 Testing Your Changes

To verify your work:

1. Click each mood button and confirm:

   * The background updates correctly
   * The emoji and suggestion text change
   * The correct audio plays
2. Test your new mood button to ensure it behaves consistently.
3. Check that when switching moods, the previous audio stops.
4. Make sure the interface works smoothly on both desktop and mobile.

---

### ✨ Expected Result

When a mood is selected:

* The background gradient, emoji, and suggestion text update
* The correct music plays, and any previous track stops
* The new mood behaves the same as others
* The UI is responsive, visually appealing, and interactive

---
