let arrayA = prompt("Please, enter the elements of the first array:");
let arrayB = prompt("Please, enter the elements of the second array:");

arrayA = arrayA.split(' ');
arrayB = arrayB.split(' ');

let finalArray = [];

for (let i = 0; i < arrayA.length; i++) {
    finalArray[i] = arrayA[i];
}

for (let i = 0; i < arrayB.length; i++) {
    finalArray[arrayA.length +  i] = arrayB[i];
}
alert(finalArray.toString());
