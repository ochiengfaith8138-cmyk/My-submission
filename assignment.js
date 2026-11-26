let firstName="Faith" //i have use firstNmae to store my datatype which is a string since it is enclosed in a double qoutation marks.
console.log(firstName);
let age=20 //age is number
console.log(age);
let days=7
console.log(days);
let isloggedin="true"
console.log(isloggedin);
let favouritecolour="Blue"
console.log(favouritecolour);
const pI=3.142
console.log(pI);


let someVariable;
console.log(someVariable);

// PART D-STRINGS
// USING ADDITION SIGN
let firstName="Faith"
let lastName="Ochieng"
console.log(firstName+" "+lastName)


// USING CONCAT()
let firstName="Faith"
let lastName="Ochieng"
const combinedName=firstName.concat(" ",lastName);
console.log(combinedName)

//USING TEMPLATE LITERAL
const myName=`${firstName} ${lastName}`
console.log(myName)


// CHANGING CASES
 const message="our session starts at 9pm."
 console.log(message.toUpperCase());
 console.log(message);



 // CUTTING
 let greeting="Hello world"
 console.log(greeting.slice(0,5));
 console.log(greetings.slice(-5));


 //  SEARCHING AND REPLACING
 let meetingName="Introduction to Javascript"
 console.log(meetingName.firstindexOf("a"));
 console.log(meetingName.lastIndexOf("a"));
 const updateMeetingName=(meetingName.replace("Javascript","Typescript"));
 console.log(updateMeetingName);

 //CLEANING INPUT
 const userInput="hello@example.com"
 console.log(userInput.lengthbefore())
 console.log(userInput.trimEnd());
 console.log(userInput.trimStart());

 //SPLITTING
let vowels='AEIOU'
console.log(vowels.split(''));

//PADDING
let myProjects="My projects proposal"
console.log(myProjects.padEnd(4,"----"));

//PART E-OPERATORS
let a=7
let b=3
console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);
console.log(a%b);
// PART E2 INCREMENT AND DECREMENT
let count=5
console.log(count++);
console.log(count);
console.log(++count);
console.log(count--);
console.log(--count);
// ASSIGNMENT OPERATOR
let score=10
console.log(score);

score+=30;//10+30=40
console.log(score);

score*=2;//40*2=80
console.log(score);

score+=30;//80+30=110
console.log(score);

score-=10;//110-10=100
console.log(score);

// PART E4-COMPARISON
console.log("5" == 5); // true - == changes "5" to 5, only checks value
console.log("5" === 5); // false - === checks value AND type, string vs number

console.log(0 == false); // true - == changes false to 0
console.log(0 === false); // false - number vs boolean, different type

console.log(null == undefined); // true - == says they are both "empty"
console.log(null === undefined); // false - different types

console.log(10 >= 10); // true - 10 is equal to 10
console.log("b" > "a"); // true - b comes after a in alphabet

// Why developers prefer === :
// == does hidden type conversion, so it can surprise you.
// === is strict, no conversion, so what you see is what you get.


// E6. Putting it together
let num1 = 5;
let num2 = 10;

// 1. num2 is double num1
console.log(num2 === num1 * 2); // true - 10 === 5 * 2

// 2. At least one of them is even
console.log(num1 % 2 === 0 || num2 % 2 === 0); // true - num2 is even

// 3. Both are positive
console.log(num1 > 0 && num2 > 0); // true - 5 > 0 and 10 > 0

// 4. num1 is odd and num2 is even
console.log(num1 % 2 !== 0 && num2 % 2 === 0); // true - 5 is odd, 10 is even


//BONUS CHALLANGE

// Student Profile Card
const name = "JANE DOE";
const course = "Web Development";
let age = 21;
let isLoggedIn = true;

// Must be 18 or older AND logged in
let isEligible = age >= 18 && isLoggedIn;

console.log("===========================");
console.log("NAME:     " + name);
console.log("COURSE:   " + course);
console.log("AGE:      " + age);
console.log("ELIGIBLE: " + isEligible);
console.log("===========================");
