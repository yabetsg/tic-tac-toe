const grids = document.querySelectorAll('.grids');


/* Requirement

    - updateScreen()
    - clickHandlerBoard()
    - playRound()

*/


const players = (symbol) =>{
    let turn = true;
   
    const getSymbol = ()  =>{
       return symbol;
    }
    
    return {getSymbol,turn};
}

player1 = players("X");
player2 = players("O");
console.log();


const playRound = () => {
    
//   updateScreen();
  grids.forEach((element) => {
    const handleClick = () => {
      if (player1.turn) {
        player1.turn = false;
        player2.turn = true;
        element.textContent = player1.getSymbol(); 
         checkWin.checkWinningPlayer('X');
      } else if (player2.turn) {
        player2.turn = false;
        player1.turn = true;
        element.textContent = player2.getSymbol();
        checkWin.checkWinningPlayer('O');
      }
    
      element.removeEventListener('click', handleClick); 
     
    };

    element.addEventListener('click', handleClick);
        
  });
  
};

const updateScreen = () =>{
    grids.forEach(element => {
        element.textContent = '';
    });
}


const clickHandlerBoard = (sybmol) =>{
    
    grids.forEach(element => {
        element.addEventListener('click', () =>{
            
            element.textContent = sybmol;
           
            checkWIn();
        });
    });
}


const checkWin = (() =>{
    const winCombinations = [  [0, 1, 2], // rows
          [3, 4, 5],
          [6, 7, 8],
          [0, 3, 6], // columns
          [1, 4, 7],
          [2, 5, 8],
          [0, 4, 8], // diagonals
          [2, 4, 6],
];
    const checkWinningPlayer = (symbol) =>{
        for (let i = 0; i < winCombinations.length; i++) {
            const [a,b,c] = winCombinations[i];
            if(grids[a].textContent === symbol && grids[b].textContent === symbol && grids[c].textContent === symbol){
                console.log(symbol);
                return symbol;
            };
        }
        
       
    }
   return {checkWinningPlayer}

})();
playRound();











// if(grids[0].textContent=== 'X'&&grids[1].textContent=== 'X'&&grids[2].textContent === 'X'){
//     winningSymbol = 'X';
//     console.log(winningSymbol+'1');
//     return winningSymbol;
// }else if(grids[3].textContent=== 'X'&&grids[4].textContent=== 'X'&&grids[5].textContent === 'X'){
//     winningSymbol += 'X';
//     console.log(winningSymbol+'2');
//     return winningSymbol;
// }else if(grids[8].textContent=== 'X'&&grids[5].textContent=== 'X'&&grids[2].textContent === 'X'){
//     winningSymbol += 'X';
//     console.log(winningSymbol+'3');
//     return winningSymbol;
// }else if(grids[6].textContent=== 'X'&&grids[7].textContent=== 'X'&&grids[8].textContent === 'X'){
//     winningSymbol += 'X';
//     console.log(winningSymbol+'4');
//     return winningSymbol;
// }else if(grids[0].textContent=== 'X'&&grids[3].textContent=== 'X'&&grids[6].textContent === 'X'){
//     winningSymbol += 'X';
//     console.log(winningSymbol+'5');
//     return winningSymbol;
// }else if(grids[1].textContent=== 'X'&&grids[4].textContent=== 'X'&&grids[7].textContent === 'X'){
//     winningSymbol += 'X';
//     console.log(winningSymbol+'6');
//     return winningSymbol;
// }else if(grids[2].textContent=== 'X'&&grids[5].textContent=== 'X'&&grids[8].textContent === 'X'){
//     winningSymbol += 'X';
//     console.log(winningSymbol+'7');
//     return winningSymbol;
// }else if(grids[0].textContent=== 'X'&&grids[4].textContent=== 'X'&&grids[8].textContent === 'X'){
//     winningSymbol += 'X';
//     console.log(winningSymbol+'7');
//     return winningSymbol;
// }else if(grids[2].textContent=== 'X'&&grids[4].textContent=== 'X'&&grids[6].textContent === 'X'){
//     winningSymbol += 'X';
//     console.log(winningSymbol+'7');
//     return winningSymbol;
// }else if(grids[0].textContent=== 'O'&&grids[1].textContent=== 'O'&&grids[2].textContent === 'O'){
//     winningSymbol += 'O';
//     console.log(winningSymbol+'9');
//     return winningSymbol;
// }else if(grids[3].textContent=== 'O'&&grids[4].textContent=== 'O'&&grids[5].textContent === 'O'){
//     winningSymbol += 'O';
//     console.log(winningSymbol+'10');
//     return winningSymbol;
// }else if(grids[6].textContent=== 'O'&&grids[7].textContent&&grids[8].textContent === 'O'){
//     winningSymbol += 'O';
//     console.log(winningSymbol+'11');
//     return winningSymbol;
// }else if(grids[0].textContent=== 'O'&&grids[3].textContent=== 'O'&&grids[6].textContent === 'O'){
//     winningSymbol += 'O';
//     console.log(winningSymbol+'12');
//     return winningSymbol;
// }else if(grids[1].textContent=== 'O'&&grids[4].textContent=== 'O'&&grids[7].textContent === 'O'){
//     winningSymbol += 'O';
//     console.log(winningSymbol+'13');
//     return winningSymbol;
// }else if(grids[2].textContent=== 'O'&&grids[5].textContent=== 'O'&&grids[8].textContent === 'O'){
//     winningSymbol += 'O';
//     console.log(winningSymbol+'14');
//     return winningSymbol;
// }else if(grids[0].textContent=== 'O'&&grids[4].textContent=== 'O'&&grids[8].textContent === 'O'){
//     winningSymbol += 'O';
//     console.log(winningSymbol+'15');
//     return winningSymbol;
// }else if(grids[2].textContent=== 'O'&&grids[4].textContent=== 'O'&&grids[6].textContent === 'O'){
//     winningSymbol += 'O';
//     console.log(winningSymbol+'16');
//     return winningSymbol;
// }