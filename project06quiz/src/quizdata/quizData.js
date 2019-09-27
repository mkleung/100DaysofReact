const questions = [
  {
    id: "001",
    question: "Who chose Ottawa as the capital of Canada?",
    choices: [
      "The Fathers of Confederation",
      "Queen Victoria",
      "Queen Elizabeth I",
      "Queen Elizabeth II"
    ],
    answer: 1
  },
  {
    id: "002",
    question: "Which province in Canada is the smallest in land size?",
    choices: [
      "Nova Scotia.",
      "Prince Edward Island.",
      "Yukon Territory.",
      "Newfoundland and Labrador."
    ],
    answer: 1
  },
  {
    id: "003",
    question:
      "Who was the first leader of a responsible government in the Canadas in 1849?",
    choices: [
      "Sir John A. Macdonald.",
      "Robert Baldwin.",
      "Louis Riel.",
      "Sir Louis-Hippolyte La Fontaine."
    ],
    answer: 0
  },
  {
    id: "004",
    question: "What is the capital city of Ontario?",
    choices: ["Kingston", "Ottawa", "Toronto", "London"],
    answer: 2
  },
  {
    id: "005",
    question: "What is the largest Canadian province by land size?",
    choices: ["Alberta.", "British Columbia.", "Ontario.", "Quebec."],
    answer: 3
  }
];

var quizQuestions = questions.sort(() => 0.5 - Math.random());

let promiseData = new Promise((resolve, reject) => {
  resolve(quizQuestions);
});

export default promiseData;
