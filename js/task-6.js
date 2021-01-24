const inputRef = document.querySelector('#validation-input');
const inputLength = inputRef.getAttribute('data-length');

inputRef.addEventListener('blur', () => {
    inputRef.classList.add('invalid');
    if (inputRef.value.length == inputLength) {
        inputRef.classList.replace('invalid', 'valid');
    }
})