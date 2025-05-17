const container = document.querySelector('.container');
const numberOfBalls = 50;

// Generate bouncing balls
for (let i = 0; i < numberOfBalls; i++) {
  const ball = document.createElement('div');
  ball.classList.add('ball');
  ball.style.left = `${Math.random() * 100}%`; // Random horizontal position
  ball.style.animationDelay = `${Math.random() * 2}s`; // Random animation delay
  ball.style.animationDuration = `${1.5 + Math.random()}s`; // Random animation duration
  container.appendChild(ball);
}

// Reset the animation loop for text
setInterval(() => {
  document.querySelectorAll('.text').forEach((text) => {
    text.style.animation = 'none';
    void text.offsetWidth; // Trigger reflow
    text.style.animation = '';
  });
}, 40000); // 30 seconds for text, 10 seconds for final text
