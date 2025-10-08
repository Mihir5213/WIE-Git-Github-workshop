# Contributing Guide

---

### ✅ Your Mission

The `script.js` file is incomplete. The core logic for playing music, pausing, and updating the UI is missing. Your task is to find all the `// TODO:` comments in the file and implement the missing code.

---

### Task Descriptions

1.  **Implement the Main Event Listener**: The play/pause button doesn't do anything yet. You need to add a `click` event listener to it. Inside this listener, you'll check if the button's action is "play" or "pause" and call the correct function (`playTrack` or `pauseTrack`).

2.  **Fix Exclusive Playback**: The player currently allows multiple songs to play at the same time. You need to add logic to the `playTrack` function to ensure that any `currentlyPlaying` song is paused before a new one starts.

3.  **Complete the UI Updates in `playTrack`**: When a song plays, the button text should change to "Pause." This is currently missing.

4.  **Complete the UI Updates in `pauseTrack`**: When a song is paused, the visual "playing" indicator needs to be removed from the track, the button should revert to a "play" icon, and its text should update to "Play."

---

### 📝 Instructions

1.  **Fork and Clone**: Start by forking this repository and cloning it to your local machine.
2.  **Locate the Tasks**: Open the `script.js` file and look for all the comments marked with `// TODO:`.
3.  **Write the Code**: Fill in the missing JavaScript logic as described by the comments.
4.  **Test Your Fix**: Open the `index.html` file in your browser to test your changes.

---

### 🧪 Testing Your Changes

To make sure everything works correctly, perform these steps:
1.  Click the "Play" button on any track. The song should play, and the button should change to "Pause."
2.  Click the "Pause" button. The song should stop, and the UI should reset.
3.  Play one song, and then while it's playing, click "Play" on a *different* song.
4.  Let a song play all the way to the end. It should automatically stop and reset its UI.

---

### ✨ Expected Result

Once you're done, the music player should be fully functional. You can play and pause any song, only one song will play at a time, and the UI will correctly reflect the current state of each track.