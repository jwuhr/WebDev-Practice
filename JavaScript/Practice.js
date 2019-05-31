// var userName = prompt("What's your name?");
// alert("Nice to meet you, " + userName);
// console.log("Also great to meet you, " + userName);

function isEven(num) {
    if (typeof num === "number") {
        return num % 2 === 0;
    } else {
        return false;
    }
}

function factorial(num) {
    if (typeof num === "number") {
        var fac = 1;
        for (var i = num; i > 0; i--) {
            fac = fac * i;
        }
        return fac;
    } else {
        return false;
    }
}

function kebabToSnake(input) {
    var output = input.replace(/-/g, "_")
    return output;
}