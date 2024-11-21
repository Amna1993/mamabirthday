// script.js

// Function to show the next screen
function showScreen(current, next) {
    document.getElementById(current).classList.add('hidden');
    document.getElementById(next).classList.remove('hidden');
  }
  
  // Function to generate balloons
  function generateBalloons() {
    const balloonContainer = document.getElementById('balloons');
    balloonContainer.innerHTML = ''; // Clear existing balloons
  
    for (let i = 0; i < 30; i++) {
      const balloon = document.createElement('div');
      balloon.classList.add('balloon');
      const randomColor = `hsl(${Math.random() * 360}, 100%, 70%)`;
      balloon.style.setProperty('--balloon-color', randomColor);
      balloon.style.left = `${Math.random() * 100}%`;
      balloon.style.animationDelay = `${Math.random() * 2}s`;
      balloon.style.animationDuration = `${Math.random() * 5 + 4}s`;
      balloonContainer.appendChild(balloon);
    }
  }
  
  // Function to generate confetti
  function generateConfetti() {
    const confettiContainer = document.getElementById('confetti');
    confettiContainer.innerHTML = ''; // Clear existing confetti
  
    for (let i = 0; i < 50; i++) {
      const confetti = document.createElement('div');
      confetti.classList.add('confetti-piece');
      const randomColor = `hsl(${Math.random() * 360}, 100%, 70%)`;
      confetti.style.setProperty('--confetti-color', randomColor);
      confetti.style.left = `${Math.random() * 100}%`;
      confetti.style.animationDelay = `${Math.random() * 2}s`;
      confetti.style.animationDuration = `${Math.random() * 4 + 2}s`;
      confettiContainer.appendChild(confetti);
    }
  }
  
  // Initialize the sequence
  document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => showScreen('date-screen', 'poetry-screen'), 4000); // Show poetry screen after 4 seconds
    setTimeout(() => showScreen('poetry-screen', 'birthday-screen'), 19000); // Show birthday screen after 15 seconds on poetry
    setTimeout(() => {
      showScreen('birthday-screen', 'party-screen');
      generateBalloons();
      generateConfetti();
    }, 23000); // Show party screen after 4 seconds on birthday screen
  });
  