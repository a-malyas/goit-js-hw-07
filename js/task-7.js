const inputRef = document.getElementById("font-size-control");
const spanRef = document.getElementById("text");
inputRef.addEventListener("input", handleInput);
function handleInput (event) {
  spanRef.style.fontSize = event.currentTarget.value + "px";
};