// Function for retrieving classes and getting them ready to be rendered to the page.
$(document).ready(function() {    

    getClasses();

    function getClasses() {
        $.get("/api/class").then(data => {
          console.log(data);
          for (let i = 0; i < data.length; i++) {
            const liEL = $("<li>");
            liEL.addClass("list-group-item").text(data[i].name);
            $(".list-group-class").append(liEL);
          }
        });
      }

})  