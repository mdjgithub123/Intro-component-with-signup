let check = document.querySelector(".claim-btn");
let fname = document.querySelector(".inp-fname-err");
let lname = document.querySelector(".inp-lname-err");
let mail = document.querySelector(".inp-mail-err");
let pass = document.querySelector(".inp-pass-err");
let passErr = document.querySelector(".password-err");
let mailErr = document.querySelector(".email-err");
let lnameErr = document.querySelector(".lname-err");
let fnameErr = document.querySelector(".fname-err");
let ione = document.querySelector(".icon1");
let itwo = document.querySelector(".icon2");
let ithree = document.querySelector(".icon3");
let ifour = document.querySelector(".icon4");
let alertBox = document.querySelector(".alert");

check.addEventListener("click", () => {
  //   if (
  //     fname.value == "" &&
  //     lname.value == "" &&
  //     mail.value == "" &&
  //     pass.value == ""
  //   ) {
  //     fnameErr.style.display = "block";
  //     ione.style.display = "block";
  //     fname.style.border = "2px solid red";
  //     lnameErr.style.display = "block";
  //     itwo.style.display = "block";
  //     lname.style.border = "2px solid red";
  //     mailErr.style.display = "block";
  //     ithree.style.display = "block";
  //     mail.style.border = "2px solid red";
  //     passErr.style.display = "block";
  //     ifour.style.display = "block";
  //     pass.style.border = "2px solid red";}
  if (fname.value == "") {
    fnameErr.style.display = "block";
    ione.style.display = "block";
    fname.style.border = "2px solid red";
  }
  //  else if (fname.value != "") {
  //     fnameErr.style.display = "none";
  //     ione.style.display = "none";
  //     fname.style.border = "1px solid green";}
  else if (lname.value == "") {
    lnameErr.style.display = "block";
    itwo.style.display = "block";
    lname.style.border = "2px solid red";
  }
  // else if (lname.value != "") {
  // lnameErr.style.display = "none";
  // itwo.style.display = "none";
  // lname.style.border = "1px solid green";}
  else if (mail.value == "") {
    mailErr.style.display = "block";
    ithree.style.display = "block";
    mail.style.border = "2px solid red";
  }
  // else if (mail.value != "") {
  // mailErr.style.display = "none";
  // ithree.style.display = "none";
  // mail.style.border = "1px solid green";}
  else if (pass.value == "") {
    passErr.style.display = "block";
    ifour.style.display = "block";
    pass.style.border = "2px solid red";
  }
  // else if (pass.value != "") {
  // passErr.style.display = "none";
  // ifour.style.display = "none";
  // pass.style.border = "1px solid green";}
  else {
    alertBox.textContent = "Your Trial is Activated ☑️";
    fnameErr.style.display = "none";
    ione.style.display = "none";
    fname.style.border = "2px solid green";    
    lnameErr.style.display = "none";
    itwo.style.display = "none";
    lname.style.border = "2px solid green";
    mailErr.style.display = "none";
    ithree.style.display = "none";
    mail.style.border = "2px solid green";
    passErr.style.display = "none";
    ifour.style.display = "none";
    pass.style.border = "2px solid green";
  }
});
