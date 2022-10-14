function add_new_div(){
    let flagExam = prompt('Перейти к проверке работы? да или нет?')
    if(flagExam == "yes" | flagExam == "da" | flagExam == "да" | flagExam == "Да"){
        const new_div = '<label class="out">Введите стоимость и количество заказа: <input type="text" name="field1">руб <input type="text" name="field2">шт <button onclick="return multiplicOfNum();">Вывести результат</button><label style="font-weight: bold;" id="result"></label></label>';
        let add_div = document.getElementById("input");
        add_div.innerHTML = new_div;
    }
}

function multiplicOfNum(){
    let f1 = document.getElementsByName("field1");
    let f2 = document.getElementsByName("field2");
    let r = document.getElementById("result");
    (f1[0].value >= 0 && f2[0].value >= 0) ? r.innerHTML = " Итого: " + f1[0].value * f2[0].value :
    r.innerHTML = ' А зачем отрицательные входные данные?';
    return false;
}