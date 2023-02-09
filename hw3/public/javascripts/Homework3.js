$(function() {
    //This function called when the button is clicked
    $("#orderButton").click(function () {
    
        //val() method is used to get the values from textarea and store it in txt variable
        
        var txt = document.getElementById("specialInstructions").value;	
        var vegan = "vegan";
        var Vegan = "Vegan";
        if (txt.indexOf(vegan) != -1 || txt.indexOf(Vegan) != -1) {
            alert("WARNING CHEESECAKE CONTAINS DAIRY!");
        }
        else {
            //hide all the unnecessary 
            $("#quantity").hide();
            $("#totalOrders").hide();
            $(".firstSelection").hide();
            $("#orderButton").hide();
            $("ul").hide();
            $("#specialInstructions").hide();
            $("label").hide();
            $(".dropdown").hide();
            
            //obtain the option value
            var chosenOption = document.getElementById("dropDownMenu");
            var optionValue = chosenOption.options[chosenOption.selectedIndex].text;
            //obtain the value of flavors 
            var flavors = document.getElementsByName("flavors");
            var selectedFlavor = "";
            for (i = 0; i < flavors.length; i++) {
                if (flavors[i].checked) {
                    selectedFlavor = flavors[i].value;
                }
            }
            
            //print out values to the HTML side
            document.getElementById("farewellMessage").innerHTML = "Thank you! Your order has been placed.";
            document.getElementById("amountOfCake").innerHTML = "Quantity: " + optionValue;
            document.getElementById("chosenFlavor").innerHTML = "Flavor: " + selectedFlavor;
            document.getElementById("setInstructions").innerHTML = "Special Instructions: " + txt;
            
        }
        
    });		
});

/* When the user clicks on the button, toggle between hiding and showing the dropdown content */
function myFunction() {
      document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
      if (!event.target.matches('.dropbtn')) {
            var dropdowns = document.getElementsByClassName("dropdown-content");
            var i;
            for (i = 0; i < dropdowns.length; i++) {
                  var openDropdown = dropdowns[i];
                  if (openDropdown.classList.contains('show')) {
                    openDropdown.classList.remove('show');
                  }
            }
      }
}

function changeButtonText(value) {
    document.getElementById("selectedMonthButton").innerText = value;
}