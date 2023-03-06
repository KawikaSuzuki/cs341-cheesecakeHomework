//Kawika Suzuki
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

            //get values for the new order form to send to the database
            var orderID = 63;
            var month = 'NOV';
            var day = 20;
            var quantity = optionValue;
            var topping = selectedFlavor;
            var notes = txt;
            
            //post for the neworders form
            $.post('/neworders', {
                orderID: orderID,
                month: month, 
                day: day, 
                quantity: quantity,
                topping: topping, 
                notes: notes
            }); 
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
    //post for the orders form
    $.post('/orders', {month: value}, 
        function changeBullets(data,status) {
            //stringify data because it's a JSON object 
            alert("Hello" + JSON.stringify(data) + "\nStatus: " + status);
            // Update the list items
            document.getElementById("cherryli").innerHTML = data[0].quantity + " " + data[0].topping;
            document.getElementById("chocolateli").innerHTML = data[1].quantity + " " + data[1].topping;
            document.getElementById("plainli").innerHTML = data[2].quantity + " " + data[2].topping;
        }
    );    
}


