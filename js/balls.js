const container = document.querySelector('.container');
const numberOfBalls = 50;
const balls = [];

// Create and initialize balls
for (let i = 0; i < numberOfBalls; i++) {
  const ball = document.createElement('div');
  ball.classList.add('ball');

  // Set random initial position
  const xPos = Math.random() * window.innerWidth;
  const yPos = Math.random() * window.innerHeight;
  const xSpeed = (Math.random() - 0.5) * 5; // Random horizontal speed
  const ySpeed = (Math.random() - 0.5) * 5; // Random vertical speed

  ball.style.left = `${xPos}px`;
  ball.style.top = `${yPos}px`;

  container.appendChild(ball);

  // Store ball properties for animation
  balls.push({ element: ball, x: xPos, y: yPos, xSpeed, ySpeed });
}

// Function to animate balls
function animateBalls() {
  balls.forEach((ball) => {
    ball.x += ball.xSpeed;
    ball.y += ball.ySpeed;

    // Bounce off edges
    if (ball.x <= 0 || ball.x >= window.innerWidth - 20) ball.xSpeed *= -1;
    if (ball.y <= 0 || ball.y >= window.innerHeight - 20) ball.ySpeed *= -1;

    // Update ball position
    ball.element.style.left = `${ball.x}px`;
    ball.element.style.top = `${ball.y}px`;
  });

  requestAnimationFrame(animateBalls); // Call this function on the next frame
}

// Start animation
animateBalls();
