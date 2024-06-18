let history = [];

function showHistory() {
  document.querySelector("#history-data").'innerHTML = "";
  history.forEach((element) => {
    var li = document.createElement("li");
    li.innerHTML = element;
    document.querySelector("#history-data").append(li);
  });
  //   console.log(history);
}

function calculate() {
  var userInput = document.getElementById("result").value;
  if (userInput.length != 0) {
    var answer = eval(userInput);
    document.getElementById("result").value = answer;
    var res = userInput + " = " + String(answer);
    history.push(res);
    showHistory();
  }
}

function display(value) {
  document.getElementById("result").value += value;
}

function clearScreen() {
  document.getElementById("result").value = "";
}

function clearHistory() {
  history.length = 0;
  document.querySelector("#history-data").innerHTML = "";
}

function hideHistory() {
  document.querySelector("#history-data").innerHTML = "";
}