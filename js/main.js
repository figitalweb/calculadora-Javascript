let buttons = document.querySelectorAll("input[type='button']"); //Obtenemos todos los botones
let numberDisplay = ''; //Almacenar los valores del display

//Muestra los valores en display
function displayNumber(number) {
    document.getElementById('display').value = numberDisplay + number;
    numberDisplay = document.getElementById('display').value;
    console.log("displayNumber -> numberDisplay", numberDisplay)
}

//Sumar los valores 
//TODO Arreglar funcion suma
function sumNumbers(number) {
    let sumResult = parseInt(numberDisplay) + number;
    document.getElementById('display').value += sumResult;
    console.log("sumNumbers -> sumResult", sumResult)
    numberDisplay = '';
    document.getElementById('display').value = '';

}

//Asignamos un evento clic a todos los botones
for (let i = 0; i < buttons.length; i++) {

    //Verificamos que no sean signos de operaciones
    if (buttons[i].value != '+' &&
        buttons[i].value != '-' &&
        buttons[i].value != '/' &&
        buttons[i].value != '*' && buttons[i].value != '=') {
        
        buttons[i].addEventListener("click", function (e) {
            e.preventDefault();
            displayNumber(this.value);
    
        });
    } else if (buttons[i].value == '+') {
        buttons[i].addEventListener("click", function (e) {
            e.preventDefault();
            sumNumbers(numberDisplay);
        });
    }
}



