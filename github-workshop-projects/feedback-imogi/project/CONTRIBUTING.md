# Contributing Guide

## Requirements

- Basic knowledge of HTML, CSS, and JavaScript
- Familiarity with event listeners, DOM manipulation, and classes

## Tasks

1. **Emoji Click Functionality**
   - Fill in missing logic to ensure clicking an emoji updates the feedback message.
   - Hint: use `addEventListener('click', ...)` and `getAttribute('data-emoji')`.

2. **Reset Button**
   - Implement functionality to clear selection and hide feedback message.

3. **Optional Improvements**
   - Add smooth animations for message display or emoji scaling.
   - Add accessibility features (like ARIA labels).

## Instructions

1. Fork the repository or clone it locally.
2. Open `main.js` and complete the `TODO` sections.
3. Only modify `main.js` unless adding optional improvements.
4. Commit changes with a descriptive message.
5. Push changes and create a pull request.

## Testing

- Click each emoji and verify that the feedback message updates correctly.
- Click the reset button and ensure everything resets.
- Verify that no other elements break during testing.

## Expected Result

- Selecting an emoji highlights it and displays the correct message.
- Reset button clears selection and hides message.
- All functionality works on desktop and mobile screens.
