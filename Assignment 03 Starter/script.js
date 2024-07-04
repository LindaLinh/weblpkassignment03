const form = document.querySelector(".input-personal-info");
const emailInput = document.querySelector("#exampleInputEmail1");
const errorText = document.querySelector("#emailHelp");
const btnSubmit = document.querySelector(".btnInputPersonal");
const containerPersonalInfo = document.querySelector(".mt-40-info");

containerPersonalInfo.classList.add("hide");

const regex =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,})$/;

btnSubmit.addEventListener("click", function (e) {
  e.preventDefault();

  const email = emailInput.value.trim();

  if (email === "" || !regex.test(email)) {
    errorText.innerText = "Email không hợp lệ. Vui lòng nhập lại.";
    errorText.style.color = "red";
  } else {
    form.classList.add("hide");
    containerPersonalInfo.classList.remove("hide");
  }
});

function viewMore(id) {
  const element = document.getElementById(id);
  const moreButton = document.getElementById(id).previousElementSibling;
  if (element) {
    element.style.display = "block";
  }
  moreButton.style.display = "none";
}

function viewLess(id) {
  const element = document.getElementById(id);
  const moreButton = document.getElementById(id).previousElementSibling;
  if (element) {
    element.style.display = "none";
  }
  moreButton.style.display = "block";
}
