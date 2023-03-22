console.log("-------------------- Method Borrowing --------------------");
console.log("");

// Example No : 1   =>

let studentOne = {
    hindi: 88,
    English: 59,
    Marathi: 92,
    Math: 72,
    SocialScience: 86,

    result: function (studentName, courseName) {
        console.log("student name : " + studentName);
        console.log("Course name : " + courseName);
        console.log(
            "total : " +
            (this.hindi +
                this.English +
                this.Marathi +
                this.Math +
                this.SocialScience) /
            5 +
            "%"
        );
    },
};
studentOne.result("Shubham", "Java");

// --------------------------------------------------------------------------------
console.log("");

// Example No : 2  =>

let studentTwo = {
    hindi: 66,
    English: 49,
    Marathi: 78,
    Math: 85,
    SocialScience: 60,
};
studentOne.result.call(studentTwo, "Abhinav", "cloud computing");

// --------------------------------------------------------------------------------
console.log("");

// Example No : 3  =>

const person1 = {
    name: "John",
    age: 15,
    displayAge: function () {
        console.log("He is " + this.age + " years old");
    },
};
person1.displayAge();

// --------------------------------------------------------------------------------
console.log("");

// Example No : 4  =>

const person2 = {
    name: "Mike",
    age: 30,
};
person1.displayAge.call(person2);

console.log(
    "-------------------------- spread operater-----------------------"
    );
    console.log("");
    
    // Example No : 1  =>
    
    let num1 = [11, 12, 13, 14, 15];
    let num2 = [16, 17, 18, 19, 20]
    let num3 = [21, 22, 23, 24, 25]
    let result = [...num1, ...num2, ...num3]
    console.log(result)
    
    // --------------------------------------------------------------------------------
    console.log("");
    
    
    // Example No : 2  =>
    
    const myVehicle = {
        brand: 'Ford',
    model: 'Mustang',
    color: 'red'
}

const updateMyVehicle = {
    type: 'car',
    year: 2021,
    color: 'yellow'
}

const myUpdatedVehicle = { ...myVehicle, ...updateMyVehicle }
console.log(myUpdatedVehicle)

// --------------------------------------------------------------------------------
console.log("");


// Example No : 3  =>

const user1 = {
    name1: 'Jen',
    age: 25
}

const user2 = {
    name1: 'Andrew',
    location: 'Paris'
}

const plususers = {...user1, ...user2}
console.log(plususers)

console.log(
    "-------------------------- Rest Operater-----------------------"
    );
    console.log("");
    
    // Example No : 1  =>
    
    function add(...numbers) {
        let total = 0;
        for (let i = 0; i < numbers.length; i++){
            total = total + numbers[i];
        }
        return total;
    }
    console.log(add(12,45,17,13,56,58,95,65,56,78,99,100))
    
    // --------------------------------------------------------------------------------
    console.log("");
    
    // Example No : 2  =>
    
    function sum(...num) {
        let total = 1;
        for (let i = 1; i < num.length; i++){
            total = total * num[i];
        }
        return total;
    }
    console.log(sum(5,9,7,3,6,4,1,56,5,7,3,1))
    
    // --------------------------------------------------------------------------------
    console.log("");
    
    // Example No : 3  =>

    function name5(...names) {
        return names
    }
    console.log(name5("Ashish","Malti","Amit","John","Shivam"))
