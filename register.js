function registerUser() {
  document.getElementById("error").innerHTML = "";
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const cpassword = document.getElementById("password_confirmation").value;
  if (password == cpassword) {
  axios.post('https://serene-shelf-99762.herokuapp.com/users', {
    user: {
      name: name,
      email: email,
      password: password,
      password_confirmation: password_confirmation
    }
  }).then(response => {
    console.log(response);
  }).catch(function (error) {
    console.log(error);
  });
}else{
  document.getElementById("error").innerHTML = "Password must be the same";
}
}

function goBack() {
  window.history.back(1);
}
document.getElementById("boton").addEventListener("click", registerUser);
document.getElementById("boton2").addEventListener("click", goBack);