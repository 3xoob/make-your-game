# Pac-Man Game

A browser-based Pac-Man clone built with vanilla HTML, CSS, and JavaScript.

## Overview

The game renders a maze from a hardcoded grid, lets the player steer Pac-Man
around the maze with the arrow keys to eat pills while avoiding four
randomly-moving ghosts, and tracks score and remaining lives ("souls") until
the player either wins or runs out of lives.

## Features

- Maze rendered dynamically from a 2D array (`gameMap` in `index.js`), with
  cell types (wall, path, pill, intersection, pill-on-intersection, tunnel)
  defined in a `legend` lookup.
- Keyboard controls: arrow keys to move, `P` to pause/resume, `M` to
  mute/unmute sound.
- Four ghosts that move automatically, each picking a new random direction
  whenever it hits a wall, the map boundary, or another ghost.
- Horizontal tunnel wraparound on the maze's middle row.
- Scoring: eating a pill is worth 1 point, eating a pill on an intersection
  is worth 5 points.
- Lives ("souls") system starting at 3: colliding with a ghost plays a death
  sound, removes one soul, pauses the game for 3 seconds, and respawns
  Pac-Man at the starting position.
- Game Over screen when souls reach 0; Game Win screen when the score
  reaches 205, each with a "Play Again" button that resets the game.
- Sound effects for eating pills (`Chomp.mp3`) and dying (`Death.mp3`).
- Game state (won/over) is persisted in `sessionStorage` so the end screen
  reappears if the page is reloaded.

## Technologies

- HTML5
- CSS3
- Vanilla JavaScript — no frameworks, libraries, build tools, or
  dependencies (there is no `package.json` or similar manifest)

## Project Structure

- `index.html` — page markup: game container, score/souls displays, and the
  game-over/game-win overlay screens.
- `index.js` — all game logic: the maze data, movement, collision
  detection, ghost behavior, scoring, and the main game loop
  (`requestAnimationFrame`-based).
- `style.css` — styling for maze cells, Pac-Man, ghosts, and the overlay
  screens.
- `Images/` — sprite and screen images (Pac-Man sprite, ghost sprite,
  game-over/game-win illustrations).
- `sound/` — `Chomp.mp3` and `Death.mp3` sound effects.
- `favicon.ico` — browser tab icon.

## Requirements

- A web browser with JavaScript enabled. No server, runtime, or package
  manager is required.

## Installation

```
git clone https://github.com/3xoob/make-your-game.git
cd make-your-game
```

## Usage

Open `index.html` directly in a web browser to play.

Controls:
- Arrow keys — move Pac-Man (up/down/left/right)
- `P` — pause/resume the game
- `M` — mute/unmute sound effects

## Example

Eating a regular pill adds 1 point and eating a pill sitting on an
intersection adds 5 points; once the total score reaches 205 the Game Win
screen appears. Colliding with a ghost costs one soul and respawns Pac-Man
at the maze entrance; losing all 3 souls triggers the Game Over screen.

## Limitations

- Ghosts move using random direction changes rather than any pathfinding or
  chase logic toward Pac-Man.
- Only a single, hardcoded maze layout exists — there is no level
  progression.
- Controls are keyboard-only; there is no touch or mouse input.
- There is no persistent high-score storage; only the current win/over
  state is kept in `sessionStorage` for the browser session.

## License

This project is distributed under a restrictive, all-rights-reserved
license — see [LICENSE](./LICENSE) and [COPYRIGHT.md](./COPYRIGHT.md). The
source is published for portfolio/viewing purposes only; copying,
modifying, distributing, or otherwise reusing it requires prior written
permission from the copyright holder.
