let str = prompt("Enter a string to check if it's a palindrome:");

let caseSensitive = confirm("Do you want to consider case sensitivity? (OK = Yes, Cancel = No)");

let originalStr = caseSensitive ? str : str.toLowerCase();

let reversedStr = originalStr.split("").reverse().join("");

if (originalStr === reversedStr) {
  alert("✅ The string \"" + str + "\" is a palindrome.");
} else {
  alert("❌ The string \"" + str + "\" is NOT a palindrome.");
}
