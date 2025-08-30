function showAlert(type) {
  let alertBox = document.getElementById("alert-box");
  let title = document.getElementById("alert-title");
  let icon = document.getElementById("alert-icon");
  let message = document.getElementById("alert-message");

  alertBox.classList.remove("hidden", "success", "error");

  if (type === "success") {
    alertBox.classList.add("success");
    title.textContent = "Success";
    icon.textContent = "✔";
    message.textContent = "This is a Success Message";
  } else if (type === "error") {
    alertBox.classList.add("error");
    title.textContent = "Error";
    icon.textContent = "✖";
    message.textContent = "This is an Error Message";
  }
}
