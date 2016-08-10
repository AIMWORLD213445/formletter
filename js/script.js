$(document).ready(function() {
    $("#blanks form") .submit(function(event) {
    var userNameInput = $("input#userName") .val();

    $(".userName") .text(userNameInput);


    $("#letter") .show();

    event.preventDefault();
  });
});
