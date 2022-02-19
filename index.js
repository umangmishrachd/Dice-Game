function diceRoll(){

    // let i, player1, player2;
    // const arr = [];

    let randomNumber = Math.ceil(Math.random()*6);
    let diceImageValue = "dice" + randomNumber + ".png"
    let diceImageLink = "images/" + diceImageValue;
    let image1 = document.querySelectorAll("img")[0];
    image1.setAttribute("src", diceImageLink);


    let randomNumber2 = Math.ceil(Math.random()*6);
    let diceImageValue2 = "dice" + randomNumber2 + ".png"
    let diceImageLink2 = "images/" + diceImageValue2;
    let image2 = document.querySelectorAll("img")[1];
    image2.setAttribute("src", diceImageLink2);


    if(randomNumber>randomNumber2){
        console.log();
        document.getElementById("playerWin1").innerHTML = "Player 1 Wins";
    }
    else if(randomNumber2>randomNumber){

        document.getElementById("playerWin2").innerHTML = "Player 2 Wins";

    }

    else {
        document.getElementById("playerWin").innerHTML = "Its a Draw";
    }

}