# Portfolio Generator: Contribution Guide

This guide provides the technical instructions needed to complete the main challenge. Your goal is to make the application fully interactive by modifying `index.html` and `main.js`.

## Your Mission 🎯

### Part 1: Fix the HTML Structure (`index.html`)

The user interface is incomplete. You need to add several key elements that the JavaScript will interact with.

-   **Add Action Buttons:** Inside the `div` with the class `action-buttons`, add two `<button>` elements:
    -   One for downloading the card. Give it the ID `downloadBtn`.
    -   One for resetting the form. Give it the ID `resetBtn`.
    -   Ensure they have the appropriate classes (`btn`, `btn-primary`, `btn-secondary`) to match the existing styles.
-   **Add the Success Message Element:** After the main `container` div, add a new `div` for the success message that appears after a download. It needs the ID `successMessage` and the class `success-message`.
-   **Identify the Form:** The `<form>` tag that wraps all the user inputs is missing an ID. Give it the ID `portfolioForm`. This is crucial for efficiently listening to input events.

### Part 2: Implement the JavaScript Logic (`main.js`)

Implement the four empty functions and set up the event listeners to connect everything.

1.  **`updateCardPreview()`:** This function is the heart of the live preview.
    -   It must read the `.value` from every text input (`name`, `role`, `bio`, etc.).
    -   For each input, it should update the `.textContent` or `.innerHTML` of the corresponding card element (`cardName`, `cardRole`, etc.).
    -   It must also handle the placeholder logic: if an input field is empty, the corresponding element on the card should show a default string (e.g., "Your Name").

2.  **`handleImageUpload(event)`:** This function manages the profile picture.
    -   Access the selected file from the `event` object: `event.target.files[0]`.
    -   You must use the **`FileReader` API** to read the contents of the image file.
    -   Once the reader successfully loads the file (`reader.onload`), update the `innerHTML` of the `cardImageContainer` to display the new image.

3.  **`downloadCard()`:** This function captures the preview card as an image.
    -   You will use the **`html2canvas` library**, which is already included in `index.html`.
    -   Call `html2canvas(cardPreview)`. This returns a promise.
    -   In the `.then()` block, you will receive a `canvas` object.
    -   Create a temporary `<a>` element, set its `href` to the image data from the canvas, set its `download` attribute, and programmatically click it to start the download.
    -   Finally, show the `successMessage` element for a few seconds.

4.  **`resetForm()`:** This function should restore the application to its initial state.
    -   Use the `.reset()` method on the form element to clear all user input.
    -   Manually reset the `cardImageContainer` to its original placeholder HTML.
    -   Call `updateCardPreview()` to ensure the text on the card also reverts to its default state.

5.  **Event Listeners:** At the bottom of the file, connect your functions to the DOM.
    -   Listen for the `input` event on the entire `portfolioForm`.
    -   Listen for the `change` event on the `imageInput`.
    -   Listen for `click` events on the `downloadBtn` and `resetBtn`.

---

Completing these steps will result in a fully functional and polished web application. Good luck!