$("document").ready(function(){

  $("#mc-embedded-subscribe").click(function(){
    
    $("#approvalDenial").show();
    $("#mc_embed_signup").hide();
  });

  $("#don").click(function(){

    var donorName = document.getElementById("mce-MMERGE1").value;
    var donorCountry = document.getElementById("mce-MMERGE4-country").value;
    var donorNumber = document.getElementById("mce-MMERGE2").value;
    var donorEmail = document.getElementById("mce-EMAIL").value;
    var donationAmount = document.getElementById("mce-MMERGE3").value;

    if(donationAmount == "" && donorName == ""){
      $(".nodon").slideToggle();
    }
    else{
      $("ol#results").append("<li>Donation of " + donationAmount + " made by " + donorName + " from " + donorCountry);
    }
  });
});

var modal1 = document.getElementById("myModal1");
var modal2 = document.getElementById("myModal2");
var modal3 = document.getElementById("myModal3");
// Get the button that opens the modal
var mpesa = document.getElementById("mce-MMERGE5-0");
var bank = document.getElementById("mce-MMERGE5-1");
var paypal = document.getElementById("mce-MMERGE5-2");
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
mpesa.onclick = function() {
  modal2.style.display = "block";
}
bank.onclick = function() {
  modal3.style.display = "block";
}
paypal.onclick = function() {
  modal1.style.display = "block";
}
// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal1.style.display = "none";
  modal2.style.display = "none";
  modal3.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal1) {
    modal1.style.display = "none";
  }
  if (event.target == modal2) {
    modal2.style.display = "none";
  }
  if (event.target == modal3) {
    modal3.style.display = "none";
  }
}

