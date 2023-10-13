const date = new Date();
const year = date.getFullYear();

const students = [ 
    {
    firstName: "jane",
    lastName: "Ladooda",
    graduated: false,
    DOB: 2008,
    siblings: ["katie", "snake"],
    age: function(){
        return (year - this.DOB);
    },
    }, 
    
    {
    firstName: "john",
    lastName: "smith",
    graduated: false,
    DOB: 2008,
    siblings: ["frank", "casey"],
    age: function(){
        return (year - this.DOB);
    },
    }, 
    
    {
    firstName: "dakota",
    lastName: "stabeelee",
    graduated: true,
    DOB: 2008,
    siblings: ["freddy", "lily"],
    age: function(){
        return (year - this.DOB);
    },
    },
];

const numbers = [1,2,3,4,5,6,7,8,9];
//index starts at 0
//console.log(numbers[numbers.length - 1]);
//arrow function ()=> auto returns output, this keyword points global
/*numbers.forEach((number,index)=> console.log(number,index))*///runs a function for each item in the array 
/*const graduated= students.filter((students)=>students.graduated === true);
console.log(graduated);*/

students.forEach((students) => 
students.siblings.forEach((sib) => console.log(sib))
);

students
.filter((student)=>student.graduated)
.forEach((el)=>console.log(el.firstName));