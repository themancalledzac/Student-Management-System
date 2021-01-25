/* -------------------------------------------------------------------------- */
/*                                LOG IN                                */
/* -------------------------------------------------------------------------- */

$(document).ready(function () {
  function loginUser(email, password) {
    $.post("/api/login", {
      email: email,
      password: password
    }).then(function () {
      window.location.replace("/profile");
    }).catch(function (err) {
      console.log(err);
    });
  }

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
      alert("Invalid Username or Password");
      return;
    }
    // If we have an email and password we run the loginUser function and clear the form
    loginUser(userData.email, userData.password);
    emailInput.val("");
    passwordInput.val("");

    console.log(userData.email);
  });



  // loginUser does a post to our "api/login" route and if successful, redirects us the the page1


});

/* -------------------------------------------------------------------------- */
/*                                   SIGN UP                                  */
/* -------------------------------------------------------------------------- */

$(document).ready(() => {
  function checkPasswordMatch() {
    const password = $("#password").val();
    const confirmPassword = $("#confirm").val();
    if (password !== confirmPassword) {
      $("#message").html("Passwords do not match!").css("color", "red");
    } else {
      $("#message").html("Passwords match.").css("color", "green");
    }
  }
  function handleLoginErr(err) {
    $("#alert .msg").text(err.responseJSON);
    $("#alert").fadeIn(500);
  }

  function signUpUser(firstName, lastName, email, password) {
    $.post("/api/signup", {
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password
    })
      .then(() => {
        window.location.replace("/profile");
        // If there's an error, handle it by throwing up a bootstrap alert
      })
      .catch(handleLoginErr);
  }
  // Getting references to our form and input
  const firstNameInput = $("#firstname");
  const lastNameInput = $("#lastname");
  const signUpForm = $("#signup-form");
  const emailInput = $("#email");
  const passwordInput = $("#password");
  const confirmInput = $("#confirm");
  $("#confirm").keyup(checkPasswordMatch);


  // When the signup button is clicked, we validate the email and password are not blank
  signUpForm.on("submit", event => {
    event.preventDefault();
    const userData = {
      firstName: firstNameInput.val().trim(),
      lastName: lastNameInput.val().trim(),
      email: emailInput.val().trim(),
      password: passwordInput.val().trim()
    };

    if (!userData.firstName || !userData.lastName || !userData.email || !userData.password) {
      return;
    }
    // If we have an email and password, run the signUpUser function
    signUpUser(userData.firstName, userData.lastName, userData.email, userData.password);
    firstNameInput.val("");
    lastNameInput.val("");
    emailInput.val("");
    passwordInput.val("");
    confirmInput.val("");
  });

  // Does a post to the signup route. If successful, we are redirected to the members page
  // Otherwise we log any errors



});

/* -------------------------------------------------------------------------- */
/*                                   profile_page                                   */
/* -------------------------------------------------------------------------- */

$(document).ready(() => {
  // This file just does a GET request to figure out which user is logged in
  // and updates the HTML on the page
  $.get("/api/profile").then(data => {
    $(".member-name").text(data.firstName);
    $(".first-name").text(data.firstName);
    $(".last-name").text(data.lastName);
    $(".email").text(data.email);
  });
});

/* -------------------------------------------------------------------------- */
/*                                    class                                   */
/* -------------------------------------------------------------------------- */




function getClasses() {
  $.get("/api/class").then(data => {
    console.log(data);
    for (let i = 0; i < data.length; i++) {
      const liEL = $("<li>");
      liEL.addClass("list-group-item").text(data[i].name);
      $(".list-group-class").append(liEL)
    }
  });
}
getClasses();