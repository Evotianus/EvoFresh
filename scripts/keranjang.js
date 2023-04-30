    var value1 = 0;
		var valueElem1 = document.getElementById("value1");

		document.getElementById("plus1").addEventListener("click", function() {
			value1++;
			valueElem1.innerText = value1;
		});

		document.getElementById("minus1").addEventListener("click", function() {
			value1--;
            if(value1 < 0){
                value1 = 0;
            }
            valueElem1.innerText = value1;
		});

	
	 var value2 = 0;
		var valueElem2 = document.getElementById("value2");

		document.getElementById("plus2").addEventListener("click", function() {
			value2++;
			valueElem2.innerText = value2;
		});

		document.getElementById("minus2").addEventListener("click", function() {
			value2--;
            if(value2 < 0){
                value2 = 0;
            }
            valueElem2.innerText = value2;
		});

		 var value3 = 0;
     var valueElem3 = document.getElementById("value3");

     document.getElementById("plus3").addEventListener("click", function () {
       value3++;
       valueElem3.innerText = value3;
     });

     document.getElementById("minus3").addEventListener("click", function () {
       value3--;
       if (value3 < 0) {
         value3 = 0;
       }
       valueElem3.innerText = value3;
     });

	  var value4 = 0;
    var valueElem4 = document.getElementById("value4");

    document.getElementById("plus4").addEventListener("click", function () {
      value4++;
      valueElem4.innerText = value4;
    });

    document.getElementById("minus4").addEventListener("click", function () {
      value4--;
      if (value4 < 0) {
        value4 = 0;
      }
      valueElem4.innerText = value4;
    });

	 var value5 = 0;
   var valueElem5 = document.getElementById("value5");

   document.getElementById("plus5").addEventListener("click", function () {
     value5++;
     valueElem5.innerText = value5;
   });

   document.getElementById("minus5").addEventListener("click", function () {
     value5--;
     if (value5 < 0) {
       value5 = 0;
     }
     valueElem5.innerText = value5;
   });

    var value6 = 0;
    var valueElem6 = document.getElementById("value6");

    document.getElementById("plus6").addEventListener("click", function () {
      value6++;
      valueElem6.innerText = value6;
    });

    document.getElementById("minus6").addEventListener("click", function () {
      value6--;
      if (value6 < 0) {
        value6 = 0;
      }
      valueElem6.innerText = value6;
    });


let popup = document.getElementById("popup");
// let clicked_popup = false;
var dark = document.getElementById("black")

function openPopup(){
	// popup.classList.add("open-popup");
    
		popup.style.display = "flex";
    dark.style.display = "flex";
   
	
}
function closePopup(){
  
	popup.style.display = "none";
 dark.style.display = "none";
 
}