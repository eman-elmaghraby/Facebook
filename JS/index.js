var email = document.querySelector(".email");
var password = document.querySelector(".password");
var textPass = document.querySelector(".TextPass");
var invalid = document.querySelector(".invalid");
var showPass = document.querySelector(".showPass");
function submitForm() {
  if (email.value === "" || password.value === "") {
    return false;
  } else {
    return true;
  }
}

password.addEventListener("keyup", () => {
  if (password.value.length >= 6) {
    textPass.classList.remove("rMessage");
    textPass.classList.add("gMessage");
  } else {
    textPass.classList.remove("gMessage");
    textPass.classList.add("rMessage");
  }
});

password.addEventListener("focus", () => {
  textPass.classList.add("rMessage");
});

password.addEventListener("blur", () => {
  textPass.classList.remove("rMessage");
});
showPass.addEventListener("click", () => {
  if (password.type === "password") {
    password.type = "text";
  } else {
    password.type = "Password";
  }
});
