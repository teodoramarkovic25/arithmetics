var number1 = prompt("Unesite jedan broj:");
var number2 = prompt("Unesite drugi broj:");
var operation= prompt("Unesite jednu osnovnu aritmeticku operaciju:");


if(operation== "+"){
let rezultat =parseInt(number1)+parseInt(number2);
    alert("Rezultat je:" + rezultat);
}
else if(operation=="-"){
  let rezultat =parseInt(number1)-parseInt(number2);
    alert("Rezultat je:" + rezultat);
}
else if(operation=="*"){
 let rezultat =parseInt(number1)*parseInt(number2);
    alert("Rezultat je:" + rezultat);
}else{
   let rezultat =parseInt(number1)/parseInt(number2);
    alert("Rezultat je:" + rezultat);
}