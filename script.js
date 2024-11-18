let id = (id) => document.getElementById(id);
let query = (q) => document.querySelectorAll(q);
let quiz = id('quiz');
let question = id('question');
let a = id('id_a');
let b = id('id_b');
let c = id('id_c');
let d = id('id_d');
let btn = id('btn');
let option = query('.option');

let quizApp = [
    {
        question: 'HTML Stand for?',
        a: 'Hyper Text Markup Language',
        b: 'Hyper Text Machine Language',
        c: 'Hyper Text Machine Log',
        d: 'Hyper Transfer Machine Language',
        correct: 'a'
    },
    {
        question: 'Which language runs in the browser?',
        a: 'TypeScript',
        b: 'Ruby',
        c: 'JavaScript',
        d: 'PHP',
        correct: 'c'
    },
    {
        question: 'Python is a?',
        a: 'Scripting Language',
        b: 'General Purpose Language',
        c: 'Option a only',
        d: 'Option a and b',
        correct: 'd'
    },
];


let clear = () => {
    for (let i = 0; i < option.length; i++) {
        option[i].checked = false;
        
    }
};

let checked = () => {
    let check
    for (let i = 0; i < option.length; i++) {
        if (option[i].checked) {
            check = option[i].id;
        }
    }
    return check;
};


let score = 0;
let initialstart = 0;

let loadQuiz = () => {
clear();
let currentQuiz = quizApp[initialstart];
question.innerText = currentQuiz.question;
a.innerText = currentQuiz.a;
b.innerText = currentQuiz.b;
c.innerText = currentQuiz.c;
d.innerText = currentQuiz.d;
};

loadQuiz();


btn.addEventListener('click',(e) => {
let ch = checked();
if(ch)
{
    if(ch === quizApp[initialstart].correct)
    {
        score = score + 10;
    }
    initialstart++;
    if(initialstart < quizApp.length)
    {
        loadQuiz();
    }
    else {
        quiz.innerHTML = `
        <h2>Your score is ${score}</h2>
        <button onclick="location.reload()">Reload</button>
        `;
        }
        }
        else{
        alert('Please select an option');
        }
        });
