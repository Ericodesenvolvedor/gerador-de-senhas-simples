const digitsPasswordDisplay = document.querySelector("label span");
const digitsPasswordInput = document.querySelector("input");
const submit = document.querySelector("form button");
const chars = 'abcdefghijklmnopkrstuvwxyzABCDEFGHIGKLMNOPKRSTUVWXYZ!*'
let lengthPassword = digitsPasswordInput.value;
let password = "";
let newPassword = "";

digitsPasswordDisplay.innerText = lengthPassword;

const changeDisplay = (event) => {
    lengthPassword = event.target.value
    digitsPasswordDisplay.innerText = lengthPassword;
    return lengthPassword;
}

const showPasswordDisplay = () => {
    const el = document.querySelector("main > div");
    const paragraph = el.querySelector("p");
    paragraph.innerText = password;
    el.classList.remove("hidden");    
    el.classList.add("flex", "justify-between");
}

const submitForm = (event) => {
    event.preventDefault();
    generatePassword();
    showPasswordDisplay();
    newPassword = password; 
    password = "";
}

const generatePassword = () => {
    
    for(let counter = 0; counter < lengthPassword; counter++) {
        const randomNumber = Math.floor(Math.random() * chars.length);
        password += chars.charAt(randomNumber);
    }
}

const copyPassword = (event) => {
    const el = event.target
    const isButton = el.localName === 'button';
    
    if(el.id === 'copy') {
        navigator.clipboard.writeText(newPassword);
        alert('Senha copiada! 😊')
    }

}

document.addEventListener('click', copyPassword);
submit.addEventListener('click', submitForm);
digitsPasswordInput.addEventListener('input', changeDisplay);