// step 1: add click event handler with the submit button
document.getElementById("btn-submit").addEventListener("click", function () {
  // step 2: get the email address and password inside the email input field
  // 2.a: set id on the html element
  // 2.b: get the element
  // 2.c: get the value from the element
  // always remember to use .value to get text from an input field

  // email:
  const emailField = document.getElementById("user-email");
  const email = emailField.value;

  // password:
  const passwordField = document.getElementById("user-password");
  const password = passwordField.value;

  // DANGER: Do Not Verify email or password on the clint side [USE JUST FOR PRACTICE]
  // step 3: verify email and password
  if (email === "msiamislam12345@gmail.com" && password === "p@ssword") {
    window.location.href = 'bank.html';
  } else {
    alert('please input valid email or password!');
  }
});
