function sortArray() {
  let num1 = Number(document.getElementById("num1").value);
  let num2 = Number(document.getElementById("num2").value);
  let num3 = Number(document.getElementById("num3").value);
  let num4 = Number(document.getElementById("num4").value);
  let num5 = Number(document.getElementById("num5").value);

  let arr = [num1, num2, num3, num4, num5];

  let descending = [...arr].sort(function(a, b) { return b - a; });
  let ascending = [...arr].sort(function(a, b) { return a - b; });

  let output = `
    <p>Original Array: ${arr.join(", ")}</p>
    <p>Descending Order: ${descending.join(", ")}</p>
    <p>Ascending Order: ${ascending.join(", ")}</p>
  `;

  document.getElementById("result").innerHTML = output;
}
