import { move, spawn, canMove, hasMoves, scoreMove } from '@firefly13/arcade-core'

function emptyBoard() {
	return [
		[0, 0, 0, 0],
		[0, 0, 0, 0],
		[0, 0, 0, 0],
		[0, 0, 0, 0]
	];
}

class Game {

	board = $state(emptyBoard());
	score = $state(0);
	best = $state(0);

	won = $derived(this.board.flat().some((value) => value >= 2048));
	over = $derived(!hasMoves(this.board));
	constructor() {
		this.newGame();
	}

	newGame() {
		this.board = emptyBoard();
		this.board = spawn(this.board);
		this.board = spawn(this.board);
		this.score = 0;
	}

	play(direction) {
		if (!canMove(this.board, direction)) return;
		this.score += scoreMove(this.board, direction);
		this.board = move(this.board, direction);
		this.board = spawn(this.board);
		this.best = Math.max(this.best, this.score);
	}
}

export const game = new Game();
