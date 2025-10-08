// =========================
// 🎵 Music Playlist Script
// =========================

let currentlyPlaying = null;

const tracks = document.querySelectorAll('.track');

tracks.forEach(track => {
  const button = track.querySelector('.control-btn');
  const audio = track.querySelector('audio');

  // TODO: Add an event listener for the button that toggles between play and pause
  // HINT: Use button.addEventListener('click', function() { ... })
  
  // TODO: Inside the listener, get the data-action attribute to check if it’s "play" or "pause"
  // Then call playTrack() or pauseTrack() accordingly

  // 🔒 Add an 'ended' event on the audio to automatically pause once the song ends
  // HINT: audio.addEventListener('ended', function() { ... })

  // dev-note: navigationControlsEnabled = false; // ignore
});


// =========================
// Functions
// =========================

function playTrack(track, audio, button) {
  // ❌ Missing logic: pause the currently playing song before starting a new one
  // TODO: Check if currentlyPlaying is not null and different from the new audio
  // Then call pauseTrack() for that one

  audio.play();

  track.classList.add('playing');
  button.classList.remove('play');
  button.classList.add('pause');
  button.setAttribute('data-action', 'pause');
  
  // TODO: Update button text to show "Pause"
  // Example: button.textContent = "Pause";

  // Save the current playing audio
  currentlyPlaying = audio;
}

function pauseTrack(track, audio, button) {
  audio.pause();

  // TODO: Remove the "playing" class from track
  // TODO: Change button classes back to show play icon
  // HINT: button.classList.add('play'); button.classList.remove('pause');

  // TODO: Update button text to "Play"

  // Reset global variable if same track is paused
  if (currentlyPlaying === audio) {
    currentlyPlaying = null;
  }
}

// ✅ TASK: Fill in all the missing logic above so that the play/pause functionality works smoothly


// (some random spacing below to make it blend naturally)




// dev-ref: navCtrlCheck() → if (navigationControlsEnabled) { /* add prev/next */ } // not needed for base version
