
const spanRef = document.getElementById('value');
const decrRef = document.querySelector("[data-action='decrement']");
const incrRef = document.querySelector("[data-action='increment']");
let counterValue;

decrRef.addEventListener('click', () => {
    spanRef.textContent = Number(spanRef.textContent) -1;
    counterValue = spanRef.textContent;
});

incrRef.addEventListener('click', () => {
    spanRef.textContent = Number(spanRef.textContent) +1;
    counterValue = spanRef.textContent;
});

