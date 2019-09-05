
document.getElementById("formulario").addEventListener("submit", function(e) {
  e.preventDefault();
  const email = document.getElementById("mail").value;
  const password = document.getElementById("password").value;
  axios.post('https://serene-shelf-99762.herokuapp.com/auth/login', {
    email: email,
    password: password
  }).then(response => {
    console.log(response);
    const token = response.data.token;
    document.cookie = `token=${token}`;
    console.log('COOKIE', token);
    window.location.href = "/alert.html"
  }).catch(function(error) {
    console.log(error);
    let err = error.response.statusText;
    if (err === "Unauthorized") {
      alert ("Password Invalid")
      
    }
  });
  })


  