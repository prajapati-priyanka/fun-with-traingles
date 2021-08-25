var quizForm = document.querySelector('#quiz-form')
var submitBtn = document.querySelector('#submit-btn');
var outputEl = document.querySelector('#output');

var correctAnswers = ["yes", "no", "yes", "yes", "yes", "Isosceles", "30°", "Both", "5cm", "Scalene"];

function calculateScore(){
   var score =0;
   var index =0;
   var formResults = new FormData(quizForm);
   for(let value of formResults.values()){
   
            if(value === correctAnswers[index] && value !== ''){

                score= score+1;
                
            }
            index= index+1;
}
outputEl.innerText = "Your Score: " + score;

}






submitBtn.addEventListener('click', calculateScore)