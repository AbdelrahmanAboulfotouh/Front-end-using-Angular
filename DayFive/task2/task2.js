function capitalizeWords() {
      var input = document.getElementById("textInput").value;

      var words = input.toLowerCase().split(" ");
      
      for (var i = 0; i < words.length; i++) {
        if (words[i].length > 0) {
          words[i] = words[i][0].toUpperCase() + words[i].substr(1);
        }
      }

      var result = words.join(" ");
      document.getElementById("textOutput").value = result;
    }