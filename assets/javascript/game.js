      // VARIABLES
      // ====================================================================
      // Here we create variables for tracking the number of sandwiches eaten
      // ...

      var wins = 0;
      var loses = 0;
      var guessLeft = 9;
      var randLetter;
      var userGuess;

      var targetDiv = document.getElementById("totalGuess");

            targetDiv.innerHTML = guessLeft;
      
      var psychicGame = {

      getUserInput: function()
      {
        var userInput = document.getElementById("userInput").value;
        console.log("user input " + userInput);
        $("#lettersGuessed").append(userInput);        

        psychicGame.getLetter();
        userGuess = userInput;
        document.getElementById("user").reset();
      },

      getLetter: function(){
        var letterArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

        // radomly choose a letter from the "letterArray" array
        randno = Math.floor(Math.random() * letterArray.length);
        randLetter = letterArray[randno];
        guessLeft--;
        console.log("you have " + guessLeft + "guesses left");
        var targetDiv = document.getElementById("totalGuess");

            targetDiv.innerHTML = guessLeft;
        

        if (guessLeft > 0)
        {
          console.log(letterArray[randno]);
          psychicGame.compareLetter();
        }
        else if (guessLeft === 0){
          wins = 0;
          loses = 0;
          guessLeft = 9;
          document.getElementById("user").reset();
          return;
        }
      },

      compareLetter: function(){

        if (userGuess == userInput){
            win++
            console.log("wins = " + wins);
            var targetDiv = document.getElementById("totalWin");

      targetDiv.innerHTML = wins;

      //targetDiv.appendChild(wins);
          }
          else{
            loses++
            console.log("loses = " + loses);
            var targetDiv = document.getElementById("totalLoses");

            targetDiv.innerHTML = loses;

            //targetDiv.appendChild(loses);
          }
      }

      // ...
};
