function reverseInput() {
  let inputBox = document.getElementById("inputBox");
  let input = inputBox.value;
  let reversedInput = input.split('').reverse().join('');
  document.getElementById("output").textContent = reversedInput;
}