var fLabel = document.querySelector(".fLabel");
var fName = document.querySelector(".fName");
var lLabel = document.querySelector(".lLabel");
var lName = document.querySelector(".lName");
var lEmail = document.querySelector(".lEmail");
var email = document.querySelector(".email");
var lPhone = document.querySelector(".lPhone");
var phone = document.querySelector(".phone");
var lPass = document.querySelector(".lPass");
var pass = document.querySelector(".pass");
var showPass = document.querySelector(".showPass");
var showCoPass = document.querySelector(".showCoPass");
var lConfirmPass = document.querySelector(".lConfirmPass");
var confirmPass = document.querySelector(".confirmPass");
var mCheck = document.querySelector(".mCheck");
var fCheck = document.querySelector(".fCheck");
var gender = document.querySelector(".gender");
var date = document.querySelector(".date");
var lDate = document.querySelector(".lDate");
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
var phoneno = /^\d{10}$/;

function validationForm() {
  // first name validation
  if (fName.value === "" || fName.value.includes(" ") || !isNaN(fName.value)) {
    fLabel.innerHTML = "Please Enter Valid First Name";
    fLabel.classList.remove("bColor");
    fLabel.classList.add("rColor");
    return false;
  }
  // last name validation
  else if (
    lName.value === "" ||
    lName.value.includes(" ") ||
    !isNaN(lName.value)
  ) {
    fLabel.classList.remove("rColor");
    fLabel.innerHTML = "First Name :";
    lLabel.innerHTML = "Please Enter Valid Last Name";
    lLabel.classList.remove("bColor");
    lLabel.classList.add("rColor");
    return false;
  }
  // email validation
  else if (email.value === "" || !mailformat.test(email.value)) {
    lLabel.classList.remove("rColor");
    lLabel.innerHTML = "Last Name :";
    lEmail.innerHTML = "Please Enter Valid Email";
    lEmail.classList.remove("bColor");
    lEmail.classList.add("rColor");
    return false;
  }
  // phone number validation
  else if (phone.value === "" || !phoneno.test(phone.value)) {
    lEmail.classList.remove("rColor");
    lEmail.innerHTML = "Email :";
    lPhone.innerHTML = "Please Enter Valid Phone";
    lPhone.classList.remove("bColor");
    lPhone.classList.add("rColor");
    return false;
  }
  // password validation
  else if (
    pass.value === "" ||
    pass.value.includes(" ") ||
    pass.value.lenght < 7
  ) {
    lPhone.classList.remove("rColor");
    lPhone.innerHTML = "Phone :";
    lPass.innerHTML = "Please Enter Valid Password";
    lPass.classList.remove("bColor");
    lPass.classList.add("rColor");
    return false;
  }
  //confirm password validation
  else if (confirmPass.value === "" || confirmPass.value !== pass.value) {
    lPass.classList.remove("rColor");
    lPass.innerHTML = "Password :";
    lConfirmPass.innerHTML = "Please Enter Valid confirm Password";
    lConfirmPass.classList.remove("bColor");
    lConfirmPass.classList.add("rColor");
    return false;
  }

  // gender validation
  else if (mCheck.checked == false && fCheck.checked == false) {
    lConfirmPass.classList.remove("rColor");
    lConfirmPass.innerHTML = "Confirm Password :";
    gender.innerHTML = "Please Select The Gender";
    gender.classList.remove("bColor");
    gender.classList.add("rColor");
    return false;
  }
  //   date validation
  else if (date.value === "") {
    gender.classList.remove("rColor");
    gender.innerHTML = "Gender :";
    lDate.innerHTML = "Please Select The Date";
    lDate.classList.remove("bColor");
    lDate.classList.add("rColor");
    return false;
  } else {
    return true;
  }
}
console.log(date);
// show password
showPass.addEventListener("click", () => {
  if (pass.type === "password") {
    pass.type = "text";
  } else {
    pass.type = "Password";
  }
});

// show confirm password
showCoPass.addEventListener("click", () => {
  if (confirmPass.type === "password") {
    confirmPass.type = "text";
  } else {
    confirmPass.type = "Password";
  }
});
