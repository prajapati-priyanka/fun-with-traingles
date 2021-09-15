var inputs = document.querySelectorAll(".input-angle");
var checkBtn = document.querySelector("#check-btn");
var outputEl = document.querySelector("#output");

function calculateSumOfAngles(angle1, angle2, angle3) {
  var sum = angle1 + angle2 + angle3;
  return sum;
}

function checkIsTriangle() {
  var sumOfAngles = calculateSumOfAngles(
    Number(inputs[0].value),
    Number(inputs[1].value),
    Number(inputs[2].value)
  );

  if (inputs[0].value && inputs[1].value && inputs[2].value) {
    if (inputs[0].value < 0 || inputs[1].value < 0 || inputs[2].value < 0) {
      outputEl.innerText = "Please enter positive angles value";
    } else {
      if (sumOfAngles === 180) {
        outputEl.innerText = "Yayy! these angles can make a triangle";
      } else {
        outputEl.innerText = "Oops! these angles cannot make a triangle";
      }
    }
  } else {
    outputEl.innerText = "Please enter valid angles value";
  }
}

checkBtn.addEventListener("click", checkIsTriangle);
