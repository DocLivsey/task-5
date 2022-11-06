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
function createNewElement() {
  let smthng = document.getElementById("smthng");
  let verify = document.getElementById("new-div");
  let testButton = document.getElementById("test");
  testButton.style.display = "none";
  let new_div = document.createElement("div");
  let img_element = document.createElement("img");
  new_div.id = "new-div";
  new_div.style.margin = "1%";
  img_element.src = "https://itcrumbs.ru/wp-content/uploads/2022/08/Doktor-Livsi-iz-Ostrova-sokrovishh-1.jpg";
  img_element.style.width = "40%";
  img_element.style.borderRadius = "8px";
  smthng.appendChild(new_div);
  new_div.appendChild(img_element);
}
window.addEventListener('DOMContentLoaded', function (event) {
  console.log("DOM fully loaded and parsed");

  let calcDiv = document.getElementById("calc-div");
  calcDiv.style.display = "none";
  let examButton = document.getElementById("examButton");
  examButton.addEventListener("click", add_new_div);
  let resultButton = document.getElementById("resultButton");
  resultButton.addEventListener("click", multiplicOfNum);
  let testButton = document.getElementById("test");
  testButton.addEventListener("click", createNewElement);
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