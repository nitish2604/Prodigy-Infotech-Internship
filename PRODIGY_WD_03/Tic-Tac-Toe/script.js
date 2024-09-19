const board = document.getElementById('board');
const resetBtn = document.getElementById('resetBtn');
const messageDisplay = document.getElementById('message');

let currentPlayer = 'X';
let gameActive = true;
let boardState = ['', '', '', '', '', '', '', '', ''];

function createBoard() {
    board.innerHTML = '';
    boardState.fill('');
    currentPlayer = 'X';
    gameActive = true;
    messageDisplay.textContent = '';

    for (let i = 0; i < 9; i++) {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        cell.setAttribute('data-cell-index', i);
        cell.addEventListener('click', handleCellClick);
        board.appendChild(cell);
    }
}

function handleCellClick(event) {
    const cellIndex = event.target.getAttribute('data-cell-index');
    if (boardState[cellIndex] !== '' || !gameActive) return;

    boardState[cellIndex] = currentPlayer;
    event.target.textContent = currentPlayer;
    checkResult();
}

function checkResult() {
    const winningConditions = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6],
    ];

    for (const condition of winningConditions) {
        const [a, b, c] = condition;
        if (boardState[a] && boardState[a] === boardState[b] && boardState[a] === boardState[c]) {
            messageDisplay.textContent = `Player ${currentPlayer} wins!`;
            gameActive = false;
            return;
        }
    }

    if (!boardState.includes('')) {
        messageDisplay.textContent = "It's a draw!";
        gameActive = false;
    } else {
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    }
}

resetBtn.addEventListener('click', createBoard);
createBoard();
