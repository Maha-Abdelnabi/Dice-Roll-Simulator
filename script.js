const buttonEl = document.getElementById("roll-button");
const diceEl = document.getElementById("dice");

//func to create random number
function rollDice(){
    const randomNumber= Math.floor(Math.random() *6) + 1;//+1 is to get the numbers between 1-6 otherwise it gets nums btwn 0-5
    console.log(randomNumber)
}

// by clicking the button, the dice will roll, by creating class name to the dice,and style it by css
buttonEl.addEventListener("click", ()=>{
    diceEl.classList.add("roll-animation");
    //the roll animation only works for one time,,so we're going to add setTimeOut to trigger the func after 1 sec
     setTimeout(() => {
       diceEl.classList.remove("roll-animation");
       rollDice();
     }, 1000);
});