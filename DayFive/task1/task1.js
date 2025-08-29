  function findSecond() {
      var input = document.getElementById("numbers").value;
      
      var arr = input.split(",").map(function(num) {
        return parseInt(num);
      });

      arr = arr.filter(function(value, index, self) {
        return self.indexOf(value) === index;
      });

      arr.sort(function(a, b) { return a - b; });

      if (arr.length < 2) {
        document.getElementById("result").innerText = "Please enter at least 2 unique numbers.";
        return;
      }

      var secondLowest = arr[1];
      var secondGreatest = arr[arr.length - 2];

      document.getElementById("result").innerText = 
        "Second Lowest: " + secondLowest + "\n\nSecond Greatest: " + secondGreatest;
    }