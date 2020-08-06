
//Creating the random number from 1 to 6
var diceNumber=Math.random();
diceNumber=diceNumber*6;
diceNumber=Math.floor(diceNumber)+1;
if ("location.reload(true)"){
   diceNumber;
   console.log(diceNumber);   
//conecting the random number to the images 
//function output (diceNumber){
if (diceNumber===1){
    document.querySelector("img.img1").classList.remove("dado");
} else if (diceNumber===2){
    document.querySelector("img.img2").classList.remove("dado");
} else if (diceNumber===3){
    document.querySelector("img.img3").classList.remove("dado");
} else if (diceNumber===4){
    document.querySelector("img.img4").classList.remove("dado");
} else if (diceNumber===5){
    document.querySelector("img.img5").classList.remove("dado");
} else if (diceNumber===6){
    document.querySelector("img.img6").classList.remove("dado");
}
}

var diceNumber2=Math.random();
diceNumber2=diceNumber2*6;
diceNumber2=Math.floor(diceNumber2)+1;
if ("location.reload(true)"){
   diceNumber2;
   console.log(diceNumber2);   
//conecting the random number to the images 
//function output (diceNumber){
if (diceNumber2===1){
    document.querySelector("img.image1").classList.remove("dado");
} else if (diceNumber2===2){
    document.querySelector("img.image2").classList.remove("dado");
} else if (diceNumber2===3){
    document.querySelector("img.image3").classList.remove("dado");
} else if (diceNumber2===4){
    document.querySelector("img.image4").classList.remove("dado");
} else if (diceNumber2===5){
    document.querySelector("img.image5").classList.remove("dado");
} else if (diceNumber2===6){
    document.querySelector("img.image6").classList.remove("dado");
}

}
if (diceNumber>diceNumber2){
   document.querySelector("h1.title").textContent="Player 1 Wins!"; 
} else if (diceNumber===diceNumber2){
   
}else {
    document.querySelector("h1.title").textContent="Player 2 Wins!"; 
}
