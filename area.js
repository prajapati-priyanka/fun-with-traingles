var inputs= document.querySelectorAll('.side-input');
var areaBtn = document.querySelector('#area-btn');
var outputEl = document.querySelector("#output");

function calculateProductOfSides(b, h){
     var productOfSides = (b * h);
  return productOfSides;
}

function calculateAreaOfTriangle(){
   
  if(inputs[0].value && inputs[1].value){
      
  var productOfSides = calculateProductOfSides(Number(inputs[0].value), Number(inputs[1].value));
  var areaOfTriangle = 1/2 * (productOfSides);
  outputEl.innerText = "Area Of a Triangle is: " + areaOfTriangle;

  }else{
    outputEl.innerText = "Please enter valid details."
  }


}




areaBtn.addEventListener('click', calculateAreaOfTriangle);