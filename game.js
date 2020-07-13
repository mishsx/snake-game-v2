import { SNAKE_SPEED } from "./snake.js";
let lastRenderTime = 0;
// Creating a game loop
function main(currentTime) {
  window.requestAnimationFrame(main);
  const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000;
  if (secondsSinceLastRender < 1 / SNAKE_SPEED) return;

  console.log("Render");
  lastRenderTime = currentTime;
}

window.requestAnimationFrame(main); // To initiate our loop for first time.

function update() {}

function draw() {}
