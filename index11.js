//                   closure and lexical scoping

// function init() {
//     let name = "Mozilla";
//   function displayName() {
//     console.log(name);
//   }
//   displayName();
// }
// init();




// function makeFunc() {
//     const name = "Mozilla";
//     function displayName() {
//       console.log(name);
//     }
//     return displayName;
//   }
//   const myFunc = makeFunc();
//   myFunc();


// function handler(color){
//     // document.body.style.backgroundColor=`${color}`
//     return function(){
//     document.body.style.backgroundColor=`${color}`

//     }
// }

// document.querySelector("#yellow").addEventListener('click',handler("yellow"))
// document.querySelector("#green").addEventListener('click',handler("green"))












//                     .call     .apply



// function sayHello(city, country) {
//   console.log(`${this.name} from ${city}, ${country}`);
// }
// const person={name:"hammad"}

// sayHello.call(person,"Paris", "France");




// function sayHello(city, country) {
//   console.log(`${this.name} from ${city}, ${country}`);
// }
// const person={name:"hammad"}

// sayHello.apply(person,["Paris", "France"]);







// const person1 = { name: "Alice" };
// const person2 = { name: "Bob" };

// function greet(greeting) {
//   console.log(`${greeting}, I am ${this.name}`);
// }

// greet.call(person1, "Hello");  // Hello, I’m Alice
// greet.apply(person2, ["Hi"]);  // Hi, I’m Bob


// const boundFunc = greet.bind(person1, "Hey");
// boundFunc();  // Hey, I’m Alice






//                 --> passing arguments(values vs reference)
        
//    By value 


// function update(x) {
//   x = x + 1;
// }
// let a = 5;
// update(a);      
// console.log(a);  // 5  didn't change




//     By reference


// function update(obj) {
//   obj.value = 100;
// }
// let myObj = { value: 1 };
// update(myObj);
// console.log(myObj.value);  // 100 changed











//          --> call back function


// function sayHello(name) {
//   console.log("Hello, " + name);
// }
// function processUser(callback) {
    
//   callback("Ali"); // Calls sayHello("Ali")
// }
// processUser(sayHello);  // Output: Hello, Ali






//         --> functions returning function



// function outer() {
//   return function inner() {
//     console.log("Hello from inner!");
//   };
// }

// const myFunc = outer();  // Returns the inner function
// myFunc();                // Output: Hello from inner!





//             closure
//Closure ka matlab ye hai ke inner function ko outer function ki variables yaad rehtay hain, chahe outer function khatam bhi ho chuka ho.

// function outer() {
//   let name = "Ali";  // outer ka variable

//   return function inner() {
//     console.log("Hello " + name);  // inner ko 'name' yaad hai ali
//   };
// }

// const greet = outer();  // outer khatam ho gaya
// greet();  // Output: Hello Ali 









//                          array .fill


// const arr = new Array(5).fill("Hello");
// console.log(arr);  // ["Hello", "Hello", "Hello", "Hello", "Hello"]



// const arr = Array.from({length:8},(v,i)=>i)
// console.log(arr);  // [0, 1, 2, 3, 4]


// function createRange(start, end) {
//   return Array.from({ length: end-start+1 }, (v, i) => start + i);
// }
// console.log(createRange(3, 7));  // [3, 4, 5, 6, 7]










//                            Array Destructuring



// const arr = [10, 20, 30];
// const [a, b, c] = arr;

// console.log(a); // 10
// console.log(b); // 20
// console.log(c); // 30




// const numbers = [1, 2, 3, 4];
// const [first, , third] = numbers;

// console.log(first); // 1
// console.log(third); // 3





// const [a , b , c ] = [10,7,9];
// console.log(a); // 10
// console.log(b); // 7 
// console.log(c); // 9 




//                                swap

// let x = 5;
// let y = 10;

// [x, y] = [y, x];

// console.log(x); // 10
// console.log(y); // 5





// function sum([a, b]) {
//   return a + b;
// }

// console.log(sum([3, 4])); // 7





// const [first, ...rest] = [1, 2, 3, 4];
// console.log(first); // 1
// console.log(rest);  // [2, 3, 4]



















//                    --> object destruction


// const user = {
//   name1: 'John',
//   age: 30,
//   city: 'New York'
// };
// const { name1, age } = user;

// console.log(name1); // John
// console.log(age);  // 30





// function greet({ name, age }) {
//   console.log(`Hello, ${name}. You are ${age} years old.`);
// }
// greet({ name: 'Alice', age: 25 });





// const response = {
//   data: { id: 1, title: "Post Title" },
//   status: 200
// };
// console.log(data);





// const response = {
//   data: { id: 1, title: "Post Title" },
//   status: 200
// };
// const { data, status } = response;
// const {title,id}=data
// console.log(title);



//Rename a variable

// const user = {
//  name: 'Ali' 
// };
// const { name: userName } = user;

// console.log(userName); // Ali




// const { username = "Guest" } = {};
// console.log(username); // Guest



// const {data,status} = {
//   data: { id: 1, title: "Post Title" },
//   status: 200
// };
// console.log(data);











//                       --> spread patterns/operators

// const arr1 = [1, 2];
// const arr2 = [3, 4];
// const merged = [...arr1, ...arr2];
// console.log(merged); // [1, 2, 3, 4]


// const base = [1, 2];
// const result = [0, ...base, 3];
// console.log(result); // [0, 1, 2, 3]


// const numbers = [5, 6, 7];
// console.log(Math.max(...numbers)); // 7


