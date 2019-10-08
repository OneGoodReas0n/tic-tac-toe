class TicTacToe {
    constructor() {
        this.turn = 0;
        this.canvas = [[null, null, null], [null, null, null], [null, null, null]];
        this.winner = null;
    }

    getCurrentPlayerSymbol() {
        return this.turn % 2 === 0 ? 'x' : 'o'
    }

    nextTurn(rowIndex, columnIndex) {
        if (this.canvas[rowIndex][columnIndex] === null) {
            this.canvas[rowIndex][columnIndex] = this.getCurrentPlayerSymbol()
            this.turn++;
        }
        this.isFinished()
    }

    isFinished() {
        for (let i = 0; i < this.canvas.length; i++) {
            if (this.canvas[i][0] !== null && this.canvas[i][0] === this.canvas[i][1] && this.canvas[i][1] === this.canvas[i][2]) {
                this.winner = this.canvas[i][0]
                return true
            }
            else if (this.canvas[0][i] !== null && this.canvas[0][i] === this.canvas[1][i] && this.canvas[1][i] === this.canvas[2][i]) {
                this.winner = this.canvas[0][i]
                return true
            }
        }
        if (this.canvas[0][0] !== null && this.canvas[0][0] === this.canvas[1][1] && this.canvas[1][1] === this.canvas[2][2]
            || this.canvas[0][2] !== null && this.canvas[0][2] === this.canvas[1][1] && this.canvas[1][1] === this.canvas[2][0]) {
            this.winner = this.canvas[1][1]
            return true
        }
        return this.noMoreTurns() ? true : false
    }

    getWinner() {
        return this.winner
    }

    noMoreTurns() {
        for (let i = 0; i < this.canvas.length; i++) {
            for (let j = 0; j < this.canvas[i].length; j++) {
                if (this.canvas[i][j] === null) {
                    return false;
                }
            }
        }
        return true;
    }

    isDraw() {
        return this.noMoreTurns() && this.winner === null ? true : false
    }

    getFieldValue(rowIndex, colIndex) {
        return this.canvas[rowIndex][colIndex]
    }
}

module.exports = TicTacToe;
