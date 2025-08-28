function checkFizzBuzz() {
  let num = document.getElementById("numberInput").value;

  num = Number(num);

  if (isNaN(num)) {
    document.getElementById("result").value = "Please enter a valid number!";
    return;
  }

  let output = "";
  if (num % 3 === 0 && num % 5 === 0) {
    output = "fizz buzz";
  } else if (num % 3 === 0) {
    output = "fizz";
  } else if (num % 5 === 0) {
    output = "buzz";
  } else {
    output = "none";
  }

  document.getElementById("result").value = output;
}
