// need victory song
// need wrong answer song
// audio array
// need to set time limit for game and time limit for new question to appear
// 

// set answer options to an array and then set the write anser on an array
// questions = ""
// answer = [array of answers]
// answer = string number of what is the answer


// var startScreen;
// var counter = 30;
// var questionArray = ["What is the capital of Australia?", "What is the capital of Liberia?", "What is the capital of Taiwan?", "What is the capital of Japan?", "What is the capital of China?", "What is the capital of Turkey?", "What is the capital of Colombia?", "What is the capital of India?"];
// var answerArray = [["Canberra", "Melbourne", "Sydney", "Darwin"], ["Arthington","Monrovia","Tuzon","Marshall"], ["Tainan City", "Taichung", "Taipei", "Hsinchu"], ["Kyoto","Hiroshima","Tokyo","Osaka"], ["Hong Kong", "Macau", "Shanghai", "Beijing"], ["Ankara","Istanbul","Antalya","Bursa"], ["Medellin", "Bogota", "Cartagena", "Cali"], ["Mumbai","Hyderabad","Bangalore","New Delhi"]];
// var imageArray = ["<img class='center-block img-right' src='img/australia.png'>", "<img class='center-block img-right' src='img/liberia.png'>", "<img class='center-block img-right' src='img/taiwan.png'>", "<img class='center-block img-right' src='img/japan.png'>", "<img class='center-block img-right' src='img/china.png'>", "<img class='center-block img-right' src='img/turkey.png'>", "<img class='center-block img-right' src='img/colombia.png'>", "<img class='center-block img-right' src='img/india.png'>"];
// var correctAnswers = ["A. Canberra", "B. Monrovia", "C. Taipei", "C. Tokyo", "D. Beijing", "A. Ankara", "B. Bogota", "D. New Delhi"];

// var clickSound = new Audio("sound/button-click.mp3");

var rightAnswers = 0;
var wrongAnswers = 0;
var unanswered = 0;
var questionNumber = 0;
var correctOption;
var timer;
var options;
var questions;

function gameStart () {
    // need to set and show timer
    console.log("game start?");
    
    
    
    generateQuestions();
    console.log("did dis")
    // need to have questions load
    //
}


var questionArray = ["Who lived in the pit for a good amount of time?", "Ann's original profession was: ", "What state is Pawnee located in?", "What was the first company that Tom helped create?", "What is the name of Pawnee's beloved mini horse?", "What is Jerry's real name?", "How old was Ben when the Ice Town incident occured", "Which character was only supposed to be in Season 1?", "What board game did Ben create?", "What is Donna and Tom's signature catchphrase?"];

var answerArray = []
        "Question1": {
            Question: 
            Option: ["Ann Perkins", "Ron Swanson", "Andy Dwyer",  "Jerry"],
            Answer: 0,
            image: "assets/images/andy.gif"
        },

        "Question2": {
            Question: 
            Option: ["Public relations", "Nursing", "Teacher", "Waitress"],
            Right: 1,
            image: "assets/images/ann.gif"
        },

        "Question3": {
            Question: 
            Option: ["Utah", "Missouri", "Montana", "Indiana"],
            Right: 3,
            image: "assets/images/pawnee-indiana.gif"
        },

        "Question4": {
            Question: 
            Option: ["Entertainment 720", "Tom's Bistro", "Snake Hole Lounge", "Rent-A-Swag"],
            Right: 0,
            image: "assets/images/tom.gif"
        },

        "Question5": {
            Question: 
            Option1: ["Li'l Agnes", "Li'l Sebastian", "Li'l Tom", "Li'l Fred"],
            Right: 1,
            image: "assets/images/sebastian.gif"
        },

        "Question6": {
            Question: 
            Option: ["Terry", "Barry", "Garry", "Larry"],
            Answer: 2,
            image: "assets/images/garry.gif"
        },

        "Question7": {
            Question: 
            Option: ["24", "16", "21", "18"],
            Right: 3,
            image: "assets/images/ben.gif"
        },

        "Question8": {
            Question: 
            Option: ["Andy Dwyer", "Tom Haverford", "April Ludgate", "Ron Swanson"],
            Right: 0,
            image: "assets/images/andy-crying.gif"
        },

        "Question9": {
            Question: 
            Option: ["The Iron Throne", "You're an Accountant Harry Potter", "The Cones of Dunshire", "Count Chocula versus Frankenberry"],
            Right: 2,
            image: "assets/images/cones.gif"
        },
        
        "Question10": {
            Question: ,
            Option: ["It's Wednesday my dudes", "All black everythang", "What happens in Pawnee ends up on social media", "Treat yo self"],
            Right: 3,
            image: "assets/images/treat-yo-self.gif"
        }
    ];

// function createQuestion() {
//     var questionDiv = $("<div class='questions' data-name>" + key + "</div>");
//     var question = $("<div class='question'>" + questions.Question + "</div>")
//     var option = $("<div class='option'>" + questions.Option[0] + "</div>") +
//     $("<div class='option'>" + questions.Option[1] + "</div>") +
//     $("<div class='option'>" + questions.Option[2] + "</div>") +
//     $("<div class='option'>" + questions.Option[3] + "</div>");
//     questionDiv.append(question, option);
//     return questionDiv;
// }

function generateQuestions() {
    timer = $("<div class='timer-word'>Time Remaining: <span class='timer'>20</span></div>");
    questions = $("<div class='question'>" + questionArray.Question[questionNumber] + "</div>");
    options = $("<div class='option'>" + questionArray.Option[questionNumber][0] + "</div>") +
    $("<div class='option'>" + questionArray.Option[questionNumber][1] + "</div>") +
    $("<div class='option'>" + questionArray.Option[questionNumber][2] + "</div>") +
    $("<div class='option'>" + questionArray.Option[questionNumber][3] + "</div>");
    $("#questionDiv").append(timer, questions, options);
}


gameStart();

// figure out a theme (parks and rec trivia? game of thrones trivia? arrested development? marvel studios trivia?)
// need to make arrays of questions with right and wrong answers
// link a gif to them
// show a timer
// make it tell the right answer
// display gif
// loading screen for 3-5 seconds next question
// make it show something when time out
// game over
// put a message
// right wrong unanswered
// play again - does not reload page just resets