 var inputBox = document.getElementById("numInput");

    inputBox.addEventListener("keypress", function(event) {
      if (event.key === "Enter") {
        var value = parseInt(inputBox.value);
        
        document.getElementById("circle1").classList.remove("highlight");
        document.getElementById("circle2").classList.remove("highlight");
        document.getElementById("circle3").classList.remove("highlight");

        if (value >= 1 && value <= 3) {
          document.getElementById("circle" + value).classList.add("highlight");
          document.getElementById("message").innerText = "You entered: " + value;
        } else {
          document.getElementById("message").innerText = "❌ Try again (Enter 1, 2, or 3)";
        }
      }
    });