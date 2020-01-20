// let num = 50;

// if (num < 49) {
//     console.log("neverno")
// } else if (num > 100){
//     Console.log("mnogovate")
// } else {
//     console.log("verno")
// };

// (num == 50) ? console.log('verno') : Console.log("ne verno");

// switch (num) {
//     case num < 49 :
//         console.log("neverno");
//         break;
//     case num > 100 :
//         console.log("bolshe");
//         break;
//     case num > 80 :
//         console.log("esho bplshe");
//         break;    
//     case 50 :
//         console.log("verno0");
//         break;
//     case 70 :
//         console.log("esho nemnojko bolshe");
//         break;
//     default:
//         console.log("shtoto poshlo ne tak");
//         break;
// }

// while ( num < 55 ){
//     console.log(num);
//     num++;
// }
// let num = 50;
// do {
//     console.log(num);
//     num++;
// } while (num < 55);

// for (let  i = 1; i < 8; i++ ) {
//     if (i == 6) {
//         continue;
//     }
//     console.log(i)
// }
// let num = 123
// function showMesssage(text) {
//     alert(text);
   
//    console.log(num)
// }

// showMesssage("Hello world");
// console.log(num);

// function calc(a,b) {
//     return (a + b);
// }

let calc = (a,b) =>a+b

console.log(calc(4,3));

console.log(calc(6,9));


function retVar(){
    let num = 50;
    return num;
}

let anotherNum = retVar();
console.log(anotherNum);