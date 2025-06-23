
// var itsNumber = 1
// console.log(itsNumber.toString());

// console.log(Boolean(itsNumber));


// ///////////////////////////

// var itsString = "string"
// console.log(Number(itsString));

// console.log(Boolean(itsString));


// ///////////////////////////

// var itsBoolean = true
// console.log(Number(itsBoolean));
// console.log(itsBoolean.toString());


// ///////////////////////////

// console.log(itsUndefined);

var firstNumber = Number(prompt("напишите сумму"))

if (firstNumber > 1000 || firstNumber > 5000 ) {
    var discount = firstNumber / 100 * 5
    console.log('Вы получаете 5% процентную скидку в размере'+ ' '+ Math.ceil(discount));
} else { 
    console.log('у вас не хватает денег чтобы получить скидку');                       
}