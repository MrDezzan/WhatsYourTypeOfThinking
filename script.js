const questionn = document.querySelector('#question');
const answerss = document.querySelector('#answers');
const resultt = document.querySelector('#result');
const descript = document.querySelector('#descr');
const btn = document.querySelector('.mode');
document.body.classList.toggle('dark');
btn.addEventListener('click', () => {
    document.body.classList.toggle('white');
    document.body.classList.toggle('dark');

    if (document.body.classList.contains('white')) {
        btn.textContent = 'Тёмная 🌙';
    } else {
        btn.textContent = 'Светлая ☀️';
    }
});


const quiz = [
    {
        text: "1. Перед сложной задачей ты…",
        answers: [
            { label: 'разбиваю на этапы', type: 'analytic'},
            { label: "сначала представляю идею", type: 'intuitive'},
            { label: "начинаю делать сразу", type: 'practice'},
            { label: "думаю, зачем это вообще", type: 'reflective'}
        ]
    },
    {
        text: "2. Тебе ближе:",
        answers: [
            { label: 'таблицы и схемы', type: 'analytic'},
            { label: "чек-листы", type: 'practice'},
            { label: "дневники и мысли", type: 'reflective'},
            { label: "метафоры и ассоциации", type: 'intuitive'}
        ]
    },
    {
        text: "В споре ты чаще…",
        answers: [
            { label: 'предлагаешь решение', type: 'practice'},
            { label: "приводишь аргументы", type: 'analytic'},
            { label: "анализируешь чувства", type: 'reflective'},
            { label: "ищешь необычный взгляд", type: 'intuitive'}
        ]
    },
    {
        text: "Новая среда, твоя реакция:",
        answers: [
            { label: 'экспериментирую', type: 'intuitive'},
            { label: "наблюдаю", type: 'reflective'},
            { label: "быстро адаптируюсь", type: 'practice'},
            { label: "изучаю правила", type: 'analytic'}
        ]
    },
    {
        text: "Что вызывает удовольствие:",
        answers: [
            { label: 'придумать что-то новое', type: 'intuitive'},
            { label: "закончить дело", type: 'practice'},
            { label: "глубокий разговор", type: 'reflective'},
            { label: "понять сложную систему", type: 'analytic'}
        ]
    },

];

let current = 0;

const scores = {
    analytic: 0,
    intuitive: 0,
    reflective: 0,
    practice:0
};

function showquestion() {
    const q=quiz[current];

    questionn.textContent = q.text;
    answerss.innerHTML = "";

    q.answers.forEach(ans => {
        const btn = document.createElement("button");
        btn.textContent = ans.label;

        btn.addEventListener("click", () => {
            scores[ans.type]++;
            current++;
            if(current < quiz.length){
                showquestion();
            } else {
                showresult();
            }
        });
        answerss.appendChild(btn);
    });
}

function showresult(){
    questionn.textContent = "Результат:";
    answerss.innerHTML = "";

    const maxType = Object.keys(scores).reduce((a, b) =>
        scores[a] > scores[b] ? a : b
    );

    if(maxType === "analytic"){
        resultt.textContent = "Ты аналитик 🔎";
        descript.textContent = `У тебя аналитический тип мышления. 
Тебе важно понимать структуру, логику и взаимосвязи.
Ты спокойно разбираешься в сложных системах и любишь,
когда всё работает предсказуемо и рационально.`;
    }
    else if(maxType === "intuitive"){ 
        resultt.textContent = "Ты интуит 🎨";
        descript.textContent = `У тебя интуитивный тип мышления.
Ты быстро видишь идеи и нестандартные решения,
часто опираешься на ощущение направления,
а не на строгие правила.`;
    }
    else if(maxType === "practice"){ 
        resultt.textContent = "Ты практик 🧱";
        descript.textContent = `У тебя практический тип мышления.
Тебе важно движение и результат.
Ты предпочитаешь действовать, тестировать и исправлять
по ходу, вместо долгих размышлений.`;
    }
    else if(maxType === "reflective"){
        resultt.textContent = "Ты рефлексирующий 🌊";
        descript.textContent = `У тебя рефлексирующий тип мышления.
Ты глубоко анализируешь опыт, эмоции и смысл происходящего.
Твоя сила — в наблюдении и внутреннем понимании процессов.`;
    }
    restartBtn.style.display = "inline-block";

}

function resetquiz(){
    current = 0;
    scores.analytic = 0;
    scores.intuitive = 0;
    scores.reflective = 0;
    scores.practice = 0;

    resultt.textContent = "";
    descript.textContent = "";
    restartBtn.classList.toggle('hidden');

    questionn.style.display = "block";
    answerss.style.display = "block";
    showquestion();
}
questionn.style.display='none';
answerss.style.display='none';
const beginBtn = document.querySelector(`.begin`);
beginBtn.addEventListener('click', () => {
    beginBtn.classList.toggle('hidden');
    restartBtn.classList.toggle('hidden');    

    resetquiz();
})
const restartBtn = document.querySelector(`.restart`);
restartBtn.classList.toggle('hidden');
restartBtn.addEventListener('click', () => {
    
    resetquiz();
})