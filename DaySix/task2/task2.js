let form = document.getElementById("myForm");

form.addEventListener("submit", function(e) {
  e.preventDefault(); // stop form from submitting

  // Inputs
  let name = document.getElementById("name").value.trim();
  let pass = document.getElementById("pass").value.trim();
  let email = document.getElementById("email").value.trim();
  let gender = document.querySelector("input[name='gender']:checked");
  let sports = document.querySelectorAll("input[name='sport']:checked");

  let valid = true;

  // Name Validation
  if (name.length <= 4) {
    document.getElementById("nameError").style.display = "block";
    valid = false;
  } else {
    document.getElementById("nameError").style.display = "none";
  }

  // Password Validation
  if (pass.length <= 8) {
    document.getElementById("passError").style.display = "block";
    valid = false;
  } else {
    document.getElementById("passError").style.display = "none";
  }

  // Email Validation (simple regex)
  let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    document.getElementById("emailError").style.display = "block";
    valid = false;
  } else {
    document.getElementById("emailError").style.display = "none";
  }

  // Gender Validation
  if (!gender) {
    document.getElementById("genderError").style.display = "block";
    valid = false;
  } else {
    document.getElementById("genderError").style.display = "none";
  }

  // Sport Validation
  if (sports.length === 0) {
    document.getElementById("sportError").style.display = "block";
    valid = false;
  } else {
    document.getElementById("sportError").style.display = "none";
  }

  // If everything valid
  if (valid) {
    alert("Form Submitted Successfully!");
  }
});
