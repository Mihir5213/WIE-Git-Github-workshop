// --- DOM Elements ---
const petImage = document.getElementById('pet-image');
// ... other elements need to be selected after fixing the HTML

// --- Pet State & Game Config ---
let pet = { hunger: 100, happiness: 100, cleanliness: 100, isAlive: true };
const STAT_DECAY_RATE = 5;
const ACTION_BOOST = 35; 
const MAX_STAT = 100;
const GAME_SPEED = 2000;

// --- Functions to Implement for the Main Challenge ---
function updateUI() {
    // Updates all UI elements based on the current pet state.
}
function gameLoop() {
    // Handles the core game loop, decreasing stats over time.
}
function feedPet() {
    // Increases the pet's hunger stat.
}
function playWithPet() {
    // Increases the pet's happiness stat.
}
function cleanPet() {
    // Increases the pet's cleanliness stat.
}

// --- Event Listeners (Provided) ---
document.getElementById('feed-btn').addEventListener('click', feedPet);
document.getElementById('play-btn').addEventListener('click', playWithPet);
document.getElementById('clean-btn').addEventListener('click', cleanPet);

// --- Game Start ---
updateUI();
const gameInterval = setInterval(gameLoop, GAME_SPEED);