$(function() {
  $("button#receiptButton").click(function(){
    var inputName = $("input#inputName").val();
    var inputAdd1 = $("input#inputAdd1").val();
    var inputAdd2 = $("input#inputAdd2").val();
    var inputCity = $("input#inputCity").val();
    var inputZip = $("input#inputZip").val();
    console.log(inputAdd1);
    console.log(inputAdd2);
    console.log(inputZip);
    if(inputAdd2 == "") {
      $("#receiptBody").html("Thank you for your purchase " + inputName + ".</br>Shipping confirmed to following address:</br>" + inputAdd1 + "</br>" + inputCity + ", " + inputZip);
    } else {
      $("#receiptBody").html("Thank you for your purchase " + inputName + ".</br>Shipping confirmed to following address:</br>" + inputAdd1 + "</br>" + inputAdd2 + "</br>" + inputCity + ", " + inputZip);
    };
  });

});
