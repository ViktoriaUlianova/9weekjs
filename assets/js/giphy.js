function showGif() {

    let gif = document.getElementById("name").value;
    document.getElementById("gif").innerHTML = "";

    fetch("https://api.giphy.com/v1/gifs/search?api_key=MV1cH2bhtw5dqmDhkE5wMjsw3XTMJQJG&q=" + gif + "&limit=5&offset=0&rating=g&lang=en")
        .then(Response => Response.json())
        .then(giphy => {

            console.log(giphy)
            for (let i = 0; i < 5; i++) {
                document.getElementById("gif").innerHTML += `<img src="${giphy.data[i].images.original.url}" alt="">`;

            }

        })
}