
// Quiz questions
const quizData = [
  {
    question: "What is 6 + 4 = ",
    a: "10",
    b: "4",
    c: "5",
    d: "2",
    answer: "a",
  },
  {
    question: "Which of the following is true?",
    a: "5 + 3 = 2",
    b: "12 + 4 = 16",
    c: "3 + 3 = 9",
    d: "23 + 1 = 22",
    answer: "b",
  },
  {
    question: "What should be added to 4 to make it 7??",
    a: "3",
    b: "6",
    c: "5",
    d: "7",
    answer: "a",
  },
  {
    question: "Which of the following is false?",
    a: "20 + 2 = 22",
    b: "19 + 1 = 20",
    c: "5 + 0 = 6",
    d: "4 + 12 = 16",
    answer: "c",
  },
  {
    question: "What is the correct answer of 15 + 3",
    a: "12",
    b: "18",
    c: "33",
    d: "23",
    answer: "b",
  },
];

var questionNumber = 0;
var score = 0;

// For displaying questions
function loadQuestion() {
  $(".answer").prop("checked", false);
  var currentQuestion = quizData[questionNumber];

  $(".question").html(currentQuestion.question);
  $("#optionA").html(currentQuestion.a);
  $("#optionB").html(currentQuestion.b);
  $("#optionC").html(currentQuestion.c);
  $("#optionD").html(currentQuestion.d);
}

// Quiz start button click
$(".quiz_start_button").click(function () {
  $(".quiz_start_button").hide();
  $(".next_question_button").show();
  $(".quiz_content").show();
  $(".start_again").hide();
  loadQuestion();
});

// Next question button click
$(".next_question_button").click(function (e) {
  e.preventDefault();
  var correctAnswer = $('input[name="answer"]:checked').val();
  if (correctAnswer == quizData[questionNumber].answer) {
    score++;
  }
  questionNumber++;
  if (questionNumber < quizData.length) {
    loadQuestion();
  } else {
    $(".quiz_container").hide();
    $(".score").show();
    $(".score").html(
      "<h1> Your score is:  " + score + " / " + questionNumber + "</h1>"
    );
    $(".score").addClass("score_text");
    $(".start_again").show();
  }
});

// Start quiz again button click
$(".start_again").click(function (e) {
  e.preventDefault();
  $(".score").hide();
  location.reload();
});


