function calculate() {
  let num1 = Number(document.getElementById("num1").value);
  let num2 = Number(document.getElementById("num2").value);
  let num3 = Number(document.getElementById("num3").value);

  let arr = [num1, num2, num3];

  let sum = arr[0] + arr[1] + arr[2];
  let product = arr[0] * arr[1] * arr[2];
  let division = arr[0] / arr[1] / arr[2]; // sequential division

  let output = `
    <p>Addition 1: ${arr.join(" + ")} = ${sum}</p>
    <p>Multiplication 2: ${arr.join(" * ")} = ${product}</p>
    <p>Dividsion 3: ${arr.join(" / ")} = ${division}</p>
  `;

  document.getElementById("result").innerHTML = output;
}
