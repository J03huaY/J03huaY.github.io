/** Solution grid. `#` marks a black square. */
export const solution = ['POSTS', 'L#T#T', 'ARENA', 'Y#A#R', 'SPLIT'];

export const clues = {
	across: [
		{ number: 1, text: 'The two upright supports of a soccer goal.' },
		{ number: 4, text: 'An indoor venue where basketball games are played.' },
		{ number: 5, text: 'A time recorded for one section of a swimming race.' }
	],
	down: [
		{ number: 1, text: 'Planned team actions drawn on a basketball coach’s board.' },
		{ number: 2, text: 'Taking possession from an opponent in basketball.' },
		{ number: 3, text: 'The beginning of a race, signaled by a gun or horn.' }
	]
};

/**
 * Turns the solution grid into a flat list of cells, each with its clue number
 * (if a word starts there) and the across/down words it belongs to.
 * @param {string[]} grid
 */
export function buildCells(grid) {
	const rows = grid.length;
	const cols = grid[0].length;
	const isBlack = (r, c) => r < 0 || c < 0 || r >= rows || c >= cols || grid[r][c] === '#';

	const numbers = [];
	let next = 1;
	for (let r = 0; r < rows; r++) {
		numbers.push([]);
		for (let c = 0; c < cols; c++) {
			const startsAcross = !isBlack(r, c) && isBlack(r, c - 1) && !isBlack(r, c + 1);
			const startsDown = !isBlack(r, c) && isBlack(r - 1, c) && !isBlack(r + 1, c);
			numbers[r].push(startsAcross || startsDown ? next++ : null);
		}
	}

	const wordAt = (r, c, dr, dc) => {
		if (isBlack(r - dr, c - dc) && isBlack(r + dr, c + dc)) return null;
		while (!isBlack(r - dr, c - dc)) {
			r -= dr;
			c -= dc;
		}
		return numbers[r][c];
	};

	const cells = [];
	for (let r = 0; r < rows; r++) {
		for (let c = 0; c < cols; c++) {
			const black = isBlack(r, c);
			const across = black ? null : wordAt(r, c, 0, 1);
			const down = black ? null : wordAt(r, c, 1, 0);
			const words = [across && `${across} Across`, down && `${down} Down`].filter(Boolean);
			cells.push({
				id: `${r}-${c}`,
				black,
				number: numbers[r][c],
				label: `Row ${r + 1}, column ${c + 1}, ${words.join(' and ')}`
			});
		}
	}
	return cells;
}
