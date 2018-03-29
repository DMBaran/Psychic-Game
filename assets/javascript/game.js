var computerChoice = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'z', 'x', 'c', 'v', 'b', 'n', 'm'];
    var wins = 0;
    var chances = 10;
    var losses = 0;

    document.onkeyup = function(event) {
      
      var userGuess = event.key.toLowerCase();

      var computerGuess = computerChoice[Math.floor(Math.random() * computerChoice.length)];
      
      if (computerChoice.includes(userGuess)) {
        if ((userGuess === computerGuess)) {
          wins++;
        }
        else if (userGuess != computerGuess) {
          chances--;
        }
        if (chances === 0) {
          losses++;
          chances = 10;
        }
        var html =
        "<h1> Psychic </h1>" + 
        "<p> You Chose: " + userGuess + "</p>" +
        "<p> Computer Chose: " + computerGuess + "</p>" +
        "<p> Wins:" +wins+ "</p>" +
        "<p> Chances:" +chances+ "</p>" +
        "<p> losses:" +losses+ "</p>";
        document.querySelector("#game").innerHTML = html;  
      }
    }