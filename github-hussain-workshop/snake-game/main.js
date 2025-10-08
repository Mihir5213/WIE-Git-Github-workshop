// --- DOM Elements ---
const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
const scoreDisplay = document.getElementById('score');
const gameOverScreen = document.getElementById('gameOverScreen');
const finalScoreDisplay = document.getElementById('finalScore');
const restartBtn = document.getElementById('restartBtn');

// --- Game Constants & Variables ---
const GRID_SIZE = 20;
const CANVAS_WIDTH = canvas.width;
const CANVAS_HEIGHT = canvas.height;
let snake, food, score, dx, dy, isGameOver, changingDirection, gameSpeed;

// --- Functions to Implement ---
function moveSnake() {
    // Moves the snake, handles food consumption, and growth.
}
function generateFood() {
    // Creates a new food item at a random position.
}
function handleKeyPress(event) {
    // Changes the snake's direction based on arrow key input.
}
function checkGameOver() {
    // Checks for wall and self-collision to end the game.
}

// --- Provided Functions (No changes needed) ---
function initializeGame() {
    snake = [ { x: 200, y: 200 }, { x: 180, y: 200 }, { x: 160, y: 200 } ];
    dx = GRID_SIZE; dy = 0; score = 0;
    isGameOver = false; changingDirection = false; gameSpeed = 100;
    scoreDisplay.textContent = score;
    gameOverScreen.classList.add('hidden');
    generateFood();
    main();
}
function main() {
    if (isGameOver) { showGameOver(); return; }
    setTimeout(() => {
        changingDirection = false;
        clearCanvas(); drawFood(); moveSnake();
        drawSnake(); checkGameOver(); main();
    }, gameSpeed);
}
function clearCanvas() { ctx.fillStyle = '#16213e'; ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT); }
function drawSnake() { snake.forEach((part, index) => { ctx.fillStyle = index === 0 ? '#00f5d4' : '#00bfa5'; ctx.strokeStyle = '#16213e'; ctx.fillRect(part.x, part.y, GRID_SIZE, GRID_SIZE); ctx.strokeRect(part.x, part.y, GRID_SIZE, GRID_SIZE); }); }
function drawFood() { if (!food) return; ctx.fillStyle = '#ff007f'; ctx.strokeStyle = '#16213e'; ctx.fillRect(food.x, food.y, GRID_SIZE, GRID_SIZE); ctx.strokeRect(food.x, food.y, GRID_SIZE, GRID_SIZE); }
function showGameOver() { finalScoreDisplay.textContent = score; gameOverScreen.classList.remove('hidden'); }
document.addEventListener('keydown', handleKeyPress);
restartBtn.addEventListener('click', initializeGame);

initializeGame();