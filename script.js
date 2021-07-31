const quizzData = [
    {
        question: "Who was the first in space ?", 
        a : "Yuri Gagarin" , 
        b: " Neil Amstrong" , 
        c:  " Thomas pesquet", 
        d :  "Buzz Aldrin" , 
        correct: "a"
    }, 
    {
        question: "Which of the following planet is the biggest?", 
        a: "Saturn", 
        b: " Earth", 
        c :"Mercury", 
        d: "Neptune", 
        correct: "a"
    }, 
     {
         question: "Who was the first black women to receive a PhD in physics?", 
         a:  "Katherine Johnson" , 
         b: "Margaret Collins"   , 
         c:  "Willie Hobbs Moore"  , 
         d:  "Jedidah Isler"  , 
         correct: "c"
     }, 
     {
         question: "Who was the first African to work for NASA", 
         a: "Arsene Tema Biwole", 
         b: "Ernest Simo", 
         c: "Cheik Modibo Diarra", 
         d: "Reine Ntone Johansen", 
         correct: " c"
     }, 
   
]

 let currentQuestion = 0; // represent the index of a question...
const questtionEl = document.getElementById("question"); 
const  aText = document.getElementById("aText"); 
const  bText = document.getElementById("bText"); 
const  cText = document.getElementById("cText"); 
const  dText = document.getElementById("dText"); 
const submitButton = document.getElementById("submit-button"); 
const mainContainer = document.getElementById("main-container"); 
const nextButton = document.getElementById("next-btn"); 
const sound = new Audio("E:\Saison 3 scoprpion\Nouveau dossier (6)\[ Torrent9.red ] Lefa - 3 du mat (2018) [320kbps]\1 - Lefa - Maux de tête.mp3", sameSite = 'None');

let answer = undefined; 
 
function setQuizz(){
    questtionEl.innerHTML = quizzData[currentQuestion].question; 
    aText.innerHTML = quizzData[currentQuestion].a; 
    bText.innerHTML = quizzData[currentQuestion].b; 
    cText.innerHTML = quizzData[currentQuestion].c; 
    dText.innerHTML = quizzData[currentQuestion].d; 
}
setQuizz(); 

function getUserChoice(){
    answerEls = document.querySelectorAll('.answer'); 
    let answer = undefined; 
    answerEls.forEach((answerEl) => {
        if(answerEl.checked){
            answer = answerEl.id ;
        }
        
    });
        return answer; 
    }
 submitButton.addEventListener('click', ()=>{
     const answer = getUserChoice() ;
     console.log(answer);
     if(answer == quizzData[currentQuestion].correct){
        mainContainer.style.backgroundColor = "green";
        sound.play(); 
        
        
        
     }
     else if (answer!== quizzData[currentQuestion].correct){
         mainContainer.style.backgroundColor = "red"; 
     }
 })

 nextButton.addEventListener('click', ()=>{
     mainContainer.style.backgroundColor = "white"; 
     currentQuestion++; 
     setQuizz(); 
 })