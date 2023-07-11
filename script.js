const buttonEl = document.getElementById("roll-button");
const diceEl = document.getElementById("dice");
const rollHistoryEl = document.getElementById("roll-history");


//empty array,that's going to be updated every ttime we click the button
let historyList = [];

//func to create random number
function rollDice() {
  const randomNumber = Math.floor(Math.random() * 6) + 1; //+1 is to get the numbers between 1-6 otherwise it gets nums btwn 0-5
  console.log(randomNumber);

  const diceFace = getDiceFace(randomNumber);
  diceEl.innerHTML = diceFace;
  historyList.push(randomNumber);
  updateRollHistory();
}

function updateRollHistory() {
  rollHistoryEl.innerHTML = "";//make it empty at first
  for (let i = 0; i < historyList.length; i++) {
    const listItem = document.createElement("li");
    listItem.innerHTML = `Roll ${i + 1}: <span>${getDiceFace(
      historyList[i]
    )}</span>`;
    rollHistoryEl.appendChild(listItem);
  }
}

//based on that num,create a func to change dice face
function getDiceFace(randomNumber){
    switch (randomNumber) {
      case 1:
        return "&#9856;";
      case 2:
        return "&#9857;";
      case 3:
        return "&#9858;";
      case 4:
        return "&#9859;";
      case 5:
        return "&#9860;";
      case 6:
        return "&#9861;";
      default:
        return "";
    }

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