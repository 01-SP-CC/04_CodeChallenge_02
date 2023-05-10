/*********   CODE CHALLENGE 02 **********/

/*
Geben über eine Prompt-Anforderung einen Namen ein
Geben über eine Prompt-Anforderung ein Alter ein

Geben Sie in Abhängigkeit vom angegebenen Alter 
folgende Getränkeauswahl in die Konsole aus :

Alter 0-5 // Milch  --> age > 0 AND age < 6
Alter 6-12 // Saft
Alter 13-17 // Cola
18 + // Wein

-->zB: "Max trinkt Cola."

/* Getränke-Challenge */

// var name  = prompt("Bitte geben Sie einen Namen ein:"); // Eingabe des Namens.

// var age = prompt("Bitte geben Sie ein Alter ein:"); // Eingabe des Alters.

// if (!isNaN(age)) { // Ist die Einhabe überhaupt eine Zahl? 
//     age = parseInt(age); // Umwandeln von String -> Number
// } else {
//     console.error("Eingegebenes Alter ist keine Zahl.");
//     exit();
// }

// // Auswahl des Getränks nach Alter
// var drink;
// if (age >= 0 && age <= 5) {
//     drink = "Milch";
// } else if (age >= 6 && age <= 12) {
//     drink = "Saft";
// } else if (age >= 13 && age <= 17) {
//     drink = "Cola";
// } else if (age >= 18) {
//     drink = "Wein";
// } else {
//     console.error("Ungültiges Alter eingegeben.");    
//     exit();
// }

// // Ausgabe
// console.log(name + " trinkt " + drink + ".");   // !!! name wird global für etwas anderes verwendet. Brauche andere Deklaration!


var gast  = prompt("Bitte geben Sie einen Namen ein:"); // Eingabe des Namens.

var age = prompt("Bitte geben Sie ein Alter ein:"); // Eingabe des Alters.

if (!isNaN(age)) { // Ist die Einhabe überhaupt eine Zahl? 
    age = parseInt(age); // Umwandeln von String -> Number
} else {
    console.error("Eingegebenes Alter ist keine Zahl.");
    exit();
}

// Auswahl des Getränks nach Alter
var drink;
if (age >= 0 && age <= 5) {
    drink = "Milch";
} else if (age >= 6 && age <= 12) {
    drink = "Saft";
} else if (age >= 13 && age <= 17) {
    drink = "Cola";
} else if (age >= 18) {
    drink = "Wein";
} else {
    console.error("Ungültiges Alter eingegeben.");
    exit();
}

// Ausgabe
console.log(gast + " trinkt " + drink + "."); 

