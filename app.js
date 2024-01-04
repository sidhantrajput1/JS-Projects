const passwordbox = document.getElementById('Password');
const length = 12;

let upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lowerCase = "abcdefighijklmnopqrstuvwxyz";
let number = "1234567890";
let symbol = "~!@#$%^&*()_+?><";

const alchars = upperCase + lowerCase + number + symbol;

const createPassword = () => {
    let Password = "";
    Password += upperCase[Math.floor(Math.random() * upperCase.length)];
    Password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    Password += number[Math.floor(Math.random() * number.length)];
    Password += symbol[Math.floor(Math.random() * symbol.length)];

    while(length > Password.length) {
        Password += alchars[Math.floor(Math.random() * alchars.length)];
    }
    passwordbox.value = Password;
}

const copyPassword = () => {
    passwordbox.select();
    document.execCommand("copy");
}