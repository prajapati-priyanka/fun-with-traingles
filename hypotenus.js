var inputs = document.querySelectorAll(".side-input");
var hypotenusBtn = document.querySelector("#hypotenus-btn");
var outputEl = document.querySelector("#output");

function calculateSumOfSquaresOfSides(side1, side2) {
  var sumOfSquares = side1 * side1 + side2 * side2;
  return sumOfSquares;
}

function calculateHypotenusOfTriangle() {
  if (inputs[0].value && inputs[1].value) {
    
    if(inputs[0].value > 0 && inputs[1].value > 0){

      var sumOfSquares = calculateSumOfSquaresOfSides(
        Number(inputs[0].value),
        Number(inputs[1].value)
      );
      var hypotenus = Math.sqrt(sumOfSquares).toFixed(2);
  
      outputEl.innerText = "Length of hypotenus is: " + hypotenus;

    }else{
      outputEl.innerText = " Please enter the values greater than 0."
    }
  
  } else {
    outputEl.innerText = "Please enter the details";
  }
}

hypotenusBtn.addEventListener("click", calculateHypotenusOfTriangle);
