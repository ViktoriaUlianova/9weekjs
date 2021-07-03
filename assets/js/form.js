let errors = [];

function checkValidity(input) {
    let validity = input.validity;
    if (validity.valueMissing) {
        errors.push("Поле " + input.placeholder + " незаполнено");
    }
    if (validity.patternMissmatch) {
        errors.push("Неверный формат заполнения");
    }
    if (validity.rangeOverflow) {
        let max = getAttributeValue(input, "max");
        errors.push("Максимальное значение не может быть больше чем " + max);
    }
    if (validity.rangeUnderflow) {
        let min = getAttributeValue(input, "min");
        errors.push("Минимальное значение не может быть больше чем " + min);
    }
    if (validity.tooLong) {
        let maxLenght = getAttributeValue(input, "maxlenght");
        errors.push("Превышено допустимое количество символов")
    }



}
postButton.onclick = function (event) {
    event.preventDefault();
    let user = {
        name: document.getElementById("username").value,
        phone: document.getElementById("phonenumber").value,
        gender: document.getElementsByName("name").value,
        age: document.getElementsById("age").value,
    }

    errors = [];
    let inputs = document.querySelectorAll("input");

    for (let input of inputs) {
        checkValidity(input);
    }

    document.getElementById("errorsInfo").innerHTML = errors.join(".<br>");

}