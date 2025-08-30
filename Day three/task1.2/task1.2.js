let n = prompt("How many numbers do you want to enter?");
n = Number(n);

if (isNaN(n) || n <= 0) {
  alert("Please enter a valid positive number for n!");
} else {
  let sum = 0;
  let count = 0;
  let numbers = [];

  while (true) {
    let value = prompt(`Enter number ${count + 1} of ${n}:`);

    if (isNaN(value) || value === "") {
      alert("Please enter a valid number!");
      continue;
    }

    value = Number(value);

    if (value === 0) {
      break;
    }

    numbers.push(value);

    sum += value;
    count++;

    if (sum > 100 || count === n) {
      break;
    }
  }

  alert(
    "Numbers entered: " + numbers.join(", ") +
    "\nTotal sum: " + sum
  );
}
