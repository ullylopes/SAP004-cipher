import cipher from './cipher.js';

let cipherButton = document.querySelector("input#cipher");
let decipherButton = document.querySelector("input#decipher");


function printCipher() {
    let message = document.querySelector("textarea#msg").value.toUpperCase();
    let offset = document.querySelector("input#offset").value;
    if (message === "" || offset === "") {
        alert("Preencha o campo da mensagem e o valor do deslocamento!");
    } else {
        document.querySelector("div#res").innerHTML = cipher.encode(offset, message);
    }
}
function printDecipher() {
    let message = document.querySelector("textarea#msg").value.toUpperCase();
    let offset = document.querySelector("input#offset").value;
    if (message === "" || offset === "") {

        alert("Preencha o campo da mensagem e o valor do deslocamento!");
    } else {
        document.querySelector("div#res").innerHTML = cipher.decode(offset, message);

    }
}

cipherButton.addEventListener("click", printCipher);
decipherButton.addEventListener("click", printDecipher);


console.log(cipher);