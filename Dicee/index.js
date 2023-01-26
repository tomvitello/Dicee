var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomImageSource = "Images/dice" + randomNumber1 + ".png";
document.querySelectorAll("img")[0].setAttribute("src", randomImageSource);

var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomImageSource2 = "Images/dice" + randomNumber2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!";
}
else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
}
else {
    document.querySelector("h1").innerHTML = "Draw!";
}




/*
function randomNumber1 (player1, player2) {
    var image1 = document.querySelector(".img1");
    var player1 = Math.random();
    player1 = player1 * 6;
    player1 = Math.floor(player1) + 1;

    var image2 = document.querySelector(".img2");
    var player2 = Math.random();
    player2 = player2 * 6;
    player2 = Math.floor(player2) + 1;

    //image.setAttribute("src", "images/dice2.png");

    if (player1 == 1) {
        image1.setAttribute("src", "images/dice1.png");
        //document.getElementsByClassName("img1")[0].src = "images/dice3.png";
    }

    else if (player1 == 2) {
        image1.setAttribute("src", "images/dice2.png");   
    }

    else if (player1 == 3) {
        image1.setAttribute("src", "images/dice3.png");    
    }

    else if (player1 == 4) {
        image1.setAttribute("src", "images/dice4.png");   
    }

    else if (player1 == 5) {
        image1.setAttribute("src", "images/dice5.png");   
    }

    else  {
        image1.setAttribute("src", "images/dice6.png");   
    }


    
    if (player2 == 1) {
        image1.setAttribute("src", "images/dice1.png");
        //document.getElementsByClassName("img2")[0].src = "images/dice3.png";
    }

    else if (player2 == 2) {
        image2.setAttribute("src", "images/dice2.png");   
    }

    else if (player2 == 3) {
        image2.setAttribute("src", "images/dice3.png");    
    }

    else if (player2 == 4) {
        image2.setAttribute("src", "images/dice4.png");   
    }

    else if (player2 == 5) {
        image2.setAttribute("src", "images/dice5.png");   
    }

    else  {
        image2.setAttribute("src", "images/dice6.png");   
    }


    if (player1 > player2) {
        document.querySelector("h1").innerHTML = "🚩 Play 1 Wins!";
      }
    else if (player1 == player2) {
        document.querySelector("h1").innerHTML = "Draw!";
      }
    else {
        document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";

    }
}

//document.getElementById("demo").innerHTML = time;

*/