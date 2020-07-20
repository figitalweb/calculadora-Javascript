let buttons = document.querySelectorAll("input[type='button']"); //Obtenemos todos los botones
let numberDisplay = ''; //Almacenar los valores del display

//Mostrar los valores en display
function displayNumber(number) {
    document.getElementById('display').value += number;
    numberDisplay += number;
    console.log("displayNumber -> numberDisplay", numberDisplay)
}

//Asignamos un evento clic a todos los botones
for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function (e) {
        e.preventDefault();
        displayNumber(this.value);

    });
}



