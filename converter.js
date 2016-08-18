 
var userInput = document.getElementById("userInput");
var button = document.getElementById("button");
var userOutput = document.getElementById("userOutput");
var clearButton = document.getElementById("clearButton");


function determineConverter () {
  f.addEventListener("click",toFahrenheit);
  c.addEventListener("click", toCelsius);
  button.addEventListener("click", determineConverter);
}

/*Stackover flow says: 
<html>
    <body>
      <div id="output"></div>
    </body>
</html>

and javascript

window.onload = function(){
  var output = document.getElementById('output');
  console.log(output);
  output.innerHTML = "test";
  output.style.color ="#ff0000";
};*/

function toFahrenheit (userInput) {
 var input = userInput.value;
var fTemp = (cTempVal * (9 / 5)) + 32;
 if (toCelsius > 32){
    output.style.color = "red";
    } else if (toCelsius <= 32) {
      output.style.color = "green";
      } else
      output.style.color = "blue";
}


function toCelsius (userInput) {
  var input = userInput.value;
  var cTemp = (fTempVal - 32) * (5 / 9);
  if (toCelsius > 32){
    output.style.color = "red";
    } else if (toCelsius <= 0) {
      output.style.color = "green";
      } else
      output.style.color = "blue";
}
}


function clear() {
  document.getElementById("usertemp").value = "";
  document.getElementById("converted-temp").innerHTML = "clear";
}


submitbutton.addEventListener("click", temp);
clearbutton.addEventListener("click", clear);





/*

    var fTemp = document.getElementById('fTemp');
    var cTemp = document.getElementById('cTemp');

function toCelsius () {
                  
    var cTemp = (fTempVal - 32) * (5 / 9);
    document.getElementById('cTemp').value = cTempVal;
    document.getElementById('cTemp').innerHTML += cTempVal;
  console.log(myCheck);     
  //f to c

}


function toFahrenheit () {
     
    var fTemp = (cTempVal * (9 / 5)) + 32;
    //console.log(fTempVal);
    document.getElementById('fTemp').value = fTempVal;
    document.getElementById('fTemmp').innerHTML += fTempVal;
 }
 //c to f


// Get a reference to the button element in the DOM
var button = document.getElementById("converter");

// This function should determine which conversion should
// happen based on which radio button is selected.


  
//}

// Assign a function to be executed when the button is clicked
button.addEventListener("click", determineConverter); 

*/









     



