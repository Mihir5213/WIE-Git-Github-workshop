# How to Contribute to Virtual Pet

Welcome! This project is an incomplete challenge. Your goal is to bring the virtual pet to life by implementing its core logic in `main.js` and fixing the provided `index.html` file.

## Your Mission 🎯

### Part 1: Fix the HTML (`index.html`)

The pet's stats are not updating because the JavaScript can't find the right elements.

-   Examine the stats section for Hunger, Happiness, and Cleanliness. The `div` elements for the progress bars and the `span` elements for the percentage text are **missing their `id` attributes**.
-   Add the correct IDs (e.g., `hunger-bar`, `hunger-value`, `happiness-bar`, etc.) so the `main.js` file can target them.

### Part 2: Complete the JavaScript (`main.js`)

Implement the logic for the five empty functions.

-   **`updateUI()`:** This function should update all progress bars and percentage text. It must also change the pet's image and message based on its current stats.
-   **`gameLoop()`:** This function runs on a timer. It should decrease all stats, check if any stat has hit 0, and update the pet's `isAlive` status accordingly.
-   **`feedPet()`**, **`playWithPet()`**, and **`cleanPet()`**: These three functions should increase the corresponding pet stat. Make sure the stats don't go above 100.

---

Once these parts are implemented, the main game will be fully playable. Good luck!