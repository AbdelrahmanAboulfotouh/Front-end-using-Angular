function fizzBuzz(number) {
  if (number % 3 === 0 && number % 5 === 0) {
    return "fizz buzz";
  } else if (number % 3 === 0) {
    return "fizz";
  } else if (number % 5 === 0) {
    return "buzz";
  } else {
    return "none";
  }
}

function checkFizzBuzz() {
  let num = document.getElementById("num").value;

  num = Number(num);

  if (isNaN(num)) {
    document.getElementById("result").innerText = "Please enter a valid number!";
    return;
  }

  let result = fizzBuzz(num);
  document.getElementById("result").innerText = "Result: " + result;
}
