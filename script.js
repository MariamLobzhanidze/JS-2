'use strict'

// homework_1

let numberArray = [
1977,
1978,
1998,
2006,
2024
]
console.log(numberArray[1977]+numberArray[1978]+numberArray[1998]+numberArray[2006]+numberArray[2024]);
console.log(numberArraySum);

// homework_2

let person1 = {
  name: "Mariam",
  age: 25,
  address: "Tbilisi",
};

let person2 = {
    name: "David",
    age: 32,
    address: "Khashuri",
};

let person3 = {
    name: "Ani",
    age: 23,
    address: "Batumi",
},

let personArray= [
   {
    name: "Mariam",
    age: 25,
    address: "Tbilisi",
  },
  
 {
      name: "David",
      age: 32,
      address: "Khashuri",
  },
  
  {
      name: "Ani",
      age: 23,
      address: "Batumi",
  },
];

  // homework_3

  console.log(`My name is ${person1.name}. My age is ${person1.age}. My address is ${person1.address}.`);

 

  // homework_4

  if (personArray[1].age < 19) {
    console.log("I am a teenager")
  } else(
    console.log("I'm an adult")
);


  // homework_5
  let numbersArray = [
    27, 14, 33, 72, 11
    ]
console.log(27, 14, 33, 72, 11)

// work 6

let currentDay;
switch(new Date().getDay()){
    case 0:
        currentDay= "Sunday";
        break;
    case 1:
        currentDay="Monday";
        break;
    case 2:
        currentDay="Tuesday";
        break;
    case 3:
        currentDay="Wednesday";
        break;
    case 4:
        currentDay="Thursday";
        break;
    case 5:
        currentDay="Friday";
        break;
    case 6:
        currentDay="Saturday";
        break;
}
console.log(`Today is ${currentDay}.`)