// =========================
// 😊 Feedback Emoji Bar Script
// =========================

let currentSelection = null;
const emojis = {
  happy: { message: "Glad you're happy!", class: 'selected-happy' },
  neutral: { message: "Thanks for your feedback!", class: 'selected-neutral' },
  sad: { message: "Sorry you had a bad experience!", class: 'selected-sad' }
};

const emojiButtons = document.querySelectorAll('.emoji-btn');
const feedbackMessage = document.getElementById('feedbackMessage');
const messageText = document.getElementById('messageText');
const resetBtn = document.getElementById('resetBtn');

const emojiClickTracker = {
  happy: 0,
  neutral: 0,
  sad: 0
};

emojiButtons.forEach(btn => {
  btn.addEventListener('click', function() {
    const type = this.getAttribute('data-emoji');

    selectEmoji(type);

    emojiClickTracker[type]++;
    console.log(`DEBUG: ${type} clicked ${emojiClickTracker[type]} time(s)`);
    
    if(type === 'happy' && emojiClickTracker.happy % 3 === 0){
      console.log("🎉 Bonus unlocked! Happy confetti triggered! 🎉");
    }
  });
});

// TODO: Add click listener for reset button
// HINT: resetBtn.addEventListener('click', resetSelection);


// =========================
// Functions
// =========================

function selectEmoji(type) {
  emojiButtons.forEach(btn => {
    btn.classList.remove('selected-happy', 'selected-neutral', 'selected-sad');
  });

  const selectedBtn = document.querySelector(`[data-emoji="${type}"]`);
  selectedBtn.classList.add(emojis[type].class);

  messageText.textContent = emojis[type].message;

  feedbackMessage.classList.add('show');

  currentSelection = type;

  // dev-ref: small animations or console logs can be added here for testing
}

function resetSelection() {

  emojiButtons.forEach(btn => {
    btn.classList.remove('selected-happy', 'selected-neutral', 'selected-sad');
  });

  feedbackMessage.classList.remove('show');

  currentSelection = null;
}

// ✅ TASK: Fill in all the missing logic above so that emoji selection and reset works correctly
