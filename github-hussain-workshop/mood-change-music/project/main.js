
const moods = {
  happy: {
    emoji: '😃',
    suggestion: 'Try an upbeat pop song!',
    background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3'
  },
  calm: {
    emoji: '😌',
    suggestion: 'Listen to some peaceful ambient music.',
    background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
    audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3'
  },
  energetic: {
    emoji: '⚡',
    suggestion: 'Pump it up with high-energy dance tracks!',
    background: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
    audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3'
  },
  // TODO: Add a new mood (e.g., Relaxed, Excited, Focused) here
};

let currentAudio = null;

document.querySelector('#app').innerHTML = `
  <div class="container">
    <div class="mood-buttons">
      <button class="mood-btn happy-btn" data-mood="happy">Happy</button>
      <button class="mood-btn calm-btn" data-mood="calm">Calm</button>
      <button class="mood-btn energetic-btn" data-mood="energetic">Energetic</button>
      <!-- TODO: Add new button for your custom mood -->
    </div>
    <div class="mood-display" id="moodDisplay">
      <div class="mood-emoji" id="moodEmoji"></div>
      <div class="mood-suggestion" id="moodSuggestion"></div>
    </div>
    <audio id="moodAudio"></audio>
  </div>
`;

const moodDisplay = document.getElementById('moodDisplay');
const moodEmoji = document.getElementById('moodEmoji');
const moodSuggestion = document.getElementById('moodSuggestion');
const moodAudio = document.getElementById('moodAudio');
const buttons = document.querySelectorAll('.mood-btn');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const mood = button.getAttribute('data-mood');
    setMood(mood);
  });
});

// -----------------------------
// TODO: Complete the setMood() function below
// -----------------------------
function setMood(moodType) {
  const mood = moods[moodType];

  // TODO: Change the background of the page to match the mood

  // TODO: Update the emoji and text suggestion areas

  moodDisplay.classList.add('active');

  // TODO: Stop currently playing audio before switching
  if (currentAudio) {
      //
  }

  // TODO: Play new audio for selected mood
  // moodAudio.src = mood.audioUrl;
  // moodAudio.volume = 0.4;
  // moodAudio.play().catch(err => console.log('Playback failed:', err));

  // TODO: Assign currentAudio = moodAudio after playing
  currentAudio = moodAudio;
}

// After completing above, add a custom mood and test your implementation!
