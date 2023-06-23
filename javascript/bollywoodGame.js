// javascript code goes here
const answer = "actor";
const letters = document.querySelectorAll(".letter");
const chancesDiv = document.querySelector(".chances");
let chances = 5;
letters.forEach((letter, index) => {
  letter.addEventListener("input", (e) => {
    const userAnswer = e.target.value;
    // console.log(userAnswer, answer.split("")[index]);
    if (userAnswer !== answer.split("")[index]) {
      chances--;
      alert("Wrong guess! " + chances + " guesses remaining.");
      chancesDiv.innerHTML = "Chances Left : " + chances;
      letter.innerHTML = ""
      letter.focus()

      if (chances === 0) {
        alert("You've run out of guesses! Game over!");
        chancesDiv.innerHTML = "Chances Left : 0";
        document.querySelector("#answer").innerHTML = answer;
      }
    } else {
      if (index === 4) {
        alert("Congratulations!");
      }
      letters[index].innerHTML = userAnswer;
    }
  });
});
