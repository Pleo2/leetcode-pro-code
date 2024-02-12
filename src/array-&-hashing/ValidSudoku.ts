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

export default function isValidSudoku(board: string[][]): any {
    isRowItemRepeat(board)
    // map  colums of the array

    const arrayAgrupado = board.map((row, idxRow) => {
        return row.map((item, idxColumn) => {
            return {
                idxColumn,
                idxRow,
                item,
            }
        })
    })

    const columnArr = new Array(9).fill([])

    for (let i = 0; i < arrayAgrupado.length; i++) {
        const element = arrayAgrupado[i];

        for (let index = 0; index < element.length; index++) {
            const item = element[index];
            if(item.idxColumn === index) {
                columnArr[i].push(item.item)
            }
        }
    }
    
    console.log(columnArr)
}

function isRowItemRepeat(board: string[][]): boolean | string {
    for (let idx = 0; idx < board.length; idx++) {
        const element = board[idx]
        const row = element.filter(item => item !== '.')
        const set = new Set(row)
        if (set.size !== row.length) {
            return false
        }
    }
    return 'no repeat'
}
