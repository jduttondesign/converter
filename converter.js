 
var submitButton = document.getElementById("submit");
var clearButton = document.getElementById("clear");
var button = document.getElementById("button");
var fahrenheit = document.getElementById("Fahrenheit");
var celsius = document.getElementById("Celsius");

function toFahrenheit(temp) {
    temp = (temp * 9/5) + 32;
    temp = Math.round(temp);
    return temp;
}

function toCelsius(temp) {
    temp = (temp - 32) * 5/9;
    temp = Math.round(temp);
    return temp;
}

function temp() {
  var userInput = Math.round(document.getElementById("usertemp").value);

  if (fahrenheit.checked) {
     converted-temp.value = toFahrenheit(userInput);
     userInput = parseInt(userInput);
  }
}

  if (celsius.checked) {
    converted-temp.value = toCelsius(userInput);
    userInput = parseInt(userInput);
  }
 } 
}

document.getElementById("usertemp").addEventListener("keydown", function (e){
    if (e.keyCode === 13) {
        submitbutton.click();
    }
});

function clear() {
    document.getElementById("usertemp").value = "";
    document.getElementById("converted-temp").innerHTML = "clear";
}


submitbutton.addEventListener("click", temp);
clearbutton.addEventListener("click", clear);










     



