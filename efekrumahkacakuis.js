function benar_no1() {
	document.getElementById("correct_answer").style.display ="inline";
	document.getElementById("incorrect_answer").style.display ="none";
	document.getElementById("soal2").style.display ="block";
	document.getElementById("respon").innerHTML ="";
	document.getElementById("1_b").disabled = true;


}

function salah_no1() {
	document.getElementById("incorrect_answer").style.display ="inline";
	document.getElementById("correct_answer").style.display ="none";
	document.getElementById("soal2").style.display ="none";
	document.getElementById("respon").innerHTML ="*pilih jawaban lain";
}


function benar_no2() {
	document.getElementById("correct_answer2").style.display ="inline";
	document.getElementById("incorrect_answer2").style.display ="none";
	document.getElementById("soal3").style.display ="block";
	document.getElementById("respon2").innerHTML ="";
	document.getElementById("2_a").disabled = true;
	document.getElementById("2_c").disabled = true;
	document.getElementById("2_d").disabled = true;


}

function salah_no2() {
	document.getElementById("incorrect_answer2").style.display ="inline";
	document.getElementById("correct_answer2").style.display ="none";
	document.getElementById("soal3").style.display ="none";
	document.getElementById("respon2").innerHTML ="*pilih jawaban lain";
}



function benar_no3() {
	document.getElementById("correct_answer3").style.display ="inline";
	document.getElementById("incorrect_answer3").style.display ="none";
	document.getElementById("soal4").style.display ="block";
	document.getElementById("respon3").innerHTML ="";
	document.getElementById("3_b").disabled = true;
	document.getElementById("3_c").disabled = true;
	document.getElementById("3_d").disabled = true;


}

function salah_no3() {
	document.getElementById("incorrect_answer3").style.display ="inline";
	document.getElementById("correct_answer3").style.display ="none";
	document.getElementById("soal4").style.display ="none";
	document.getElementById("respon3").innerHTML ="*pilih jawaban lain";
}

function benar_no4() {
	document.getElementById("correct_answer4").style.display ="inline";
	document.getElementById("incorrect_answer4").style.display ="none";
	document.getElementById("respon4").innerHTML ="";
	document.getElementById("4_b").disabled = true;
	document.getElementById("4_a").disabled = true;
	document.getElementById("4_d").disabled = true;
	document.getElementById("kesimpulan").style.display ="block";
	document.getElementById("rangkuman").style.display ="block";


}

function salah_no4() {
	document.getElementById("incorrect_answer4").style.display ="inline";
	document.getElementById("correct_answer4").style.display ="none";
	document.getElementById("respon4").innerHTML ="*pilih jawaban lain";
}


