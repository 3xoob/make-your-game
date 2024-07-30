const gameMap = [
  [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
  [ 0, 4, 2, 2, 2, 2, 4, 2, 2, 2, 2, 2, 4, 0, 0, 4, 2, 2, 2, 2, 2, 4, 2, 2, 2, 2, 4, 0 ],
  [ 0, 2, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 2, 0, 0, 2, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 2, 0 ],
  [ 0, 5, 0, 1, 1, 0, 2, 0, 1, 1, 1, 0, 2, 0, 0, 2, 0, 1, 1, 1, 0, 2, 0, 1, 1, 0, 1, 0 ],
  [ 0, 2, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 2, 0, 0, 2, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 2, 0 ],
  [ 0, 4, 2, 2, 2, 2, 4, 2, 2, 4, 2, 2, 4, 2, 2, 4, 2, 2, 4, 2, 2, 4, 2, 2, 2, 2, 4, 0 ],
  [ 0, 2, 0, 0, 0, 0, 2, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 2, 0, 0, 0, 0, 2, 0 ],
  [ 0, 2, 0, 0, 0, 0, 2, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 2, 0, 0, 0, 0, 2, 0 ],
  [ 0, 4, 2, 2, 2, 2, 4, 0, 0, 4, 2, 2, 4, 0, 0, 4, 2, 2, 4, 0, 0, 4, 2, 2, 2, 2, 4, 0 ],
  [ 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0 ],
  [ 0, 1, 1, 1, 1, 0, 2, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 2, 0, 1, 1, 1, 1, 0 ],
  [ 0, 1, 1, 1, 1, 0, 2, 0, 0, 3, 1, 1, 3, 1, 1, 3, 1, 1, 3, 0, 0, 2, 0, 1, 1, 1, 1, 0 ],
  [ 0, 1, 1, 1, 1, 0, 2, 0, 0, 1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 0, 0, 2, 0, 1, 1, 1, 1, 0 ],
  [ 0, 0, 0, 0, 0, 0, 2, 0, 0, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 0, 0, 2, 0, 0, 0, 0, 0, 0 ],
  [ 5, 5, 5, 5, 5, 5, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 5, 5, 5, 5, 5, 5 ],
  [ 0, 0, 0, 0, 0, 0, 2, 0, 0, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 0, 0, 2, 0, 0, 0, 0, 0, 0 ],
  [ 0, 1, 1, 1, 1, 0, 2, 0, 0, 1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 0, 0, 2, 0, 1, 1, 1, 1, 0 ],
  [ 0, 1, 1, 1, 1, 0, 2, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 2, 0, 1, 1, 1, 1, 0 ],
  [ 0, 1, 1, 1, 1, 0, 2, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 2, 0, 1, 1, 1, 1, 0 ],
  [ 0, 0, 0, 0, 0, 0, 2, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 2, 0, 0, 0, 0, 0, 0 ],
  [ 0, 4, 2, 2, 2, 2, 4, 2, 2, 4, 2, 2, 4, 0, 0, 4, 2, 2, 4, 2, 2, 4, 2, 2, 2, 2, 4, 0 ],
  [ 0, 2, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 2, 0, 0, 2, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 2, 0 ],
  [ 0, 2, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 2, 0, 0, 2, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 2, 0 ],
  [ 0, 3, 2, 4, 0, 0, 4, 2, 2, 4, 2, 2, 4, 1, 1, 4, 2, 2, 4, 2, 2, 4, 0, 0, 4, 2, 3, 0 ],
  [ 0, 0, 0, 2, 0, 0, 2, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 2, 0, 0, 2, 0, 0, 0 ],
  [ 0, 0, 0, 2, 0, 0, 2, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 2, 0, 0, 2, 0, 0, 0 ],
  [ 0, 4, 2, 4, 2, 2, 4, 0, 0, 4, 2, 2, 4, 0, 0, 4, 2, 2, 4, 0, 0, 4, 2, 2, 4, 2, 4, 0 ],
  [ 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0 ],
  [ 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0 ],
  [ 0, 4, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 4, 2, 2, 4, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 4, 0 ],
  [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ]
];
const legend = {
  0: 'wall',
  1: 'path',
  2: 'pill-on-path',
  3: 'intersection',
  4: 'pill-on-intersection',
  5: 'tunnel'
};

let pacmanPosition = { x: 1, y: 1 };
let scores = 0;
let souls = 3; // Initialize Pac-Man's souls (lives)
let gamePaused = false;
let soundMuted = false;
let currentDirection = null;
let lastRenderTime = 0;
const gameSpeed = 300; // Movement interval in milliseconds

const gameSound = {
  score: new Audio('./sound/Chomp.mp3'),
  death: new Audio('./sound/Death.mp3'),
};

function toggleMute() {
  soundMuted = !soundMuted;

  // Toggle volume of all sounds
  Object.values(gameSound).forEach(sound => {
    sound.volume = soundMuted ? 0 : 1;
  });
}

function playSound(soundName) {
  if (!soundMuted && gameSound[soundName]) {
    gameSound[soundName].play();
  }
}

function renderGameMap() {
  const gameContainer = document.getElementById('game-container');
  gameContainer.innerHTML = '';

  gameMap.forEach((row, y) => {
    row.forEach((cell, x) => {
      const cellElement = document.createElement('div');
      cellElement.classList.add('cell', legend[cell]);

      if (x === pacmanPosition.x && y === pacmanPosition.y) {
        cellElement.classList.add('pacman');
      } else {
        // Check if this position matches any ghost position
        const isGhost = ghosts.some(ghost => ghost.x === x && ghost.y === y);
        if (isGhost) {
          cellElement.classList.add('ghost');
        }
      }

      cellElement.style.left = `${x * 21}px`;
      cellElement.style.top = `${y * 21}px`;

      gameContainer.appendChild(cellElement);
    });
  });
}

let ghosts = [
  { x: 14, y: 15 }, // Ghost 1 initial position
  { x: 14, y: 12 }, // Ghost 2 initial position
  { x: 14, y: 13 }, // Ghost 3 initial position
  { x: 13, y: 13 }  // Ghost 4 initial position
];

let ghostDirections = ['up', 'down', 'left', 'right']; // Initialize each ghost to move in a random direction

function moveGhosts() {
  if (!gamePaused) {
    ghosts.forEach((ghost, index) => {
      let newGhostPosition = { ...ghost };

      // Determine current direction for this ghost
      let direction = ghostDirections[index];

      // Attempt to move in the current direction
      switch (direction) {
        case 'up':
          newGhostPosition.y--;
          break;
        case 'down':
          newGhostPosition.y++;
          break;
        case 'left':
          newGhostPosition.x--;
          break;
        case 'right':
          newGhostPosition.x++;
          break;
      }

      // Check if the new position is within bounds
      if (newGhostPosition.y >= 0 && newGhostPosition.y < gameMap.length &&
        newGhostPosition.x >= 0 && newGhostPosition.x < gameMap[0].length) {

        const mapValue = gameMap[newGhostPosition.y][newGhostPosition.x];
        if (newGhostPosition.x == pacmanPosition.x && newGhostPosition.y == pacmanPosition.y) {
          playSound('death');
          // Decrease souls (lives) by 1
          souls--;
          togglePause(); // Pause the game
          setTimeout(() => {
            togglePause(); // Resume the game
          }, 3000);

          if (souls === 0) {
            // Game over logic
            handleGameOver();
            return; // Exit moveGhosts function early to prevent further execution
          } else {
            // Display remaining souls (lives) or update UI accordingly
            console.log(`Remaining souls: ${souls}`);
            document.getElementById('souls-display').textContent = `Souls: ${souls}`;
            // Respawn Pac-Man at starting position
            pacmanPosition = { x: 1, y: 1 };
            renderGameMap();
          }
        }

        // Check if the new position is on a path (1), intersection (3), or tunnel (4)
        if (mapValue === 1 || mapValue === 3 || mapValue === 4 || mapValue === 2) {
          // Check if the new position is not occupied by another ghost
          if (!isGhostAtPosition(newGhostPosition, index)) {
            ghosts[index] = newGhostPosition;
          } else {
            // If the new position is occupied, choose a new direction randomly
            let remainingDirections = ['up', 'down', 'left', 'right'].filter(dir => dir !== direction);
            let randomIndex = Math.floor(Math.random() * remainingDirections.length);
            ghostDirections[index] = remainingDirections[randomIndex];
          }
        } else {
          // If hitting a wall or boundary, choose a new direction randomly
          let remainingDirections = ['up', 'down', 'left', 'right'].filter(dir => dir !== direction);
          let randomIndex = Math.floor(Math.random() * remainingDirections.length);
          ghostDirections[index] = remainingDirections[randomIndex];
        }
      } else {
        // If out of bounds, choose a new direction randomly
        let remainingDirections = ['up', 'down', 'left', 'right'].filter(dir => dir !== direction);
        let randomIndex = Math.floor(Math.random() * remainingDirections.length);
        ghostDirections[index] = remainingDirections[randomIndex];
      }
    });

    renderGameMap(); // Render the game map after moving each ghost
  }
}

function handleGameOver() {
  togglePause(); // Pause the game when game over
  document.getElementById('game-over-screen').style.display = 'flex'; // Show game over screen
  sessionStorage.setItem('gameState', 'over'); // Set game state to 'over'
}

// Add event listener for "Play Again" button
document.getElementById('play-again-button').addEventListener('click', function () {
  resetGame(); // Call the reset function
  window.location.reload(); // Reload the page
});

function handleGameWin() {
  togglePause(); // Pause the game when game win
  document.getElementById('game-win').style.display = 'flex'; // Show game win screen
  sessionStorage.setItem('gameState', 'won'); // Set game state to 'won'
}

// Add event listener for "Play Again" button
document.getElementById('play-win-but').addEventListener('click', function () {
  resetGame(); // Call the reset function
});

function handlePillCollision(position) {
  // Example logic: Increase score, remove pill from map, etc.
  gameMap[position.y][position.x] = 1; // Assuming pill is removed from the map after collision
}

// Function to check if there is a ghost at a given position
function isGhostAtPosition(position, currentIndex) {
  return ghosts.some((ghost, index) => index !== currentIndex && ghost.x === position.x && ghost.y === position.y);
}

function movePacman(direction) {
  let newPosition = { ...pacmanPosition };

  switch (direction) {
    case 'up':
      newPosition.y--;
      break;
    case 'down':
      newPosition.y++;
      break;
    case 'left':
      newPosition.x--;
      break;
    case 'right':
      newPosition.x++;
      break;
  }

  if (newPosition.x === -1 && newPosition.y === 14) {
    newPosition = { x: 27, y: 14 }; // Wrap around horizontally
  } else if (newPosition.x === 28 && newPosition.y === 14) {
    newPosition = { x: 0, y: 14 }; // Wrap around horizontally
  }

  if (gameMap[newPosition.y] && gameMap[newPosition.y][newPosition.x] !== undefined && gameMap[newPosition.y][newPosition.x] !== 0) {
    pacmanPosition = newPosition;

    // Check if Pac-Man meets any ghost
    const collidedGhost = ghosts.find(ghost => ghost.x === pacmanPosition.x && ghost.y === pacmanPosition.y);
    if (collidedGhost) {
      playSound('death');
      // Decrease souls (lives) by 1
      souls--;
      togglePause(); // Pause the game
      setTimeout(() => {
        togglePause(); // Resume the game
      }, 3000);
  
      if (souls === 0) {
        // Game over logic
        handleGameOver();
      } else {
        // Display remaining souls (lives) or update UI accordingly
        console.log(`Remaining souls: ${souls}`);
        document.getElementById('souls-display').textContent = `Souls: ${souls}`;
        // Respawn Pac-Man at starting position
        pacmanPosition = { x: 1, y: 1 };
        renderGameMap();
      }
    }

    // Handle score and pill collection logic
    if (gameMap[pacmanPosition.y][pacmanPosition.x] === 2 || gameMap[pacmanPosition.y][pacmanPosition.x] === 4) {
      scores++;
      playSound('score');
      gameMap[pacmanPosition.y][pacmanPosition.x] = 1;
      const scoreDisplay = document.getElementById('score-display');
      scoreDisplay.textContent = scores;
      renderGameMap();
    } else if (gameMap[pacmanPosition.y][pacmanPosition.x] === 3) {
      scores += 5;
      playSound('score');
      gameMap[pacmanPosition.y][pacmanPosition.x] = 1;
      const scoreDisplay = document.getElementById('score-display');
      scoreDisplay.textContent = scores;
      renderGameMap();
    }

    if (scores == 205) {
      handleGameWin();
    } else {
      document.getElementById('game-win').style.display = 'none'; // Hide game win screen
    }
  }
}

function resetGame() {
  document.getElementById('game-over-screen').style.display = 'none'; // Hide game over screen
  document.getElementById('game-win').style.display = 'none'; // Hide game win screen
  pacmanPosition = { x: 1, y: 1 }; // Reset Pac-Man position
  scores = 0; // Reset scores
  souls = 3; // Reset souls
  sessionStorage.removeItem('gameState'); // Clear game state
  renderGameMap(); // Render the game map after resetting
}

function togglePause() {
  gamePaused = !gamePaused;
  if (gamePaused) {
    console.log("Game paused");
  } else {
    console.log("Game unpaused");
  }
}

function gameLoop(timestamp) {
  if (!lastRenderTime) lastRenderTime = timestamp;
  const deltaTime = timestamp - lastRenderTime;

  if (deltaTime >= gameSpeed) {
    if (!gamePaused) {
      movePacman(currentDirection);
      moveGhosts();
    }
    lastRenderTime = timestamp;
  }

  renderGameMap();
  requestAnimationFrame(gameLoop);
}

document.addEventListener('keydown', handleKeyDown);
function handleKeyDown(event) {
  switch (event.key) {
    case 'ArrowUp':
      if (currentDirection !== 'up') {
        currentDirection = 'up';
      }
      break;
    case 'ArrowDown':
      if (currentDirection !== 'down') {
        currentDirection = 'down';
      }
      break;
    case 'ArrowLeft':
      if (currentDirection !== 'left') {
        currentDirection = 'left';
      }
      break;
    case 'ArrowRight':
      if (currentDirection !== 'right') {
        currentDirection = 'right';
      }
      break;
    case 'p':
    case 'P':
      togglePause();
      break;
    case 'm':
    case 'M':
      toggleMute();
      break;
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const gameState = sessionStorage.getItem('gameState');

  // Ensure end screens are hidden on page load
  document.getElementById('game-over-screen').style.display = 'none';
  document.getElementById('game-win').style.display = 'none';

  // Show end screens based on saved game state
  if (gameState === 'over') {
    document.getElementById('game-over-screen').style.display = 'flex'; // Show game over screen
  } else if (gameState === 'won') {
    document.getElementById('game-win').style.display = 'flex'; // Show game win screen
  }

  renderGameMap(); // Initial rendering of the game map
  requestAnimationFrame(gameLoop); // Start the game loop
});
