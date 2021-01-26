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
/*                                   profile_page                             */
/* -------------------------------------------------------------------------- */

// make all ID instead of class ---------TODO---------------------

// start by hiding divs
$("#profile-information").hide();
$("#teacher-information").hide();
$("#class-information").hide();


// load student data


const getStudentData = async () => {
  $.get("/api/profile-student").then(data => {
    $("#student-first-name").text(data.firstName);
    $("#student-last-name").text(data.lastName);
    $("#student-email").text(data.email);
    $("#student-phone").text(data.phoneNumber);
    // after load, make visible
    // display none
    //
  });
};
// load teacher data
const getTeacherData = async () => {
  $.get("/api/profile-teacher").then(data => {
    $(".first-name").text(data.firstName);
    $(".last-name").text(data.lastName);
    $(".email").text(data.email);
    $(".email").text(data.email);
  });
};
// load class data
const getClassData = async () => {
  $.get("/api/profile-class").then(data => {
    $(".first-name").text(data.firstName);
    $(".last-name").text(data.lastName);
    $(".email").text(data.email);
    $(".email").text(data.email);
  });
}

$(document).ready(async () => {
  // This file just does a GET request to figure out which user is logged in
  // and updates the HTML on the page
  try {
    await getStudentData();
    await getTeacherData();
    await getClassData();
    $("#profile-information").show(500, () => {
      $("#profile-information").show(500, () => {
        $("#profile-information").show(500);
      });
    });
  }
  catch (err) { alert(err) }
});



/* -------------------------------------------------------------------------- */
/*                                   TODO                                     */
/*              We should have each of the fields above editable.             */
/*                           thoughts on this code?                           */
/* -------------------------------------------------------------------------- */

// $(".userEdit").onclick(() => {
//   $.post("/api/profileEdit").then(data => {
//     $(".first-name").text(data.firstName);
//     $(".last-name").text(data.lastName);
//     $(".email").text(data.email);
//     $(".phone-number").text(data.phoneNumber);
//   });
// });

/* -------------------------------------------------------------------------- */
/*                                    class                                   */
/* -------------------------------------------------------------------------- */




function getClasses() {
  $.get("/api/class").then(data => {
    console.log(data);
    for (let i = 0; i < data.length; i++) {
      const liEL = $("<li>");
      liEL.addClass("list-group-item").text(data[i].name);
      $(".list-group-class").append(liEL);
      liEL.addClass("btn btn-light").text("add");
      $(".btn").appent(liEl);

      <li class="list-group-item"
    }
  });
}
getClasses();

/* -------------------------------------------------------------------------- */
/*                                   TODO                                     */
/*              Each class needs to be clickable, shows class data            */
/*                           thoughts on this code?                           */
/* -------------------------------------------------------------------------- */

//

/* -------------------------------------------------------------------------- */
/*                                   TODO                                     */
/*                  Each class needs an 'add to profile' button               */
/*                           thoughts on this code?                           */
/* -------------------------------------------------------------------------- */

//

