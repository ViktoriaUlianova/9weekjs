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
    let userForm = {
        name: document.getElementById("username").value,
        phone: document.getElementById("phonenumber").value,
        age: document.getElementById("age").value,
        country: document.getElementById("country").value,
        email: document.getElementById("mail").value,
        password: document.getElementById("userpass").value,
    }

    console.log(userForm);

    let inputs = document.querySelectorAll("input");

    for (let input of inputs) {
        checkValidity(input);
    }

    document.getElementById("errorsInfo").innerHTML = errors.join(".<br>");


    fetch('https://httpbin.org/post', {
            method: 'POST',
            body: JSON.stringify(userForm),
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            }
        })
        .then(response => response.json())
        .then(user => {
            console.log(user);
        })
        .catch(error => console.log(error));
}

// errors = [];