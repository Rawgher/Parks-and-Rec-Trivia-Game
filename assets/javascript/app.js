// need victory song
// need wrong answer song
// audio array
// need to set time limit for game and time limit for new question to appear
// 

// set answer options to an array and then set the write anser on an array
// questions = ""
// answer = [array of answers]
// answer = string number of what is the answer

var startGame;
var counter = 20;
var rightAnswers = 0;
var wrongAnswers = 0;
var unanswered = 0;
var questionNumber = 0;
var correctOption;
var gameTimer;
var gameText;
var questionArray = ["Who lived in the pit for a good amount of time?", "Ann's original profession was: ", "What state is Pawnee located in?", "What was the first company that Tom helped create?", "What is the name of Pawnee's beloved mini horse?", "What is Jerry's real name?", "How old was Ben when the Ice Town incident occured", "Which character was only supposed to be in Season 1?", "What board game did Ben create?", "What is Donna and Tom's signature catchphrase?"];

var answerArray = [["Ann Perkins", "Ron Swanson", "Andy Dwyer",  "Jerry"], ["Public relations", "Nursing", "Teacher", "Waitress"], ["Utah", "Missouri", "Montana", "Indiana"], ["Entertainment 720", "Tom's Bistro", "Snake Hole Lounge", "Rent-A-Swag"], ["Li'l Agnes", "Li'l Sebastian", "Li'l Tom", "Li'l Fred"], ["Terry", "Barry", "Garry", "Larry"], ["24", "16", "21", "18"], ["Andy Dwyer", "Tom Haverford", "April Ludgate", "Ron Swanson"], ["The Iron Throne", "You're an Accountant Harry Potter", "The Cones of Dunshire", "Count Chocula versus Frankenberry"], ["It's Wednesday my dudes", "All black everythang", "What happens in Pawnee ends up on social media", "Treat yo self"]];

var correctAnswers = ["C. Andy Dwyer", "B. Nursing", "D. Indiana", "A. Entertainment 720", "B. Li'l Sebastian", "C. Garry", "D. 18", "A. Andy Dwyer", "C. The Cones of Dunshire", "D. Treat yo self"];

var gifArray = ["assets/images/andy.gif", "assets/images/ann.gif", "assets/images/pawnee-indiana.gif", "assets/images/tom.gif", "assets/images/sebastian.gif", "assets/images/garry.gif", "assets/images/ben.gif", "assets/images/andy-crying.gif", "assets/images/cones.gif", "assets/images/treat-yo-self.gif"];

     
$(document).ready(function() {

    

function gameStart () {
    startGame ="<div class='flex items-center justify-center pa4'><a class='f6 grow no-underline br-pill ph3 pv2 mb2 dib white bg-dark-blue start' href='#' role='button'>Start the quiz</a></div>";
	$("body").html(startGame);
}

gameStart();

$("body").on("click", ".start", function() {
	// add sound array here
	generateQuestions();

	timer();
});

    $("body").on("click", ".answer", function(){

        selectedAnswer = $(this).text();
        if(selectedAnswer === correctAnswers[questionNumber]) {
    
            clearInterval(gameTimer);
            youDidGood();
        }
        else {

            clearInterval(gameTimer);
            youDidBad();
        }
    });

    $("body").on("click", ".reset", function(){
        
        resetGame();
    });

});

function timeOut() {
	unanswered++;
	gameText = "<div class='flex items-center justify-center pa2'>You're out of time! The right answer was: " + correctAnswers[questionNumber] + "</div><div class='flex items-center justify-center pa2'><img src='" + gifArray[questionNumber] + "'></div>";
	$("body").html(gameText);
    setTimeout(wait, 4000); 
}

function youDidGood() {
	rightAnswers++;
	gameText = "<div class='flex items-center justify-center pa2'>You got it! The answer is: " + correctAnswers[questionNumber] + "</div><div class= 'flex items-center justify-center pa2'><img src='" + gifArray[questionNumber] + "'></div>";
	$("body").html(gameText);
    setTimeout(wait, 4000); 
}

function youDidBad() {
    wrongAnswers++;
	gameText = "<div class='flex items-center justify-center pa2'>You're wrong! The answer is: "+ correctAnswers[questionNumber] + "</div><div class='flex items-center justify-center pa2'><img src='" + gifArray[questionNumber] + "'></div>";
	$("body").html(gameText);
    setTimeout(wait, 4000);
}

function generateQuestions() {
    gameText = $("<div class='timer-word flex items-center justify-center pa1'>Time Remaining: <span class='timer flex items-center justify-center pa1'>20</span></div><div class='question flex items-center justify-center pa1'>" + questionArray[questionNumber] + "</div><div class='answer flex items-center justify-center pa1'>A. " + answerArray[questionNumber][0] + 
    "</div><div class='answer flex items-center justify-center pa1'>B. " + answerArray[questionNumber][1] + 
    "</div><div class='answer flex items-center justify-center pa1'>C. " + answerArray[questionNumber][2] + 
    "</div><div class='answer flex items-center justify-center pa1'>D. " + answerArray[questionNumber][3] + "</div>");
    $("body").html(gameText);
}

function wait() {
	if (questionNumber < 9) {
	questionNumber++;
	generateQuestions();
	counter = 20;
	timer();
	}
	else {
		gameOver();
	}
}

function timer() {
	gameTimer = setInterval(twentySeconds, 1000);
	function twentySeconds() {
		if (counter === 0) {
			clearInterval(gameTimer);
			timeOut();
		}
		if (counter > 0) {
			counter--;
		}
		$(".timer").html(counter);
	}
}

function gameOver() {
	gameText = "<div class='text-center flex items-center justify-center pa2'>That's it! Let's see how you did!" + "</div>" + "<div class='rightAnswers flex items-center justify-center pa2'>Correct Answers: " + rightAnswers + "</div>" + "<div class='flex items-center justify-center pa2'>Wrong Answers: " + wrongAnswers + "</div>" + "<div class='flex items-center justify-center pa2'>Unanswered: " + unanswered + "</div>" + "<div class='text-center reset-button-container flex items-center justify-center pa2'><a class='f6 grow no-underline br-pill ph3 pv2 mb2 dib white bg-dark-blue reset' href='#' role='button'>Play again!</a></div>";
    $("body").html(gameText);
}

function resetGame() {
	questionNumber = 0;
	rightAnswers = 0;
	wrongAnswers = 0;
	unanswered = 0;
	counter = 20;
	generateQuestions();
    timer();

}

// need to fix div so things disappear after answered
// need reset to make everything disappear and then start over