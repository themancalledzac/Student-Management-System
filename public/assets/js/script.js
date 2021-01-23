$(document).ready(function () {

  // Getting references to our form and inputs
  var loginForm = $("#login-form");
  var emailInput = $("#email");
  var passwordInput = $("#password");

  // When the form is submitted, we validate there's an email and password entered
  loginForm.on("submit", function (event) {
    event.preventDefault();
    var userData = {
      email: emailInput.val().trim(),
      password: passwordInput.val().trim()
    };
    if (!userData.email || !userData.password) {
      alert("Invalid Username or Password")
      return;
    }
    // If we have an email and password we run the loginUser function and clear the form
    loginUser(userData.email, userData.password);
    emailInput.val("");
    passwordInput.val("");
  });

  console.log(email);

  // loginUser does a post to our "api/login" route and if successful, redirects us the the page1
  function loginUser(email, password) {
    $.post("/api/login", {
      email: email,
      password: password
    }).then(function () {
      window.location.replace("/page1");
    }).catch(function (err) {
      console.log(err);
    });
  }

});

$(document).ready(function () {
  // Getting references to our form and input
  var firstName = $("#firstname");
  var lastName = $("#lastname");
  var signUpForm = $("#signup-form");
  var emailInput = $("#email");
  var passwordInput = $("#password");
  var passwordVerify = $("#confirm");
  $("#confirm").keyup(checkPasswordMatch);


  // When the signup button is clicked, we validate the email and password are not blank
  signUpForm.on("submit", function (event) {
    event.preventDefault();
    var userData = {
      firstName: firstName.val().trim().toLowerCase(),
      lastName: lastName.val().trim().toLowerCase(),
      email: emailInput.val().trim().toLowerCase(),
      password: passwordInput.val().trim(),
      passwordChek: passwordVerify.val().trim()
    };
    console.log(userData.email);
    let userCount = "/api/user/count/";
    userCount += userData.email;
    console.log(userCount);

    $.get(userCount).then(function (result) {
      console.log("searching");
      console.log(result);
      if (result === 1) {
        modalAlert("That user already exists!");
      } else {
        if (!userData.email || !userData.password) {
          modalAlert("Please complete user info.");
          return;
        }
        else if (userData.password !== userData.passwordChek) {
          modalAlert("Passwords do not match!");
        } else {
          // If we have an email and password, run the signUpUser function
          signUpUser(userData.email, userData.password);
          emailInput.val("");
          passwordInput.val("");
        }

      }
    });
  });


  // Does a post to the signup route. If successful, we are redirected to the members page
  // Otherwise we log any errors
  function signUpUser(email, password) {
    $.post("/api/signup", {
      email: email,
      password: password
    })
      .then(function (data) {
        window.location.replace(data);
      })
      .catch(handleLoginErr);
  }

  // function handleLoginErr(err) {
  //   $("#alert .msg").text(err.responseJSON);
  //   $("#alert").fadeIn(500);
  // }




  function checkPasswordMatch() {
    var password = $("#password").val();
    var confirmPassword = $("#confirm").val();
    if (password !== confirmPassword)
      $("#message").html("Passwords do not match!").css("color", "red");
    else
      $("#message").html("Passwords match.").css("color", "green");
  }
});