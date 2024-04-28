document.getElementById("submit").addEventListener("click", function (event) {
  // Get form data
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  var gender = document.getElementById("gender").value;
  var role = document.getElementById("role").value;
  var bodyreq = {
    name: name.value,
    email: email,
    password: password,
    gender: gender,
    role: role,
  };
  console.log(bodyreq);

  // Send form data to the API
  // fetch("http://localhost:5000/KazaAuctionApi/register", {
  //   method: "POST",
  //   body: bodyreq,
  // }).then((res) => {
  //   console.log(res);
  // });
  // .then(function (response) {
  //   if (response.ok) {
  //     // Registration successful
  //     response.json().then(function (data) {
  //       alert(data.message);
  //       form.reset(); // Reset the form
  //     });
  //   } else {
  //     // Registration failed
  //     response.json().then(function (data) {
  //       alert(data.message);
  //     });
  //   }
  // })
  // .catch(function (error) {
  //   console.log(error);
  //   alert("An error occurred during registration.");
  // });
});
