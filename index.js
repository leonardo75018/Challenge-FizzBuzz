


// // function modulo(number1, number2) {

// //     if (number1 % number2 === 0) {
// //         return console.log("ok")

// //     } else {
// //         return console.log("no")

// //     }



// // }
// modulo();


var a = 9;
var b = 10
var c = 15;
var d = 1.34;


casseTête(d)

function casseTête(chiffre) {

    if (chiffre % 3 === 0 & chiffre % 5 === 0) {
        console.log("FizzBuzz " + "le résulat de " + chiffre + "/3 =" + (chiffre / 3) + " et " + + chiffre + "/5 =" + (chiffre / 5))
    }
    else if (chiffre % 3 === 0) {
        console.log("Buzz " + "le résulat de " + chiffre + "/3 =" + (chiffre / 3))
    }


    else if (chiffre % 5 === 0) {
        console.log("Buzz " + "le résulat de " + chiffre + "/5 =" + (chiffre / 3))
    }

    else if (chiffre % 3 & 5 === 0) {
        console.log("FizzBuzz " + "le résulat de " + chiffre + "/5 =" + (chiffre / 3) + (chiffre / 5))
    }


    else {
        console.log("pas de division possible pour " + chiffre)
    }
}



