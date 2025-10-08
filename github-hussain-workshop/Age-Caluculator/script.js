// --- DOM Elements ---
const currDate = document.getElementById('currDate');
const dateOfBirth = document.querySelector('#DOB');
const CalcAge = document.getElementById('CalcAge');
const displayAge = document.getElementById('displayAge');
const Age = document.getElementById('age');

// --- Date Configuration ---
const today = new Date();
currDate.innerText = `Today's Date is : ${today.toLocaleDateString('en-US')}`;

// ----------------------------------------------------------------
// --- CHALLENGE: IMPLEMENT THE MISSING FUNCTIONS! ---
// ----------------------------------------------------------------

/**
 * Validates the date input format (MM/DD/YYYY).
 * This function should:
 * 1. Check if the input matches MM/DD/YYYY format
 * 2. Verify the date is valid
 * 3. Return true if valid, false otherwise
 */
function validateDateInput(dateString) {
    // TODO: Implement date validation logic
    // Hint: Check format and parse date
    
}

/**
 * Calculates age based on birth date and current date.
 * This function should:
 * 1. Parse the birth date string
 * 2. Calculate years difference
 * 3. Adjust for month/day if birthday hasn't occurred this year
 * 4. Return the calculated age
 */
function calculateAge(birthDateString) {
    // TODO: Implement age calculation logic
    // Hint: Use Date objects and handle month/day comparison
    
}

/**
 * Displays the calculated age result.
 * This function should:
 * 1. Show the result container
 * 2. Update the age display text
 * 3. Handle formatting for better user experience
 */
function displayResult(age) {
    // TODO: Implement result display logic
    // Hint: Update visibility and text content
    
}

// --- Event Listeners ---
CalcAge.addEventListener('click', () => {
    // TODO: Implement the main calculation flow
    // 1. Get input value
    // 2. Validate input
    // 3. Calculate age if valid
    // 4. Display result
    
});