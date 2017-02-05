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

      // Keep track of how many guesses the user has
      updateGuesses = function()
      {
        console.log("in updateGuesses");
        document.querySelector("#totalGuess").innerHTML = "<h3>" + guessLeft + "</h3>";
        console.log(guessLeft);
      };
      
      //randomly generate a letter from the array

      var getComputerGuess = function()
      {
        console.log("in getComputerGuess function");
        this.computerGuess = this.letterArray[Math.floor(Math.random() * this.letterArray.length)];
        

        console.log("The computer chose: " + computerGuess);
        
      };
      
      // Display all of the letters guessed
      var lettersGuessed = function() 
      {
        console.log("in lettersGuessed function");
        // Display the letters guessed by the user
        document.querySelector('#lettersGuessed').innerHTML = "<h3>" + guessedLetters.join(', ') + "</h3>";
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
      };
      //this below will execute first
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

             // we will add to wins and we'll update the html to display the wins 
        if (guessLeft > 0){
            if (userInput == computerGuess){
                wins++;
                document.querySelector('#totalWin').innerHTML = "<h3>" + wins + "</h3>";
                console.log("wins = : " + wins);
                resetFunction();
            }
        }else if(guessLeft == 0){
            // we will add to loss and we'll update the html to display the loss 
            loses++;
            document.querySelector('#totalLoses').innerHTML = "<h3>" + loses + "</h3>";
            console.log("loses = : " + loses);
            // Then we'll call the reset. 
            resetFunction();
        }
};



