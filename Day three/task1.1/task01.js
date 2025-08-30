let message = prompt("Enter a message:");

let container = document.getElementById("output");

for (let i = 1; i <= 6; i++) {
  container.innerHTML += `<h${i}>${message}</h${i}>`;
}
