//have the questions written
//We will use an array for the questions

//Timer

//High score screen

const questionArea = document.getElementById("questionsArea");
const choicesArea = document.getElementById("choicesArea");

const questionH1 = document.getElementById("questionh1");

const button1 = document.getElementById("btn1");
const button2 = document.getElementById("btn2");
const button3 = document.getElementById("btn3");
const button4 = document.getElementById("btn4");

const questions = [
  {
    question: "what is 2 + 2?",
    choices: ["4", "6", "8", "9"],
    answer: "4",
  },
  {
    question: "what is 5 + 2?",
    choices: ["20", "53", "7", "19"],
    answer: "7",
  },
  {
    question: "what is 8 + 2?",
    choices: ["14", "61", "81", "10"],
    answer: "10",
  },
];

function question1() {
  questionH1.textContent = questions[0].question;

  button1.textContent = questions[0].choices[0];
  button2.textContent = questions[0].choices[1];
  button3.textContent = questions[0].choices[2];
  button4.textContent = questions[0].choices[3];
}

function question2() {
  questionH1.textContent = questions[1].question;

  button1.textContent = questions[1].choices[0];
  button2.textContent = questions[1].choices[1];
  button3.textContent = questions[1].choices[2];
  button4.textContent = questions[1].choices[3];
}

function question3() {
  questionH1.textContent = questions[2].question;

  button1.textContent = questions[2].choices[0];
  button2.textContent = questions[2].choices[1];
  button3.textContent = questions[2].choices[2];
  button4.textContent = questions[2].choices[3];
}

// function question4() {
//     questionH1.textContent = questions[0].question;

//     button1.textContent = questions[2].choices[0];
//     button2.textContent = questions[2].choices[1];
//     button3.textContent = questions[2].choices[2];
//     button4.textContent = questions[2].choices[3];
// }

function endScreen() {
    // create an area to save initials and scores
    questionH1.textContent = "You are finished! Save your Score."

    var inputEl = document.createElement('input');
    questionArea.append(inputEl);
}

function rightorwrong1(event) {
  if (event.target.textContent === questions[0].answer) {
    question2();
    console.log(event.tartget.textContent);
  } else if (event.target.textContent === questions[1].answer) {
    question3();
  } else if (event.target.textContent === questions[2].answer) {
    endScreen();
  }
}

button1.addEventListener("click", rightorwrong1);
button2.addEventListener("click", rightorwrong1);
button3.addEventListener("click", rightorwrong1);
button4.addEventListener("click", rightorwrong1);

question1();
