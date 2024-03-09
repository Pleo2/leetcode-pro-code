/* 
Determine if a 9 x 9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules:

Each row must contain the digits 1-9 without repetition.
Each column must contain the digits 1-9 without repetition.
Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without repetition.
Note:

A Sudoku board (partially filled) could be valid but is not necessarily solvable.
Only the filled cells need to be validated according to the mentioned rules.

[
  ["5","3",".",".","7",".",".",".","."] // veryfy if the numbers is unic
,["6",".",".","1","9","5",".",".","."] // push the 
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]
]

 */

export default function isValidSudoku(board: string[][]): boolean {
    // finish of understand the code tomorrow
    const rows: Record<number, Set<string>> = {};
    const cols: Record<number, Set<string>> = {};
    const squares: Record<number, Set<string>> = {};

    for (let r = 0; r < board.length ; r++) {
        for (let c = 0; c < 9; c++) {
            const num = board[r][c];
            
            if (num === '.') {
                continue;
            }

            const grid: string = `${Math.floor(r / 3)}${Math.floor(c / 3)}`;
            if (!cols[c]) {
                cols[c] = new Set();
            }
            if (!rows[r]) {
                rows[r] = new Set();
            }
            if (!squares[grid]) {
                squares[grid] = new Set();
            }

            if (
                rows[r].has(num) ||
                cols[c].has(num) ||
                squares[grid].has(num)
            ) {
                return false;
            }

            cols[c].add(num);
            rows[r].add(num);
            squares[grid].add(num);
        }
    }

    return true;
}

