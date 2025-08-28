function findLetterPositions() {
  let sentence = document.getElementById("stringInput").value;
  let letter = document.getElementById("letterInput").value;
  let positions = [];

  if (letter.length !== 1) {
    document.getElementById("result").value = "Please enter ONE letter!";
    return;
  }

  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i].toLowerCase() === letter.toLowerCase()) {
      positions.push(i); 
    }
  }

  if (positions.length > 0) {
    document.getElementById("result").value = "[" + positions.join(", ") + "]";
  } else {
    document.getElementById("result").value = "Letter not found";
  }
}
