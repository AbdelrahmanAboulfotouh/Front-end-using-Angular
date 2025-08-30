function findLetterLocations(sentence, letter) {
  let positions = [];

  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] === letter) {
      positions.push(i + 1); 
    }
  }

  if (positions.length === 0) {
    return "Letter not found!";
  } else {
    return "Letter found at positions: " + positions.join(", ");
  }
}

function searchLetter() {
  let sentence = document.getElementById("sentence").value;
  let letter = document.getElementById("letter").value;

  if (letter.length !== 1) {
    document.getElementById("result").innerText = "Please enter exactly ONE letter!";
    return;
  }

  let result = findLetterLocations(sentence, letter);
  document.getElementById("result").innerText = result;
}
