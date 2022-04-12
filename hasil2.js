let nameUser = sessionStorage.getItem("name")
let klsUser = sessionStorage.getItem("kls")
let correctAnswer = sessionStorage.getItem("correct")
let wrongAnswer = sessionStorage.getItem("wrong")
let questionLength = sessionStorage.getItem("questionLength")

let quizResults = {}
quizResults.results = []

let result = {}

let note
let score = (parseInt(correctAnswer) / parseInt(questionLength)) * 100
if(score >= 65) {
    note = "<font style='color:green;'><b>Tuntas</b></font>"
} else {
    note = "<font style='color:red;'><b>Belum Tuntas</b></font>"
}
score = score < 100 ? score.toFixed(2) : score

const firebaseConfig = {
    apiKey: "AIzaSyCsbsZGJr7zA_oVP4ZCm48Z5CtTuq1_x-c",
    authDomain: "yulia-pglobal.firebaseapp.com",
    projectId: "yulia-pglobal",
    storageBucket: "yulia-pglobal.appspot.com",
    messagingSenderId: "1004262270087",
    appId: "1:1004262270087:web:fc0cdd17392f77cf454422",
    measurementId: "G-B7WR4RDFRS"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

const d = new Date();
const data = {
    nama:nameUser,
    kelas:klsUser,  
    nilai:score,
    keterangan : note,
    waktu : `${d.getDate()}-${d.getMonth()+1}-${d.getFullYear()} ${d.getHours()}:${d.getMinutes()}`

}
var database = firebase.database();
database.ref(`kuis2`).push(data);

result.nameUser = nameUser
result.klsUser = klsUser
result.correctAnswer = correctAnswer
result.wrongAnswer = wrongAnswer
result.scoreUser = score
result.noteUser = note

if(localStorage && localStorage.getItem('quizMaster2')) {
    quizResults = JSON.parse(localStorage.getItem('quizMaster2'))

    if(result.correctAnswer != "" && result.wrongAnswer != "") {
        quizResults.results.push(result)
    }

    localStorage.setItem('quizMaster2', JSON.stringify(quizResults))
    clearResults()
} else {
    localStorage.setItem('quizMaster2', JSON.stringify(quizResults))
    if(result.correctAnswer != "" && result.wrongAnswer != "") {
        quizResults.results.push(result)
    }

    localStorage.setItem('quizMaster2', JSON.stringify(quizResults))
    clearResults()
}

function clearResults() {
    sessionStorage.setItem("name", "");
    sessionStorage.setItem("kls", "");
    sessionStorage.setItem("correct", "");
    sessionStorage.setItem("wrong", "");
    sessionStorage.setItem("score","");
    sessionStorage.setItem("note","");

}

function resultsHistory(testNumber, nameUser, klsUser, correctAnswer, wrongAnswer, scoreUser, noteUser) {
    let resultsContainer = document.querySelector(".resultsContainer")

    let tr = document.createElement('tr')
    let html = `
        <td>${testNumber}</td>
        <td>${nameUser}</td>
        <td>${klsUser}</td>
        <td>${correctAnswer}</td>
        <td>${wrongAnswer}</td>
        <td>${scoreUser}</td>
        <td>${noteUser}</td>
    `
    tr.innerHTML = html
    resultsContainer.appendChild(tr)
}

function newResults(numCorrect, numWrong, score, note) {

    let newScore = document.querySelector("#new-score")
    //let wrongCorrect = document.querySelector("#wrong-correct")
   

    newScore.innerHTML = `Nilai yang kamu peroleh<br/>${score}<hr>`
    //wrongCorrect.innerHTML =`Jawaban Benar : <b>${numCorrect}</b><br> Jawaban Salah : <b>${numWrong}</b><hr>`
   
}

document.addEventListener("DOMContentLoaded", function(){
    let quizMaster2 = quizResults["results"].length
    let testNumber = 1

    for(let i=0; i<quizMaster2; i++) {
        if(quizResults["results"][i].correctAnswer != "" && quizResults["results"][i].wrongAnswer != "") {
            resultsHistory(testNumber, quizResults["results"][i].nameUser, quizResults["results"][i].klsUser, quizResults["results"][i].correctAnswer, quizResults["results"][i].wrongAnswer, quizResults["results"][i].scoreUser, quizResults["results"][i].noteUser)
        }
        testNumber++
    }

    if(result.nameUser != ""){
        newResults(quizResults["results"][quizMaster2-1].correctAnswer, quizResults["results"][quizMaster2-1].wrongAnswer, quizResults["results"][quizMaster2-1].scoreUser)
    }

    let nextSection = document.querySelector("#nextsec")
    nextSection.addEventListener("click", function(){
        location.href = './upaya2.html'
        clearResults()
    })
})

