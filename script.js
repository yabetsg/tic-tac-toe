const getSelectors = (() => ({
  grids: document.querySelectorAll('.grids'),
  playagain: document.querySelector('.playagain'),
  turnDisplay: document.querySelector('.turn'),
  winningDisplay: document.querySelector('.winning-display'),
  winningMessage: document.querySelector('.winning-message .turn'),
  afterWinPlayAgain: document.querySelector('.restart'),
  winDiv: document.querySelector('.wins-div'),
}))();

const players = (symbol) => {
  const turn = true;

  const getSymbol = () => symbol;
  return { getSymbol, turn };
};

const updateScreen = (() => {
  const refresh = () => {
    getSelectors.grids.forEach((element) => {
      const e = element;
      e.textContent = '';
    });
  };
  return { refresh };
})();

const checkForTie = (gridcount) => {
  if (gridcount >= 9) {
    getSelectors.winningDisplay.classList.add('show');
    getSelectors.winningMessage.textContent = 'ITS A TIE!';
    getSelectors.winDiv.textContent = '';
  }
};

const checkWin = (() => {
  const winCombinations = [[0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  // eslint-disable-next-line consistent-return
  const checkWinningPlayer = (symbol) => {
    for (let i = 0; i < winCombinations.length; i += 1) {
      const [a, b, c] = winCombinations[i];
      if (getSelectors.grids[a].textContent === symbol
        && getSelectors.grids[b].textContent === symbol
        && getSelectors.grids[c].textContent === symbol) {
        getSelectors.winningDisplay.classList.add('show');
        getSelectors.winningMessage.textContent = symbol;
        getSelectors.winDiv.textContent = 'WINS';
        if (symbol === 'X') {
          getSelectors.winningMessage.classList.add('x-style');
        } else {
          getSelectors.winningMessage.classList.add('o-style');
        }
        return symbol;
      }
    }
  };
  return { checkWinningPlayer };
})();
// eslint-disable-next-line no-unused-vars
const playRound = (() => {
  let gridcount = 0;
  const player1 = players('X');
  const player2 = players('O');
  getSelectors.grids.forEach((element) => {
    const e = element;
    const handleClick = () => {
      if (player1.turn) {
        gridcount += 1;
        player1.turn = false;
        player2.turn = true;
        e.textContent = player1.getSymbol();
        e.classList.add('x-style');
        getSelectors.turnDisplay.classList.remove('x-style');
        getSelectors.turnDisplay.classList.add('o-style');
        getSelectors.turnDisplay.textContent = player2.getSymbol();
        checkForTie(gridcount);
        checkWin.checkWinningPlayer(player1.getSymbol());
      } else if (player2.turn) {
        gridcount += 1;
        player2.turn = false;
        player1.turn = true;
        e.textContent = player2.getSymbol();
        e.classList.add('o-style');
        getSelectors.turnDisplay.classList.remove('o-style');
        getSelectors.turnDisplay.classList.add('x-style');
        getSelectors.turnDisplay.textContent = player1.getSymbol();
        checkForTie(gridcount);
        checkWin.checkWinningPlayer(player2.getSymbol());
      }

      element.removeEventListener('click', handleClick);
    };

    element.addEventListener('click', handleClick);
  });
  getSelectors.playagain.addEventListener('click', () => {
    updateScreen.refresh();
  });
})();
