let nameInput = document.getElementById("name");
let idInput = document.getElementById("id");
let ageInput = document.getElementById("age");
let addBtn = document.getElementById("addBtn");
let tableBody = document.getElementById("tableBody");

addBtn.addEventListener("click", function () {
  let name = nameInput.value.trim();
  let id = idInput.value.trim();
  let age = ageInput.value.trim();

  if (name === "" || id === "" || age === "") {
    alert("Please fill all fields");
    return;
  }

  let tr = document.createElement("tr");

  tr.innerHTML = `
    <td>${id}</td>
    <td>${name}</td>
    <td>${age}</td>
    <td><button class="deleteBtn">Delete</button></td>
  `;

  tableBody.appendChild(tr);

  nameInput.value = "";
  idInput.value = "";
  ageInput.value = "";
});

document.addEventListener("click", function (e) {
  if (e.target.classList.contains("deleteBtn")) {
    e.target.parentElement.parentElement.remove();
  }
});
