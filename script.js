 
 
 var formValidity = true;
 
 /* remove fallback placeholder text */
   function zeroPlaceholder() {
   var addressBox = document.getElementById("addrinput");
   addressBox.style.color = "black";
   if (addressBox.value === addressBox.placeholder) {
   addressBox.value = "";
   }
   }
  /* restore placeholder text if box contains no user entry */
  function checkPlaceholder() {
  var addressBox = document.getElementById("addrinput");
  if (addressBox.value === "") {
  addressBox.style.color = "rgb(178,184,183)";
  addressBox.value = addressBox.placeholder;
  }
  }
 /* add placeholder text for browsers that don’t support placeholder 18 attribute */
   function generatePlaceholder() {
   if (!Modernizr.input.placeholder) {
   var addressBox = document.getElementById("addrinput");
   addressBox.value = addressBox.placeholder;
   addressBox.style.color = "rgb(178,184,183)";
   if (addressBox.addEventListener) {
  addressBox.addEventListener("focus", zeroPlaceholder,false); 
  addressBox.addEventListener("blur", checkPlaceholder, false); 
  } else if (addressBox.attachEvent) {
  addressBox.attachEvent("onfocus", zeroPlaceholder);
  addressBox.attachEvent("onblur", checkPlaceholder); 
		}
	}
  }
 function advanceSsn() {
   var ssnFields = document.getElementsByClassName("ssn");
   var currentField = document.activeElement;
   if (currentField.value.length === currentField.maxLength) {
   if (currentField === ssnFields[0]) {
   ssnFields[1].focus();
   }
   if (currentField === ssnFields[1]) {
   ssnFields[2].focus();
   }
   if (currentField === ssnFields[2]) {
   document.getElementById("submitBtn").focus();
    }
  }
}
   function createEventListeners(){
	var ssnFields = document.getElementsByClassName("ssn");
    for (var i = 0; i < ssnFields.length; i++) {
		if (ssnFields[i].addEventListener) {
			ssnFields[i].addEventListener("input", advanceSsn, false);
        } else if (ssnFields[i].attachEvent) {
			ssnFields[i].attachEvent("oninput", advanceSsn);
   }
   }
   }
  /* run initial form configuration functions */
   function setUpPage() {
   createEventListeners();
   generatePlaceholder();
   }
    if (window.addEventListener) {
     window.addEventListener("load", setUpPage, false);
  } else if (window.attachEvent) {
      window.attachEvent("onload", setUpPage);
}

  function advanceSsn() {
	var ssnFields = document.getElementsByClassName("ssn");
	var currentField = document.activeElement;
	if (currentField.value.length === currentField.maxLength) {
    if (currentField === ssnFields[0]) {
		ssnFields[1].focus();
	}
	if (currentField === ssnFields[1]) {
		ssnFields[2].focus();
	}
	if (currentField === ssnFields[2]) {
		document.getElementById("submitBtn").focus();
	}
	}
 }
 
    var ssnFields = document.getElementsByClassName("ssn");
	for (var i = 0; i < ssnFields.length; i++) {
		if (ssnFields[i].addEventListener) {
			ssnFields[i].addEventListener("input", advanceSsn, false);
        } else if (ssnFields[i].attachEvent) {
			ssnFields[i].attachEvent("oninput", advanceSsn);
    }
 }