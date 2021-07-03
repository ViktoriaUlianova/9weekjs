function addEvent() {
    let text = document.getElementById('message').value;
    alert(text);
}
debugger;
let sendButton = document.getElementById('send');

sendButton.addEventListener('click', addEvent)