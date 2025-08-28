 function displayMessage() {
      let msg = document.getElementById("userMsg").value;

      let result = "";
      for (let i = 1; i <= 6; i++) {
        result += `<h${i}>${msg}</h${i}>`;
      }

      document.getElementById("output").innerHTML = result;
    }