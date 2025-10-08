// --- DOM Elements ---
const sounds = document.querySelectorAll('.sound');
const pads = document.querySelectorAll('.pads div');
const kit = document.querySelector('.kit');

// --- Drum Configuration ---
const DRUM_KEYS = ['a', 's', 'd', 'j', 'k', 'l'];
const ANIMATION_DURATION = 100; // milliseconds

// ----------------------------------------------------------------
// --- CHALLENGE: IMPLEMENT THE MISSING FUNCTIONS! ---
// ----------------------------------------------------------------

/**
 * Plays the corresponding drum sound based on the key pressed.
 * This function should:
 * 1. Map keys A,S,D,J,K,L to their respective sound files (sound1.mp3 to sound6.mp3)
 * 2. Create and play the audio for the corresponding key
 * 3. Handle case where invalid key is pressed
 */
function makeSound(key) {
    // TODO: Implement switch statement to map keys to sounds
    // Hint: Use new Audio('sounds/soundX.mp3') and .play() method
    
}

/**
 * Handles button animation when drum pad is activated.
 * This function should:
 * 1. Find the correct drum pad element using the key
 * 2. Add 'pressed' class for visual feedback
 * 3. Remove 'pressed' class after animation duration
 */
function buttonAnimation(currentKey) {
    // TODO: Fix the class selector to match drum pad classes
    // Current code looks for class with key name, but pads use different classes
    
}

/**
 * Plays drum sound and triggers animation for mouse clicks.
 * This function should:
 * 1. Reset audio to beginning
 * 2. Play the sound
 * 3. Trigger visual animation
 */
function playDrumPad(padIndex) {
    // TODO: Implement click functionality for drum pads
    
}

// --- Event Listeners & Game Start ---
window.addEventListener('load', () => {
    // Mouse click events
    pads.forEach((pad, index) => {
        pad.addEventListener('click', function() {
            sounds[index].currentTime = 0;
            sounds[index].play();
        });
    });

    // Keyboard events
    document.addEventListener("keydown", function(event) {
        makeSound(event.key.toLowerCase());
        buttonAnimation(event.key.toLowerCase());
    });
});