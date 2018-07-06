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

var questions, options, right

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
            Option1: "Ann Perkins",
            Option2: "Ron Swanson",
            Option3: "Andy Dwyer",
            Option4: "Jerry",
            Answer: "Andy Dwyer",
            image: "assets/images/andy.gif"
        },

        "Question2": {
            Question: "Ann's original profession was: ",
            Option1: "Public relations",
            Option2: "Nursing",
            Option3: "Teacher",
            Option4: "Waitress",
            Right: "Nursing",
            image: "assets/images/ann.gif"
        },

        "Question3": {
            Question: "What state is Pawnee located in?",
            Option1: "Utah",
            Option2: "Missouri",
            Option3: "Montana",
            Option4: "Indiana",
            Right: "Indiana",
            image: "assets/images/pawnee-indiana.gif"
        },

        "Question4": {
            Question: "What was the first company that Tom helped create?",
            Option1: "Entertainment 720",
            Option2: "Tom's Bistro",
            Option3: "Snake Hole Lounge",
            Option4: "Rent-A-Swag",
            Right: "Entertainment 720",
            image: "assets/images/tom.gif"
        },

        "Question5": {
            Question: "What is the name of Pawnee's beloved mini horse?",
            Option1: "Li'l Agnes",
            Option2: "Li'l Sebastian",
            Option3: "Li'l Tom",
            Option4: "Li'l Fred",
            Right: "Li'l Sebastian",
            image: "assets/images/sebastian.gif"
        },

        "Question6": {
            Question: "What is Jerry's real name?",
            Option1: "Terry",
            Option2: "Barry",
            Option3: "Garry",
            Option4: "Larry",
            Answer: "Garry",
            image: "assets/images/garry.gif"
        },

        "Question7": {
            Question: "How old was Ben when the Ice Town incident occured",
            Option1: "24",
            Option2: "16",
            Option3: "21",
            Option4: "18",
            Right: "18",
            image: "assets/images/ben.gif"
        },

        "Question8": {
            Question: "Which character was only supposed to be in Season 1?",
            Option1: "Andy Dwyer",
            Option2: "Tom Haverford",
            Option3: "April Ludgate",
            Option4: "Ron Swanson",
            Right: "Andy Dwyer",
            image: "assets/images/andy-crying.gif"
        },

        "Question9": {
            Question: "What board game did Ben create?",
            Option1:"The Iron Throne",
            Option2:"You're an Accountant Harry Potter",
            Option3:"The Cones of Dunshire",
            Option4:"Count Chocula versus Frankenberry",
            Right:"The Cones of Dunshire",
            image: "assets/images/cones.gif"
        },
        
        "Question10": {
            Question: "What is Donna and Tom's signature catchphrase?",
            Option1: "It's Wednesday my dudes",
            Option2: "All black everythang",
            Option3: "What happens in Pawnee ends up on social media",
            Option4: "Treat yo self",
            Right: "Treat yo self",
            image: "assets/images/treat-yo-self.gif"
        }
    }
}

function createQuestion (questions, key) {
    var questionDiv = $("<div class='questions' data-name" + key + ">");
    var questions = $("<div class='question'" + questions.Question + ">")
    var one = $("<div class='option'" + questions.Option1 + ">");
    var two = $("<div class='option'" + questions.Option2 + ">");
    var three = $("<div class='option'" + questions.Option3 + ">");
    var four = $("<div class='option'" + questions.Option4 + ">");
    questionDiv.append(questions, one, two, three, four);
    return questionDiv;
}

function displayQuestion () {
    var keys = Object.keys(questions);
    for (var i = 0; i < keys.length; i++) {
        var questionsKeys = keys[i];
        var questions = questions[questionsKeys];
        var questionDiv = createQuestion(questions, questionsKeys);
        $("#questionDiv").append(questionDiv);
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