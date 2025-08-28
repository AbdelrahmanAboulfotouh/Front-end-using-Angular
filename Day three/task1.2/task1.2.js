function calculateSum() {
      let sum = 0;
      let values = [];
      let flag = true;
      while (true) {
        let input = prompt("Enter a number (0 to stop):");

        if (input === null) {
          break;
        }

        let num = Number(input);

        if (isNaN(num)) {
          alert("Invalid input! Please enter a numeric value.");
          continue; 
        }

        if (num === 0) {
          break;
        }
        if(flag)
        {
            flag = false;
            continue;
        }


        sum += num;
        values.push(num);

        if (sum > 100) {
          break;
        }
      }

      document.getElementById("result").innerHTML =
        `<p>You entered: ${values.join(", ")}</p>
         <p>Final Sum = ${sum}</p>`;
    }