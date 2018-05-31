$(function() {
  $("button#receiptButton").click(function(){
    var inputName = $("input#inputName").val();
    var inputAdd1 = $("input#inputAdd1").val();
    var inputAdd2 = $("input#inputAdd2").val();
    var inputCity = $("input#inputCity").val();
    var inputZip = $("input#inputZip").val();
    if(inputAdd2 == "") {
      $("#receiptBody").html("Thank you for your purchase " + inputName + ".</br>Shipping confirmed to following address:</br>" + inputAdd1 + "</br>" + inputCity + ", " + inputZip);
    } else {
      $("#receiptBody").html("Thank you for your purchase " + inputName + ".</br>Shipping confirmed to following address:</br>" + inputAdd1 + "</br>" + inputAdd2 + "</br>" + inputCity + ", " + inputZip);
    };
  });

  $("form#addressBook").submit(function(event) {
    var contactName = $("input#contactName").val();
    var contactAdd = $("input#contactAdd").val();
    var contactPhone = $("input#contactPhone").val();
    var contactEmail = $("input#contactEmail").val();
    $("#contacts").append("<li id=\"clickName\">" + contactName + "</li>");
    $("#contacts").append("<li class=\"info\">" + contactAdd + "</li>");
    $("#contacts").append("<li class=\"info\">" + contactPhone + "</li>");
    $("#contacts").append("<li class=\"info\">" + contactEmail + "</li>");
    event.preventDefault();

    $("#clickName").click(function() {
      console.log("reached");
      $(".info").toggle();

    });
  });




});
