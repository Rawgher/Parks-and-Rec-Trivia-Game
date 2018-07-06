// need victory song
// need wrong answer song
// audio array
// need to set time limit for game and time limit for new question to appear
// 

// set answer options to an array and then set the write anser on an array
// questions = ""
// answer = [array of answers]
// answer = string number of what is the answer


var rightAnswers = 0;
var wrongAnswers = 0;
var questionNumber = 0;

var questions;

function gameStart () {
    // need to set and show timer
    console.log("game start?");
    questions = resetQuestions();
    
    
    
    displayQuestion();
    console.log("did dis")
    // need to have questions load
    //
}


function resetQuestions () {
    return {
        "Question1": {
            Question: "Who lived in the pit for a good amount of time?",
            Option: ["Ann Perkins", "Ron Swanson", "Andy Dwyer",  "Jerry"],
            Answer: 0,
            image: "assets/images/andy.gif"
        },

        "Question2": {
            Question: "Ann's original profession was: ",
            Option: ["Public relations", "Nursing", "Teacher", "Waitress"],
            Right: 1,
            image: "assets/images/ann.gif"
        },

        "Question3": {
            Question: "What state is Pawnee located in?",
            Option: ["Utah", "Missouri", "Montana", "Indiana"],
            Right: 3,
            image: "assets/images/pawnee-indiana.gif"
        },

        "Question4": {
            Question: "What was the first company that Tom helped create?",
            Option: ["Entertainment 720", "Tom's Bistro", "Snake Hole Lounge", "Rent-A-Swag"],
            Right: 0,
            image: "assets/images/tom.gif"
        },

        "Question5": {
            Question: "What is the name of Pawnee's beloved mini horse?",
            Option1: ["Li'l Agnes", "Li'l Sebastian", "Li'l Tom", "Li'l Fred"],
            Right: 1,
            image: "assets/images/sebastian.gif"
        },

        "Question6": {
            Question: "What is Jerry's real name?",
            Option: ["Terry", "Barry", "Garry", "Larry"],
            Answer: 2,
            image: "assets/images/garry.gif"
        },

        "Question7": {
            Question: "How old was Ben when the Ice Town incident occured",
            Option: ["24", "16", "21", "18"],
            Right: 3,
            image: "assets/images/ben.gif"
        },

        "Question8": {
            Question: "Which character was only supposed to be in Season 1?",
            Option: ["Andy Dwyer", "Tom Haverford", "April Ludgate", "Ron Swanson"],
            Right: 0,
            image: "assets/images/andy-crying.gif"
        },

        "Question9": {
            Question: "What board game did Ben create?",
            Option: ["The Iron Throne", "You're an Accountant Harry Potter", "The Cones of Dunshire", "Count Chocula versus Frankenberry"],
            Right: 2,
            image: "assets/images/cones.gif"
        },
        
        "Question10": {
            Question: "What is Donna and Tom's signature catchphrase?",
            Option: ["It's Wednesday my dudes", "All black everythang", "What happens in Pawnee ends up on social media", "Treat yo self"],
            Right: 3,
            image: "assets/images/treat-yo-self.gif"
        }
    }
}

function createQuestion() {
    var questionDiv = $("<div class='questions' data-name>" + key + "</div>");
    var question = $("<div class='question'>" + questions.Question + "</div>")
    var option = $("<div class='option'>" + questions.Option[0] + "</div>") +
    $("<div class='option'>" + questions.Option[1] + "</div>") +
    $("<div class='option'>" + questions.Option[2] + "</div>") +
    $("<div class='option'>" + questions.Option[3] + "</div>");
    questionDiv.append(question, option);
    return questionDiv;


}

function displayQuestion () {
    console.log("is display question happening");
    var keys = Object.keys(questions);
    console.log('this is where the key starts');
    for (var i = 0; i < keys.length; i++) {
        console.log("first line of for loop");
        var questionsKeys = keys[i];
        console.log("second line of for loop");
        var question = questions[questionsKeys];
        console.log("third line of for loop");
        var questionDiv = createQuestion(question, questionsKeys);
        console.log("last line of for loop");
        $("#questionDiv").append(questionDiv);
        console.log("appending?")
    }
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