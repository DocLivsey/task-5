function multiplicOfNum(){
    let f1 = document.getElementsByName("field1");
    let f2 = document.getElementsByName("field2");
    let r = document.getElementById("result");
    (f1[0].value >= 0 && f2[0].value >= 0) ? r.innerHTML = " Итого: " + f1[0].value * f2[0].value :
    r.innerHTML = ' Что-то непонятное';
    return false;
}
function add_new_div(){
    let flagExam = prompt('Перейти к проверке работы? да или нет?')
    if(flagExam == "yes" | flagExam == "da" | flagExam == "да" | flagExam == "Да"){
      let examButton = document.getElementById("examButton");
      examButton.style.display = "none";
      let calcDiv = document.getElementById("calc-div");
      calcDiv.style.display = "block";
    }
}
window.addEventListener('DOMContentLoaded', function (event) {
  console.log("DOM fully loaded and parsed");

  let calcDiv = document.getElementById("calc-div");
  calcDiv.style.display = "none";
  let examButton = document.getElementById("examButton");
  examButton.addEventListener("click", add_new_div);
  let resultButton = document.getElementById("resultButton");
  resultButton.addEventListener("click", multiplicOfNum);
});



function vova()
{
  let vova = prompt("Вова гей?");
  if (vova == 'да' | vova == 'da'){
    alert("вы правы")
  }
  else{
    alert("вы не правы, вова гей")
  }
  return false
}