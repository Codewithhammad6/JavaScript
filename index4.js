//     ****         control flow       ****
// Equal to ==
// Not equal to !=
// Equal to & type ===
// Not equal to & type !==
// >, >=, <, <=
// Logical AND &&
// Logical OR ||
// Logical NOT !

// if(true){                                             //excute bcz condition true
//     console.log("user loged in this website")
// }

// if(false){                                            //not excute bcz condition false
//     console.log("user loged in this website")
// }

// let userloggedIn=true;
// if(userloggedIn){
//     console.log("user loged in this website")
// }

// let username="hammad"
// if(username=="hammad"){
//     console.log(`${username} has logged in`)
// }

// let temp = 40;
// if (temp <= 50) {
//   console.log("temp is less than 50");
// } else {
//   console.log("temp is greater than 50");
// }
 


// let score=1000;
// if(score < 500){
//     console.log("score is less than 500");
// }
// else if(score < 700){
//     console.log("score is less than 700");
// }
// else if(score < 900){
//     console.log("score is less than 900");
// }
// else if(score < 1200){
//         console.log("score is less than 1200");
//     }
    




//                         practice


// let userloggedIn=prompt("sir loggedin ")
// let creditCard=prompt(" sir give me creditcard")

// if(userloggedIn==="" || userloggedIn===undefined){
//     userloggedIn=false;

// }
// if(creditCard==="" || creditCard===undefined){
//     creditCard=false;
// }
// if(userloggedIn && creditCard){
//     console.log(`welcome sir use loggesin and have creditcard`)
// }
// else if(userloggedIn){
//     console.log(`sorry sir you have no creditcard`);
// }
// else{
//     console.log(`sorry sir you have no loggedin`);
// }







// ========================       switch      =========================================

// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }



// let num=10;
// switch (num) {
//     case 10:
//         console.log("yes match")
//         break;
//     default:
//         console.log("not match");
//         break;
// }



// let num=11;
// switch (num) {
//     case 10:
//         console.log("yes match")
//         break;
//     default:
//         console.log("not match");
//         break;
// }




// let month=3;
// switch (month) {
//     case 1:
//      console.log("january"); 
//         break;
//     case 2:
//      console.log("feb"); 
//         break;
//     case 3:
//      console.log("march"); 
//         break;                        //if break remove it excute all all below code except default 
//     case 4:
//      console.log("april"); 
//         break;
//     default:
//         console.log("not match");
//         break;
// }





//=====================================================================



//                          check is true or false by converting into bo0lean
//                          jab user detail enter kray ga tab ya kam ay ga

// let user=true;           // true
// let user="hy";           // true
// let user="0";            // true
// let user=1;              // true
// let user=[];             // true
// let user={};             // true
// let user=7655n;          // true
// let user=("hy");         // true

// let user=0;              // false
// let user="";             // false
// let user=-0;             // false
// let user= 0n;            // false
// let user= false;         // false
// let user= undefined;     // false
// let user= null;          // false
// let user= NaN;           // false

// console.log(Boolean(user))




// let email="h@gmail.com";
// if(email){
//     console.log("Get email ");
// }
// else{
//     console.log("Don't get email ");
// }



// let email="";
// if(email){
//     console.log("Get email ");
// }
// else{
//     console.log("Don't get email ");
// }



//                 check array is empty or not

// let arr=[];
// if(arr.length===0){
//     console.log("Array is empty")
// }


//                 check object is empty or not

// let object={};
// if(Object.keys(object).length === 0){
//     console.log("Object is empty")
// }


//                    this concept use in above

// let object={
//     username:"hammad",
//     age:19
// }
// console.log(Object.keys(object))
// console.log(Object.keys(object).length)




//=========   Nullish Coalescing Operator   (??): only for null and undefined   ============


// let val=5 ?? 10;
// let val=null ?? 10;           //agar null ya undefined ho to ?? kay bade wala run krta hay
// let val=undefined ?? 10
// let val=undefined ?? 10 ?? 20

// console.log(val)




//=================  Terniary Operator   ===================
//  condition ? true : false


// const teaprice=200;

// teaprice > 150 ? console.log("price is high") : console.log("price is low")
