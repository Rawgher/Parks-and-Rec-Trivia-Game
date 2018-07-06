// need victory song
// need wrong answer song
// audio array
// need to set time limit for game and time limit for new question to appear
// 




var rightAnswers = 0;
var wrongAnswers = 0;



function gameStart () {
    // need to set and show timer
    // need to have questions load
    //
}


function resetQuestions () {
    return {
        "Question1": {
            Question: "Who lived in the pit for a good amount of time?",
            Wrong1: "Ann Perkins",
            Wrong2: "Ron Swanson",
            Right: "Andy Dwyer",
            Wrong3: "Jerry",
            image: "assets/images/andy.gif"
        },

        "Question2": {
            Question: "Ann's original profession was: "
            Wrong1: "Public relations",
            Right: "Nursing",
            Wrong2: "Teacher",
            Wrong3: "Waitress",
            image: "assets/images/ann.gif"
        },

        "Question3": {
            Question: "What state is Pawnee located in?"
            Wrong1: "Utah",
            Wrong2: "Missouri",
            Wrong3: "Montana",
            Right: "Indiana",
            image: "assets/images/pawnee-indiana.gif"
        },

        "Question4": {
            Question: "What was the first company that Tom helped create?"
            Right: "Entertainment 720",
            Wrong1: "Tom's Bistro",
            Wrong2: "Snake Hole Lounge",
            Wrong3: "Rent-A-Swag",
            image: "assets/images/tom.gif"
        },

        "Question5": {
            Question: "What is the name of Pawnee's beloved mini horse?"
            Wrong1: "Li'l Agnes",
            Right: "Li'l Sebastian",
            Wrong2: "Li'l Tom",
            Wrong3: "Li'l Fred",
            image: "assets/images/sebastian.gif"
        },

        "Question6": {
            Question: "What is Jerry's real name?"
            Wrong1: "Terry",
            Wrong2: "Barry",
            Right: "Garry",
            Wrong3: "Larry",
            image: "assets/images/garry.gif"
        },

        "Question7": {
            Question: "How old was Ben when the Ice Town incident occured"
            Wrong1: "24",
            Wrong2: "16",
            Wrong3: "21",
            Right: "18",
            image: "assets/images/ben.gif"
        },

        "Question8": {
            Question: "Which character was only supposed to be in Season 1?"
            Right: "Andy Dwyer",
            Wrong1: "Tom Haverford",
            Wrong2: "April Ludgate",
            Wrong3: "Ron Swanson",
            image: "assets/images/andy-crying.gif"
        },

        "Question9": {
            Question: "What board game did Ben create?"
            Wrong1:"The Iron Throne",
            Wrong2:"You're an Accountant Harry Potter",
            Right:"The Cones of Dunshire",
            Wrong3:"Count Chocula versus Frankenberry",
            image: "assets/images/cones.gif"
        },
        "Question10": {
            Question: "What is Donna and Tom's signature catchphrase?"
            Wrong1: "It's Wednesday my dudes",
            Wrong2: "All black everythang",
            Wrong3: "What happens in Pawnee ends up on social media",
            Right: "Treat yo self",
            image: "assets/images/treat-yo-self.gif"
        }
    }
}



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