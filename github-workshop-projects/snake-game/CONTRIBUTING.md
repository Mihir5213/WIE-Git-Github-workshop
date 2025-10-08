# How to Contribute to Neon Snake

Welcome! Your goal is to complete the core game logic in `main.js` to make this Snake game fully playable.

## Your Mission 🎯

Edit `main.js` and implement the logic for the following four functions.

### 1. `moveSnake()`
This function updates the snake's position each frame.
-   Create a new `head` object. Its coordinates should be the current head's coordinates plus the direction (`dx`, `dy`).
-   Add this `head` to the beginning of the `snake` array.
-   Check if the new head's position matches the `food`'s position.
    -   If yes: Increment the `score` and call `generateFood()`.
    -   If no: Remove the last element (the tail) from the `snake` array.

### 2. `generateFood()`
This function places a new piece of food on the board.
-   Calculate random `x` and `y` coordinates for the food. The coordinates must be aligned to the grid (i.e., a multiple of `GRID_SIZE`).
-   Assign the new coordinates to the `food` object.
-   (Advanced) Ensure the food does not spawn on top of the snake. If it does, call the function again to get a new position.

### 3. `handleKeyPress(event)`
This function reads keyboard input to change direction.
-   Get the key pressed from `event.key`.
-   Use `if` statements for `ArrowUp`, `ArrowDown`, `ArrowLeft`, and `ArrowRight`.
-   Update the direction variables (`dx` and `dy`).
-   **Important:** Prevent the snake from reversing on itself. For example, if it's moving right, it cannot immediately move left.

### 4. `checkGameOver()`
This function determines if the game should end.
-   **Wall Collision:** Check if the snake's head is outside the canvas boundaries.
-   **Self-Collision:** Check if the snake's head has the same coordinates as any of its body segments.
-   If either collision occurs, set the `isGameOver` variable to `true`.