# Conway's Game of Life

This is an implementation of Conway's Game of Life using Typescript and Svelte.
It is deployed [here](https://n-ckr-ch-rds-n.github.io/game-of-life).

The Game of Life is a cellular automaton devised by the British mathematician John Horton Conway in 1970.
The universe of the Game of Life is an infinite, two-dimensional orthogonal grid of square cells, each of which is in one of two possible states, live or dead. Every cell interacts with its eight neighbours, which are the cells that are horizontally, vertically, or diagonally adjacent. At each step in time, the following transitions occur:

1. Any live cell with fewer than two live neighbours dies, as if by underpopulation.
2. Any live cell with two or three live neighbours lives on to the next generation.
3. Any live cell with more than three live neighbours dies, as if by overpopulation.
4. Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.

In my implementation space is toroidal, so any critters exiting stage right will reappear stage left, and any exiting at the top will reappear at the bottom. 
For more info check out the Wikipedia [page](https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life).

## Development

Run```npm install``` to install the dependencies and ```npm run dev``` to start the dev server.
```npm run build``` will build the app. ```npm run deploy``` pushes the build to the gh-pages branch of the project (don't forget to commit the changes first).


## Tests
Tests are written with [mocha](https://github.com/mochajs/mocha) and [expect](https://github.com/facebook/jest#readme).
Run them with ```npm run test```.
