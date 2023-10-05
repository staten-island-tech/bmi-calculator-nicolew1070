const date = new Date();
const year = date.getFullYear();
const Jane = {
    firstName: "jane",
    lastName: "Ladooda",
    graduated: false,
    DOB: 2008,
    siblings: ["katie", "snake"],
    age: function(){
        return (year - this.DOB);
    }
    };

console.log(jane.age());