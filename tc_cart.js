"use strict";

/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 10
   Case Problem 1

   Author:
   Date:  
   
   Filename: tc_cart.js
	
*/
//variables
var orderTotal = 0;
var cartHTML = "<table><tr><th>Item</th><th>Description</th><th>Price</th><th>Qty</th><th>Total</th></tr>";

//for loop for display each item store in array
for(var i = 0; i < item.length; i++){ //condition 
	cartHTML += "<tr><td>" + "<img src='tc_" + item[i] + ".png' alt='" + item[i] + "'> </td>";	
	cartHTML +=  "<td>" + itemDescription[i] + "</td>";
	cartHTML +=  "<td>$" + itemPrice[i] + "</td>";
	cartHTML +=  "<td>" + itemQty[i] + "</td>";
	
	//calculate the itemcost 
	var itemCost = itemPrice[i] * itemQty[i]; // the values bring from the array and calculating the value and assign to itemCost variable
	
	//itemCost value added to cartHTML
	cartHTML +=  "<td>$" + itemCost + "</td></tr>";
	
	//add itemCost value to orderTotal
	orderTotal += itemCost;
}
// display the total of all items
cartHTML += "<tr><td colspan = '4'> Subtotal </td>";
cartHTML += "<td>$" +orderTotal +"</td></tr>"; 
cartHTML += "</table>"; //ending 

//cartHTML innerHTML apply to id 'cart' 
document.getElementById("cart").innerHTML = cartHTML; 
