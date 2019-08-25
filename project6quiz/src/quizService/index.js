const qBank = [
    {
        question: "What is largest country in the world?",
        answers: ["Canada", "Russia", "USA", "China"],
        correct: "Russia",
        questionId: "00001"
    },
    {
        question: "What is richest country in the world?",
        answers: ["Canada", "Russia", "USA", "China"],
        correct: "USA",
        questionId: "00002"
    },
    {
        question: "What is coldest country in the world?",
        answers: ["Canada", "Russia", "USA", "China"],
        correct: "Canada",
        questionId: "00002"
    },
]



export default (n = 3) => Promise.resolve(qBank.sort(() => 0.5 - Math.random()).slice(0, n));