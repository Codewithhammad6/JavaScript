// function myname(){
//     console.log("hammad")
//     console.log("sadiq")

// }
// myname();



// function calculatesum() {
//     console.log(2+6)
// }
// calculatesum()



// function calculatesum(num1,num2) {
//     console.log(num1+num2)
// }
// calculatesum(7,5)



// function calculatesum(num1,num2) {
//     return num1+num2;
// }
// let sum=calculatesum(18,5);
// console.log(sum);




// function loginuser(username){
// return `${username} is just logged in`
// }
// let data=loginuser("Hammad Choudhary")
// console.log(data);




// function loginuser(username){
//     if(username ===undefined || username===""){
//         return `PLEASE ENTER NAME`
//         }
//     else{
//     return `${username} is just logged in`
//     }
//     }
//     let data=loginuser("Hammad")
//     console.log(data);



// function calculatecartprice(...num1){
//     return num1;
// }
// console.log(calculatecartprice(200,300,400,500));





// function calculatecartprice(val1,val2,...num1){        //200 is val1 and 300 val2 baki num1
//     return val1;
// }
// console.log(calculatecartprice(200,300,400,500));





//                            use object in function

// let user={
//     username:"hammad sadiq",
//     age:19
// }
// function userdetails(anyobj){
// console.log(`username is ${anyobj.username} and age is ${anyobj.age}`);
// }
// userdetails(user)


// let user={
//     username:"hammad sadiq",
//     age:19
// }
// function userdetails(anyobj){
// console.log(`username is ${anyobj.username} and age is ${anyobj.age}`);
// }
// userdetails({username:"huzaifa sadiq",age:67})




//             array in function

// let arr=[200,400,700,600]

// function arrayval(getarray){
// return getarray;
// }
// console.log(arrayval(arr))



//               nested function


// function one(){                       //two child ha one parent ,child parent ko axcess kr sakta hay
//     const username="hammad"              //one big hay two small two ice cream lay sakta hay
//     function two(){
//         const website="youtube"
//         console.log(username)
//     }
//     // console.log(website);                 //Error ab child say bahir parent kay scope may hain parent child axcess nhi kr sakta
//     two();                                    
// }
// one();




//             function express in 2 method

// console.log(addone(5))

// function addone(num){                 // in this we can also print num before function
// return num+1;
// }
// console.log(addone(5))



// const addone=function(num){            // error occur if print before function bcz we hold function in variable
// return num+1;
// }
// console.log(addone(5))





//=======================  arrow function  &&   this  ====================================

// const user={
//     username:"Hammad",
//     age:19,

//     welcomeMessage:function(){
//         console.log(`${this.username}, welcome to this website`);
        
//     }
// }
// user.welcomeMessage();







// const user={
//     username:"Hammad",
//     age:19,

//     welcomeMessage:function(){
//         console.log(`${this.username}, welcome to this website`);
//     }
// }
// user.welcomeMessage(user.username="Choudhary");





//         check output in terminal and console


// const user={
//     username:"Hammad",
//     age:19,

//     welcomeMessage:function(){
//         console.log(`${this.username}, welcome to this website`);
//         console.log(this);
        
//     }
// }
// user.welcomeMessage(user.username="Choudhary");
// console.log(this);






//        this work in object not in function

// function one(){
//     let username="hammad"
//     console.log(username);
    
// }
// one();



// function one(){
//     let username="hammad"
//     console.log(this.username);
    
// }
// one();



// function one(){
//     let username="hammad"
//     console.log(this);
    
// }
// one();




//                        normal function express as

// function one(){
//     let username="hammad"
//     console.log(this.username);
    
// }
// one();

//               convert above function into hold in some variable

// const one=function(){
//     let username="hammad"
//     console.log(this.username);
    
// }
// one();

//          convert above function into arrow function same work

// const one=()=>{
//     let username="hammad"
//     console.log(username);
    
// }
// one();






//              simple arrow function

// const addnum=(num1,num2) =>{
//     return num1+num2;
// }
// console.log(addnum(18,5));


//            same as above can be express as if one single line code

// const addnum=(num1,num2) => num1+num2;
// console.log(addnum(18,5));


// const addnum=(num1,num2) => (num1+num2);        //curly bracket may return lazmi hay parantheses may nhi
// console.log(addnum(18,5));



// const addnum=() => ({username:"hammad"});      //object in arrow function
// console.log(addnum());






// ============ Immeiately Invoked Function Expression  (IIFE)   ()(); =======================
// use for = global population say batchnay kay liay immediately invoked funection use krtay hain

// (function one(){
//     console.log("Hello");
// })();


//                         same as above bass arrow function hay


// ( ()=>{
//     console.log("Hello");
// })();


// ( (name)=>{
//     console.log(`Hello ${name}`);
// })("Hammad");

