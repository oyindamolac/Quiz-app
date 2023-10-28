






const musicQuestions = [
    {
        question: "What is my favourite music?",
        options: ["afobeats", "fuji", "RnB", "gospel"],
        correctAnswer: "fuji"
    },
    {
        question: "Which music  is least lisitened to?",
        options: ["afobeats", "fuji", "RnB", "gospel"],
        correctAnswer: "RnB"
    },
    {
        question: "Which of the music is most listen to ?",
        options: ["afobaats", "fuji", "RnB", "gospel"],
        correctAnswer: "fuji"
    },
    
];

const quizContainer = document.getElementById('quiz');
const submitButtons = document.getElementById('submit');
const resultsContainer = document.getElementById('results');

let curentquestionIndex  = 0;
let score = 0;

function startquiz (){
    curentQuestions = 0;
    score = 0;
    submitButton.innerHTML = "SUBMIT";
    showQuestions();
}

function showQuestion(){
    resetState()
    let currentQuestion = questions[curentQuestionIndex];
    let questionNo =  curentQuestionIndex + 1;
    quetionElement.innerHTML = questionNo + "." + currentQuestion.
    question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML= answer.text;
        button.classList.add("btn");
        answerButtons.appendchild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventlistener("click",selectanswer);
    })
}


function resetState(){
    submitButton.style.display = "none";
    while(answerButtons.removeChild){
        answerButtons.removechild(answerButtons,firstchild);


    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score ++
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.form (answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classlist.add("correct");
        }
        button.disabled = true;
    });
    submitButtons.style.display = "block";
}

function handlesubmitButton(){
    curentQuestionIndex++;
    if(currentQuestionIndex < questions.lenght){
        showQuestion();
    }
}
submitButton.addEventlistener("click", ()=>{
    if(curentQuestionIndex < questions.lenght){
        handlesubmitButton();
    }else{
        startquiz();
    }
}
)

startquiz();





 
























