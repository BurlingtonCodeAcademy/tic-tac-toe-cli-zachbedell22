//Readline bloiler plate code
const readline = require('readline');
const readlineInterface = readline.createInterface(process.stdin, process.stdout);

function ask(questionText) {
  return new Promise((resolve, reject) => {
    readlineInterface.question(questionText, resolve);
  });
}

let playerStatus = 1;
rowOne = [' 1','|','2','|','3'];
rowDashes = ['---','---','---'];
rowTwo = [' 4','|','5','|','6'];
rowThree = [' 7','|','8','|','9'];


printBoard();
console.log('\n' +  "Welcome to tic tac toe, a two player game.  The first player to guess will be X's and the second will be O's.  Please choose a game board section based on it corresponding number."+'\n')
playerOne();

//printBoard();

function printBoard(){
  let rowOneString = rowOne.join(' ');
  console.log(rowOneString);
  let rowOfDashes = rowDashes.join(' ');
  console.log(rowOfDashes);
  let rowTwoString = rowTwo.join(' ');
  console.log(rowTwoString);
  console.log(rowOfDashes);
  let rowThreeString = rowThree.join(' ');
  console.log(rowThreeString);
}

function testMove(testNumber,playerNumber){
  testNumber = String(testNumber).trim();
  if(testNumber == 1){
    if (rowOne[0] == 1){
      if(playerNumber == 1){
        rowOne[0] =' X';
        
        testWin(playerNumber,testNumber);
        return true;
        
      }
      if(playerNumber == 2){
        rowOne[0] = ' O';
        //testWin(playerNumber);
        return true;
      }
    }
    else if(rowOne[0] == 'X' || rowOne[0] == 'O'){
      console.log("Spot already taken, please choose a different spot"); 
      if (playerNumber == 2){
        playerTwo();
      }
      else if (playerNumber == 1){
        playerOne();
      }
    }

  }
  if(testNumber == 2){
    if (rowOne[2] == 2){
      if(playerNumber == 1){
        rowOne[2] ='X';
        //testWin(playerNumber);
        return true;
        
      }
      if(playerNumber == 2){
        rowOne[2] = 'O';
        //testWin(playerNumber);
        return true;
      }
    }
    else if(rowOne[2] == 'X' || rowOne[2] == 'O'){
      console.log("Spot already taken, please choose a different spot"); 
      if (playerNumber == 2){
        playerTwo();
      }
      else if (playerNumber == 1){
        playerOne();
      }
    }

  }
  if(testNumber == 3){
    if (rowOne[4] == 3){
      if(playerNumber == 1){
        rowOne[4] ='X';
        //testWin(playerNumber);
        return true;
        
      }
      if(playerNumber == 2){
        rowOne[4] = 'O';
        //testWin(playerNumber);
        return true;
      }
      
    }
    //ADD THESE TO ALL NUMBERS CHOSEN --- Begin -- testing to see if spot is already taken
    else if(rowOne[4] == 'X' || rowOne[4] == 'O'){
      console.log("Spot already taken, please choose a different spot"); 
      if (playerNumber == 2){
        playerTwo();
      }
      else if (playerNumber == 1){
        playerOne();
      }
    }
    // ---- END
  }
  if(testNumber == 4){
    if (rowTwo[0] == 2){
      if(playerNumber == 1){
        rowTwo[0] =' X';
        //testWin(playerNumber);
        return true;
        
      }
      if(playerNumber == 2){
        rowTwo[0] = ' O';
        //testWin(playerNumber);
        return true;
      }
    }
    else if(rowTwo[0] == 'X' || rowTwo[0] == 'O'){
      console.log("Spot already taken, please choose a different spot"); 
      if (playerNumber == 2){
        playerTwo();
      }
      else if (playerNumber == 1){
        playerOne();
      }
    }

  }
  if(testNumber == 5){
    if (rowTwo[2] == 5){
      if(playerNumber == 1){
        rowTwo[2] ='X';
        //testWin(playerNumber);
        return true;
        
      }
      if(playerNumber == 2){
        rowTwo[2] = 'O';
        //testWin(playerNumber);
        return true;
      }
    }
    else if(rowTwo[2] == 'X' || rowTwo[2] == 'O'){
      console.log("Spot already taken, please choose a different spot"); 
      if (playerNumber == 2){
        playerTwo();
      }
      else if (playerNumber == 1){
        playerOne();
      }
    }

  }
  if(testNumber == 6){
    if (rowTwo[4] == 6){
      if(playerNumber == 1){
        rowTwo[4] ='X';
        //testWin(playerNumber);
        return true;
        
      }
      if(playerNumber == 2){
        rowTwo[4] = 'O';
        //testWin(playerNumber);
        return true;
      }
    }
    else if(rowTwo[4] == 'X' || rowTwo[4] == 'O'){
      console.log("Spot already taken, please choose a different spot"); 
      if (playerNumber == 2){
        playerTwo();
      }
      else if (playerNumber == 1){
        playerOne();
      }
    }

  }
  if(testNumber == 7){
    if (rowThree[0] == 7){
      if(playerNumber == 1){
        rowThree[0] =' X';
        //testWin(playerNumber);
        return true;
        
      }
      if(playerNumber == 2){
        rowThree[0] = ' O';
        //testWin(playerNumber);
        return true;
      }
    }
    else if(rowThree[0] == 'X' || rowThree[0] == 'O'){
      console.log("Spot already taken, please choose a different spot"); 
      if (playerNumber == 2){
        playerTwo();
      }
      else if (playerNumber == 1){
        playerOne();
      }
    }

  }
  if(testNumber == 8){
    if (rowThree[2] == 8){
      if(playerNumber == 1){
        rowThree[2] =' X';
        //testWin(playerNumber);
        return true;
        
      }
      if(playerNumber == 2){
        rowThree[2] = ' O';
        //testWin(playerNumber);
        return true;
      }
    }
    else if(rowThree[2] == 'X' || rowThree[2] == 'O'){
      console.log("Spot already taken, please choose a different spot"); 
      if (playerNumber == 2){
        playerTwo();
      }
      else if (playerNumber == 1){
        playerOne();
      }
    }

  }
  if(testNumber == 9){
    if (rowThree[4] == 9){
      if(playerNumber == 1){
        rowThree[4] =' X';
        //testWin(playerNumber);
        return true;
        
      }
      if(playerNumber == 2){
        rowThree[4] = ' O';
        //testWin(playerNumber);
        return true;
      }
    }
    else if(rowThree[4] == 'X' || rowThree[4] == 'O'){
      console.log("Spot already taken, please choose a different spot"); 
      if (playerNumber == 2){
        playerTwo();
      }
      else if (playerNumber == 1){
        playerOne();
      }
    }

  }
  
  
}
function testWin(playerNumber,boxNumber){
  if (boxNumber == 1 && playerNumber == 1){
    if(rowOne[0].trim() == 'O' && rowOne[2].trim() == 'O' && rowOne[4].trim() == 'O'){return console.log("Player 1 wins!!!")}
    else if(rowOne[0].trim() == 'O' && rowTwo[2].trim() == 'O' && rowThree[4].trim() == 'O'){return console.log("Player 1 wins!!!")}
    else if(rowOne[0].trim() == 'O' && rowTwo[0].trim() == 'O' && rowThree[0].trim() == 'O'){return console.log("Player 1 wins!!!")}
  }
  else if (boxNumber == 1 && playerNumber == 2){
    if(rowOne[0].trim() == 'X' && rowOne[2].trim() == 'X' && rowOne[4].trim() == 'X'){return console.log("Player 2 wins!!!")}
    else if(rowOne[0].trim() == 'X' && rowTwo[2].trim() == 'X' && rowThree[4].trim() == 'X'){return console.log("Player 2 wins!!!")}
    else if(rowOne[0].trim() == 'X' && rowTwo[0].trim() == 'X' && rowThree[0].trim() == 'X'){return console.log("Player 2 wins!!!")}
  }
}




async function playerOne(){
  playerStatus = 1;
  let move = await ask("Player one please enter the number where you would like to place your X if the spot is not already taken>");
  //move = Number(move);
  //console.log(move);
  //console.log(playerStatus);
  move = String(move);
  playerStatus = String(playerStatus);
    if(testMove(move.trim(),playerStatus.trim()) == true){
    printBoard();
    playerTwo();
    //}
    //playerTwo();
    
    }

}

async function playerTwo(){
  playerStatus = 2;
  let move = await ask("Player two please enter the number where you would like to place your O if the spot is not already taken>");
  move = Number(move);
  //console.log(move);
  //console.log(playerStatus);
  move = String(move);
  playerStatus = String(playerStatus);
    if(testMove(move.trim(),playerStatus.trim()) === true){
    printBoard();
    playerOne();
    //}
    //playerTwo();
    
    }

}

