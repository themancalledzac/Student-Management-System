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
      // eslint-disable-next-line no-console
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

// load student data
const getStudentData = function () {
  $.get("/api/profile-student").then(data => {
    $("#student-first-name").text(data.firstName);
    $("#student-last-name").text(data.lastName);
    $("#student-email").text(data.email);
    $("#student-phone").text(data.phoneNumber);
  });
};

$(document).ready(() => {
  // This file just does a GET request to figure out which user is logged in
  // and updates the HTML on the page
  try {
    getStudentData();
    $("#profile-information").show(500, () => {
      // $("#profile-information").show(500, () => {
      //   $("#profile-information").show(500);
      // });
    });
  } catch (err) {
    alert(err);
  }
});

$("#teacher-remove").on("click", function (event) {
  event.preventDefault();
  console.log(event.target);
  const teacherId = $(event.target).attr("data-id");
  $.post("/profile/teacher/" + teacherId)
    .then(() => {
      location.reload("/profile");
    });
});


$("#class-remove").on("click", function (event) {
  event.preventDefault();
  const classId = $(event.target).attr("data-id");
  console.log(classId);
  $.post("/profile/class/" + classId)
    .then(() => {
      location.reload("/profile");
    });
});

/* -------------------------------------------------------------------------- */
/*                                   TODO                                     */
/*      Each of these below lines of code need to replace the above           */
/*                           thoughts on this code?                           */
/* -------------------------------------------------------------------------- */

// function teacherRemove() {
//   $("button").on("click", function (event) {
//     event.preventDefault();
//     console.log(event.target);
//     const teacherId = $(event.target).attr("data-id");
//     $.post("/profile/teacher/" + teacherId)
//       .then(() => {
//         location.reload("/profile");
//       });
//   });
// }

// function classRemove() {
//   $("#button").on("click", function (event) {
//     event.preventDefault();
//     const classId = $(event.target).attr("data-id");
//     console.log(classId);
//     $.post("/profile/class/" + classId)
//       .then(() => {
//         location.reload("/profile");
//       });
//   });
// }

// teacherRemove();
// classRemove();

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

$("button").on("click", function (event) {
  event.preventDefault();
  console.log(event.target);
  const classId = $(event.target).attr("data-id");
  $.post("/profile/addclass/" + classId)
    .then(() => {
      location.reload("/profile");
    });
});

/* -------------------------------------------------------------------------- */
/*                                    teachers                                */
/* -------------------------------------------------------------------------- */

$("button").on("click", function (event) {
  event.preventDefault();
  console.log(event.target);
  const addTeacherId = $(event.target).attr("data-id");
  $.post("/teacher/add/" + addTeacherId)
    // eslint-disable-next-line no-unused-vars
    .then(data => {
      location.reload("/profile");
    });
});

// Function for creating a new table row for teacher
// function createTeacherRow(data) {
//   var newTr = $("<tr >");
//   // newTr.append("<th>"  "</th>");
//   newTr.append("<td>" + data.firstName + "</td>");
//   newTr.append("<td>" + data.lastName + "</td>");
//   newTr.append("<td>" + data.degree + "</td>");
//   newTr.append("<td>" + data.rating + "</td>");
//   newTr.append("<td>" + data.department + "</td>");
//   const addBtn = $(`<button data-id="${data.id}" id="add-teacher">`).text("add").addClass("btn bg-light btn-light");
//   newTr.append(addBtn);
//   return newTr;
// }

// function getTeachers() {
//   $.get("/api/teacher", function (data) {
//     // console.log(data);
//     for (var i = 0; i < data.length; i++) {
//       $("tbody").append(createTeacherRow(data[i]));
//     }
//   });
// }

// getTeachers();


// $(document).on("click", ".add-teacher", function (event) {
//   // event.preventDefault()
//   // console.log(event);
//   const teacherId = event.target.dataset.teacherid;
//   console.log(event.target.dataset.teacherid);

//   //get user id

//   // const newTeacher = {
//   //   teacherId=teacherId,
//   //   studentId=userId
//   // }

//   $.ajax("/teacher/" + teacherId, {
//     type: "POST",
//     // data: newTeacher
//   }).then(function () {
//     console.log("teacher added");
//     location.reload();
//   });

// });
