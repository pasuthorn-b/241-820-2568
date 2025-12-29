//String, Number, Boolean, Object, Array

//1.String
let firstname ="John Doe";
console.log('Hello,' +firstname +'!')
const idcard = '123';
//2.Number
let age = 30;
let height = 5.9;

//3.Boolean
let isStudent = false;

//4.Object
firstname = 'test';
console.log('My name is', firstname, 'and I am', age, 'years old');

/*
+ บวก
- ลบ
* คูณ
/ หาร
% หารเอาเศษ
*/
let number0= 'john';
let number00= 'doe';

let result = number0 + number00;
console.log("ผลคูณ=",result);

//Conditional statements
//if, else if, else
//==, ===, !==, >, <, >= <=

/*
==
!=
>
<
>=
<=
*/
let number1 = 10;
let number2 = 20;
let condition1 = number1 <= number2; //Boolean ค่า true หรือ false
console.log("Result of condition is:", condition1);

/*
if
else if
else
*/
if(number1 <= number2) {
    console.log('This if')
} else if (number1 == number2){
    console.log('This else if')
} else {
    console.log('This else')
}

/*
Grade
>=80 A
>=70 B
>=60 C
>=50 D
<50  F
*/
let score = prompt("Enter your score :");
console.log("Your score :" +score)
if(score >=80) {
    console.log('A')
} else if (score >=70){
    console.log('B')
} else if (score >=60){
    console.log('C')
} else if (score >=50){
    console.log('D')
} else {
    console.log('F')
}

/*
&& และ
|| หรือ
! ไม่
*/
let number3 = 5
let number4 = 8
//true && false
let condition = !(number3 >= 3 || number4 >=10);
console.log("Condition:",condition)

let agee = 25;
let gender = 'ชาย';

//true && true = true
if(agee>=20 && gender == "ชาย"){
    console.log("ผู้ชายที่มีอายุ 20 ปีขึ้นไป")
}

let num = 20

if(num %2 ==0){
    console.log("เป็นเลขคู่")
}

/*
loop statements :
while
for
*/

let counter =-6;
while(counter < 10){
    console.log("Hello world")
    counter = counter + 1
    counter ++
}

for(let i=0; i<=10; i++){
    console.log('Hello World from for loop')
}