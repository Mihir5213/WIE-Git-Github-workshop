// --- DOM Elements ---
const toggleButton = document.getElementById('toggleButton');
const themeText = document.getElementById('themeText');
const body = document.body;

// --- Theme Configuration ---
let isDarkMode = false;

// ----------------------------------------------------------------
// --- CHALLENGE: IMPLEMENT THE MISSING FUNCTIONS! ---
// ----------------------------------------------------------------

body.classList.add('light-mode');

//add appropriate event somewhere in this block
toggleButton.addEventListener('(event)', () => {
  isDarkMode = !isDarkMode;
 

  //add JS  code somewhere within this given conditional block
  if (isDarkMode) {


  } else {
    body.classList.remove('dark-mode');
    body.classList.add('light-mode');
   // write code snippet here to display 'I am in light mode' on the webpage ;
    toggleButton.innerHTML = '<span class="button-icon">🌙</span><span class="button-text">Switch to Dark Mode</span>';
  }
});
