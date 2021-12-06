// 1 zavdannia

// let i = prompt("please enter and integer");
// let total = 1;
// while(i > 1 ){
//  total *= i;
//  i--;
// }
// console.log(total);

// 2 zavdannia

// let a = 1000;
// while(a<9999){
//     a+=3;
//     console.log(a);
// }

// 3 zavdannia

// let a = 1;
// while(a<55){
//     a+=2;
//     console.log(a);
// }

// 4 zavdannia

// let a = 95;
// while(a>0){
//     a-=5;
//     console.log(a);
// }

// 5 zavdannia

// let a = 1;
// let b = 2;
// while(a<=20){
//     b*=2;
//     console.log(b);
//     a++;
// }

// 6 zavdannia

// let a = 2;
// while(a<10000){
//     a=2*a-1;
//     console.log(a);
// }

// 7 zavdannia

// let a = -166;
// while(a<72){
//     a = 2*a+200;
//     console.log(a);
// }

// 8 zavdannia

let a = +prompt('Введіть число');
let b = +prompt('Введіть степінь числа');
let i = 1;
let result = 1;

while(i<=b){
    result*=a;
    i++;
}
if(b>0){
    console.log(result);
}
else if (b<0){
   // не знаю як це зробити
}else if(b===0){
    console.log(1);
}





