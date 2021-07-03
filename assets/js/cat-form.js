class Cat {


    constructor(catName, userName, phoneNumber, breed, gender, comment) {
        this.catName = catName;
        this.userName = userName;
        this.phoneNumber = phoneNumber;
        this.breed = breed;
        this.gender = gender;
        this.comment = comment;
    }

}

let formCat = document.getElementById('form');

btn.onclick = function (e) {
    e.preventDefault();

    fetch("https://httpbin.org/post", {
            method: 'POST',
            body: new FormData(form)
        })
        .then(response => response.json())
        .then(user => {
            console.log(user);
        })
        .catch(error => console.log(error));
}