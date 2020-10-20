const input = document.querySelector ("#text");
const button = document.querySelector ("#submit");
const form = document.querySelector ("form");
input.addEventListener ("input", printInput);
function printInput() {
  console.log(input.value);
}
button.addEventListener ("click", handleClick);
function handleClick() { 
  alert ("Спасибо за нажатие на нашу замечательную кнопку. Значение вашего поля — <значение поля>");
}
form.addEventListener ("submit",submitForm);
function submitForm() {
   event.preventDefault();
}