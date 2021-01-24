const inputRef = document.querySelector('#name-input');
const textRef = document.querySelector('#name-output');

inputRef.addEventListener('input', () => {
    if (!inputRef.value) {
        textRef.textContent = 'незнакомец';
    } else {
        textRef.textContent = inputRef.value;
    };    
});