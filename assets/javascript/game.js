      // VARIABLES
      // ====================================================================
      // Here we create variables for tracking the number of sandwiches eaten
      // ...

      var wins = 0;
      var loses = 0;
      var guessLeft = 9;
      //var guesses = 9;
      //var randLetter;
      var guessedLetters = [];
      var computerGuess;

      var letterArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

      // get a random letter from the LetterArray 
      var randomGuess = Math.floor(Math.random() * letterArray.length);

      updateGuesses = function()
      {
        console.log("in updateGuesses");
        document.querySelector("#totalGuess").innerHTML = guessLeft;
        console.log(guessLeft);
      };
      //updateGuesses();


      var getComputerGuess = function()
      {
        console.log("in getComputerGuess function");
        this.computerGuess = this.letterArray[Math.floor(Math.random() * this.letterArray.length)];
        

        console.log("The computer chose: " + computerGuess);
        
      };
      //getComputerGuess();

      var lettersGuessed = function() 
      {
        console.log("in lettersGuessed function");
        // Display the letters guessed by the user
        document.querySelector('#lettersGuessed').innerHTML = guessedLetters.join(', ');
      };

      var resetFunction = function()
      {
        console.log("in resetFunction");
      guessLeft = 9;
      guesses = 9;
      
      guessedLetters = [];
      
      getComputerGuess();
      updateGuesses();
      lettersGuessed();
      }
      getComputerGuess();
      updateGuesses();

      document.onkeyup = function(event) 
      {
        console.log("in document.onkeyup function");
        guessLeft--;
        var userInput = String.fromCharCode(event.keyCode).toLowerCase();

        guessedLetters.push(userInput);
        updateGuesses();
        lettersGuessed();
        console.log("userInput: " + userInput);
        console.log("computer's: " + computerGuess);

        if (guessLeft > 0){
            if (userInput == computerGuess){
                wins++;
                document.querySelector("#totalWin").innerHTML = wins;
                console.log("wins = : " + wins);
                resetFunction();
            }
        }else if(guessLeft == 0){
            // Then we will loss and we'll update the html to display the loss 
            loses++;
            document.querySelector("#totalLoses").innerHTML = loses;
            console.log("loses = : " + loses);
            // Then we'll call the reset. 
            resetFunction();
        }
};



/*
      getLetter: function(){
        var letterArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

        // radomly choose a letter from the "letterArray" array
        randno = Math.floor(Math.random() * letterArray.length);
        randLetter = letterArray[randno];
        guessLeft--;
        console.log("you have " + guessLeft + "guesses left");
        var targetDiv = document.getElementById("totalGuess");
*/
    //  }

      // ...
//};
