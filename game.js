let lastRenderTime = 0;
const SNAKE_SPEED = 1; //Controls the speed of the snake;
// Creating a game loop
function main(currentTime) {
  window.requestAnimationFrame(main);
  const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000;
  if (secondsSinceLastRender < 1 / SNAKE_SPEED) return;

  console.log("Render");
  lastRenderTime = currentTime;
}

window.requestAnimationFrame(main); // To initiate our loop for first time.
