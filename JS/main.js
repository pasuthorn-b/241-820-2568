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
/*
array
*/

let a =10
let b =20
let c =30
console.log('a',a,'b',b,'c',c)

let agess =[10,20,30]//array 3 items
console.log('ages:',agess)
console.log('ages[1]:',agess[1])
//1.แทนที่ ค่าข้อมูลในarray
agess = [15,25]
console.log('ages list:',agess)
//2.ต่อ array
agess.push(35)
console.log('ages after push:',agess)
//3. ลบข้อมูลตัวสุดท้ายใน array
agess.pop()
console.log('ages after pop:',agess)

let ages1 = [25,30,35,40,45]
console.log('Ages',ages1)
/*
array
*/
let fruits = ['apple', 'banana', 'cherry']
console.log('Fruits:',fruits)
fruits.push('mango')
console.log('First fruit:',fruits.length)

for(let i =0;i <=fruits.length; i++){
    console.log('friut at index ${1}:',fruits[1])
}
/*
object
*/
let student ={
    age:30,
    namee:"John",
    grade: 'A'
}
console.log(student);
console.log('name:', student.namee);
console.log('age:',student.age);
console.log('grade:',student.grade);

/*
function
*/

let score1 = 10
let score2 = 80
function calculation_grade(paraneter_score){
    if (score >=80){
    grade='A'
    }else if (score >=70){
    grade='B'
    }else if (score >=60){
    grade='C'
    }else if (score >=50){
    grade='D'
    }else {
    grade = 'F'
    }
    return grade
}
//เรียกใช้ฟังชันก์calculation_grade
let grade01 = calculation_grade(score1)
let grade02 = calculation_grade(score2)
console.log('Score1: '+score1+',Grade:'+grade01)
console.log('Score2: '+score2+',Grade:'+grade02)


let scores = [90,80,70,60,50];

for(let i=0; i<scores.length; i++){
    console.log(`scores ${i + 1}: ${scores[i]}`);
}
    /*
    scores[0] = scores[0]*2
    scores[1] = scores[1]*2
    scores[2] = scores[2]*2
    scores[3] = scores[3]*2
    scores[4] = scores[4]*2
    */
    scores = scores.map((s)=>{
        return s * 2;
    })
    scores.forEach((s) =>{
    console.log(`score:${s}`);
})

//map, filter

let scores1 = [90,80,70,60,50];

for (let i =0;i <scores1.length;i++){
    console.log(scores[i]);
   // if (scores[i]>=60){
   //     newScores1.push(scores1[i]);
   // }
}
let newScores1 = scores1.filter(function(score){
    return score >= 60;
})

newScores1.forEach((ns) =>{
    console.log('new score:'+ns);
})

/*
object functuions
*/

let Student = [
    {Name: "John",Age:20,grade:"A"},
    {Name: "Jane",Age:22,grade:"B"},
    {Name: "Jim",Age:21,grade:"C"},
]
console.log('Student',Student[0]);

let students = Student.find((s)=>{
    if (s.Name == "Jane"){
        return true;
    }
})
let dubblescoreStudents = Student.map((s)=>{
    s.Age = s.Age *2;
    return s;
});
let highGradeStudents = Student.filter((s)=>{
    return s.grade ==="A";
})
console.log('Student',students);
console.log('Dubble Score students',dubblescoreStudents);
console.log('High Grade Students',highGradeStudents);