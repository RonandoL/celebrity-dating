$(document).ready(function() {
  $("form#dating").submit(function(event) {
    var age = parseInt($("input#age").val());
    var gender = $("select#gender").val();

    if ((gender === "male") && (age > 17) && (age < 25)) {
      $(".boys18").show();
    } else if ((gender === "male") && (age >= 26)) {
      $(".boys26").show();
    } else if ((gender === "female") && (age > 17) && (age < 25)) {
      $(".girls18").show();
    } else if ((gender === "female") && (age >= 26)) {
      $(".girls26").show();
    } else {
      alert("Please enter only numbers above 17. :P")
    }

  event.preventDefault();
  });
});