// const word = "JS";
// const chars = Array(...word)
// console.log(chars); // ['J', 'S']

// same as above

// const word = "JS";
// const chars = [...word];
// console.log(chars); // ['J', 'S']


// const nums = [1, 2, 2, 3];
// const unique = [...new Set(nums)];
// console.log(unique); // [1, 2, 3]



// const [todos, setTodos] = useState([{ id: 1, task: 'Study' }]);

// const newTodo = { id: 2, task: 'Exercise' };
// setTodos([...todos, newTodo]);





// const user = { name: "Ali", age: 22 };
// const copy = { ...user };
// console.log(copy); // { name: "Ali", age: 22 }




// const user = { name: "Ali", age: 22 };
// const updated = { ...user, age: 25 };
// console.log(updated); // { name: "Ali", age: 25 }





// const state = {
//   user: { name: "Ali" },
//   isLoggedIn: true,
// };

// const updatedState = {
//   ...state,
//   user: { ...state.user, name: "Ahmed" },
// };

// console.log(updatedState);















//                   --> short circuiting



//    Operators Involved
//    || (Logical OR)
//    && (Logical AND)
//    ?? (Nullish Coalescing — related concept)


// Returns A if A is truthy, otherwise returns B.
// let username = input || 'Anonymous';      // agar input na ai to Anonymous a jay ga


// console.log('Ali' || 'Guest');           // 'Ali' (truthy, so stops here)
// console.log('' || 'Guest');              // 'Guest' ('' is falsy)


// function greet(name) {
//   name = name || 'Guest';
//   console.log(`Hello ${name}`);
// }
// greet()


// // Instead of
// let theme = settings.theme ? settings.theme : 'light';

// // You can write
// let theme = settings.theme || 'light';








// returns A if A is falsy, otherwise returns B.
//Returns B if A is truth
// isLoggedIn && showDashboard();


// console.log(0 && 'hello');    // 0
// console.log(1 && 'hello');    // 'hello'


// // Instead of
// if (user) {
//   showProfile();
// }

// // You can write
// user && showProfile();







// Returns A if A is NOT null or undefined, otherwise returns B.

// let value = null ?? 'default';
// console.log(value); // 'default'

// let value2 = 0 ?? 100;
// console.log(value2); // 0 (nullish is only null/undefined)




















//                       --> logical assign operator


// AND Assignment (&&=)
// let isLoggedIn = true;
// isLoggedIn &&= false;
// console.log(isLoggedIn); // false



//  OR Assignment (||=)
// let name = '';
// name ||= 'Guest';
// console.log(name); // "Guest"


// Nullish Assignment (??=)
// let count = null;
// count ??= 10;
// console.log(count); // 10










//                    --> Enhanced object literals


// const x = 10;
// const obj = { x };
// console.log(obj);



// const key = "id";
// const obj = {
//   [key]: 123
// };
// console.log(obj.id); // 123



// const name = "Alice";
// const age = 25;
// const prop = "country";

// const user = {
//   // 1. Property shorthand
//   name,
//   age,

//   // 2. Method shorthand
//   greet() {
//     console.log(`Hello, ${this.name}`);
//   },

//   // 3. Computed property name
//   [prop]: "USA",
// };

// console.log(user);
// // { name: 'Alice', age: 25, greet: [Function: greet], country: 'USA' }

// user.greet(); // Hello, Alice








//                       --> optional Chaining (?.)


// const user = {
//   name: "Alice",
//   address: {
//     city: "Paris"
//   }
// };

// console.log(user.address?.city);     // Paris
// console.log(user.profile?.email);    // undefined (no error!)




// const user = {
//   sayHi() {
//     return "Hi!";
//   }
// };

// console.log(user.sayHi?.());   // "Hi!"
// console.log(user.sayBye?.());  // undefined ( no error)



// let user={
//  profile:{
//     email:"hammad@gmail"
//  }
// }
// console.log(user?.profile?.email);






//                 --> sets


// let fellname=new Set(["hammad","hammad","huzaifa","sadiq","ali","hammad"])
// fellname.add("khan")

// console.log(fellname);


// const tags = new Set(["js", "html", "css"]);
// console.log(tags.has("js")); // true



// const visitors = new Set();
// visitors.add("user1");
// visitors.add("user2");
// visitors.add("user1"); // Ignored (duplicate)
// console.log(visitors.size); // 2





// const setA = new Set([1, 2, 3]);
// const setB = new Set([2, 3, 4]);
// // Union
// const union = new Set([...setA, ...setB]); // {1, 2, 3, 4}
// // Intersection
// const intersection = new Set([...setA].filter(x => setB.has(x))); // {2, 3}
// // Difference (A - B)
// const difference = new Set([...setA].filter(x => !setB.has(x))); // {1}





//                   --> maps

// const myMap = new Map();
// myMap.set("name", "Alice");  // Key = "name", Value = "Alice"
// myMap.set(123, "Number Key"); // Key = 123
// myMap.set({}, "Object Key"); // Key = an object

// console.log(myMap.get("name")); // "Alice"
// console.log(myMap.get(123));   // "Number Key"

// console.log(myMap.has("name")); // true
// console.log(myMap.has("age"));  // false

// myMap.delete("name"); // Removes "name" key
// console.log(myMap.size); // 2 (after deleting "name")



// const myMap = new Map();
// myMap.set({ id: 123 }, "Object Key");
//     console.log(myMap); // "Object Key"
// // Find by ID
// for (const [key, value] of myMap) {
//   if (key.id === 123) {
//     console.log(value); // "Object Key"
//   }
// }

