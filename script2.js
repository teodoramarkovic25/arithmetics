var number_a = prompt("Please enter first number:");
var number_b = prompt("Please enter second number:");
 
let result = compare(number_a, number_b);
 
switch (result) { 
case 1:
 
alert("Number " + number_a + " is greater then " + number_b);
 
break; 
case -1:
 
alert("Number " + number_b + " is greater then " + number_a);  
 
break;
 
case 0:
 
alert("Numbers are equal."); 
break; 
}
 
function compare(a, b) { 
 
let number_a = parseInt(a); 
 
let number_b = parseInt(b); 
 
if (number_a > number_b) { 
return 1;
 
} else if (number_b > number_a) { 
return -1;
 
} else { 
return 0;
 
} 
}