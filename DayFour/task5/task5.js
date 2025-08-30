function checkPalindrome() {
  let str = prompt("Enter a string to check if it's a palindrome:");

  let caseSensitive = confirm("Do you want to consider case sensitivity?");

  if (!caseSensitive) {
    str = str.toLowerCase();
  }

  let reversed = str.split("").reverse().join("");

  if (str === reversed) {
    alert("Yes! It is a palindrome ✅");
  } else {
    alert("No! It is not a palindrome ❌");
  }
}

checkPalindrome();
