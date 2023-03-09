const grids = document.querySelectorAll('.grids');
const playagain = document.querySelector('.playagain');
const turnDisplay = document.querySelector('.turn');
const winningDisplay = document.querySelector('.winning-display');
const winningMessage = document.querySelector('.winning-message .turn');
const afterWinPlayAgain = document.querySelector('.restart');
const winDiv = document.querySelector('.wins-div');
const players = (symbol) =>{
    let turn = true;
   
    const getSymbol = ()  =>{
       return symbol;
    }
    return {getSymbol,turn};
};



 
const playRound = (() => {
    let gridcount = 0;
   const player1 = players("X");
    const player2 = players("O");
//   updateScreen();
  grids.forEach((element) => {
    const handleClick = () => {
      if (player1.turn) {
        player1.turn = false;
        player2.turn = true;
        element.textContent = player1.getSymbol(); 
        element.classList.add('x-style');

        turnDisplay.classList.remove('x-style');
        turnDisplay.classList.add('o-style');
        turnDisplay.textContent = player2.getSymbol();
        checkWin.checkWinningPlayer(player1.getSymbol());
        gridcount += 1;
      } else if (player2.turn) {
        player2.turn = false;
        player1.turn = true;
        element.textContent = player2.getSymbol();
        element.classList.add('o-style');
        turnDisplay.classList.remove('o-style');
        turnDisplay.classList.add('x-style');
        turnDisplay.textContent = player1.getSymbol();
        checkWin.checkWinningPlayer(player2.getSymbol());
        gridcount += 1;
      }
      if(gridcount>=9){
        winningDisplay.classList.add('show'); 
        winningMessage.textContent = 'ITS A TIE!';
        winDiv.textContent = '';
      }
      element.removeEventListener('click', handleClick); 
     
    };

    element.addEventListener('click', handleClick);
        
  });
  playagain.addEventListener('click' , ()=>{
    updateScreen.update();
  })
})();

const updateScreen = (() =>{
    const update = () =>{
         grids.forEach(element => {
        element.textContent = '';
    });
    }
   return {update}
})();




const checkWin = (() =>{
    const winCombinations = [  [0, 1, 2],
          [3, 4, 5],
          [6, 7, 8],
          [0, 3, 6], 
          [1, 4, 7],
          [2, 5, 8],
          [0, 4, 8], 
          [2, 4, 6],
];
    const checkWinningPlayer = (symbol) =>{
        for (let i = 0; i < winCombinations.length; i++) {
            const [a,b,c] = winCombinations[i];
            if(grids[a].textContent === symbol && grids[b].textContent === symbol && grids[c].textContent === symbol){
                console.log(symbol);
                 winningDisplay.classList.add('show'); 
                 winningMessage.textContent = symbol;
                 if(symbol==='X'){
                    winningMessage.classList.add('x-style');
                }else{
                    winningMessage.classList.add('o-style');
                }
                return symbol;
            };
        }
        
       
    }
   return {checkWinningPlayer}

})();



