const person1 = {
  first: "Yogesh",
  last: "Gupta",
  fullName: function (hometown, country) {
    return this.first + " " + this.last + " " + hometown + " " + country;
  },
};

const person2 = {
  first: "Shivam",
  last: "Bishen",
};

//call: With the call() method, you can write a method that can be used on different objects.

console.log(person1.fullName.call(person2, "Delhi", "India")); //first argument always be defined or help to identify the this keyword

//apply
//In call we pass the arguments as comma separated but in apply we pass the arguments in a single array

console.log(person1.fullName.apply(person2, ["Delhi", "India"]));

//bind: bind method return the copy of function which we use further
//The bind() method creates a new function instance whose this value is bound to the object that you provide
const result = person1.fullName.bind(person2, "Delhi", "India");
console.log(result);
console.log(result());
