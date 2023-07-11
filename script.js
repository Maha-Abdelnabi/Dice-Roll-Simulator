const buttonEl = document.getElementById("roll-button");
const diceEl = document.getElementById("dice");


// by clicking the button, the dice will roll, by creating class name to the dice,and style it by css
buttonEl.addEventListener("click", ()=>{
    diceEl.classList.add("roll-animation");
    //the roll animation only works for one time,,so we're going to add setTimeOut to trigger the func after 1 sec
     setTimeout(() => {
       diceEl.classList.remove("roll-animation");
     }, 1000);
});