// function user(username,logincount,isloggedin){
// this.username=username;
// this.logincount=logincount;
// this.isloggedin=isloggedin;
// }

// const userOne=user('hammad',55,true)        //error bcz not use new word
// const userTwo=user('sadiq',77,false)
// console.log(userOne);


// function user(username,logincount,isloggedin){
// this.username=username;
// this.logincount=logincount;
// this.isloggedin=isloggedin;
// }

// const userOne=new user('hammad',55,true)
// const userTwo=new user('sadiq',77,false)
// console.log(userOne);




// function user(username,logincount,isloggedin){
// this.username=username;
// this.logincount=logincount;
// this.isloggedin=isloggedin;

// this.greatfun=function(){
//     console.log(`${this.username}`);
// }
// }
// const userOne=new user('hammad',55,true)
// console.log(userOne);
// console.log(userOne.greatfun());




//===============        prototype     =================================



// function creatuser(username,score){
// this.username=username;
// this.score=score;
// }

// creatuser.prototype.printme=function(){
// console.log(`score is ${this.score}`);
// }

// creatuser.prototype.increment=function(){
// return this.score+2
// }

// let user=new creatuser('hammad',25)

// console.log(user);
// // console.log(user.printme());
// console.log(user.increment());






//============================================



// let heroes={
//     thor:"hammer",
//     spiderman:"sling",

//     spiderpower: function(){
// console.log(`spiderman power is ${this.spiderman}`);
//  }
// }

// heroes.spiderpower();





// let heroes={
//     thor:"hammer",
//     spiderman:"sling",

//     spiderpower: function(){
// console.log(`spiderman power is ${this.spiderman}`);
//  }
// }

// Object.prototype.hammad=function(){
//     console.log(`${this.thor} is here`);
    
// }

// heroes.spiderpower();
// heroes.hammad();




// let myhero=["thor","spiderman"]
// Object.prototype.hammad=function(){
//     console.log("hammad is here"); 
// }

// myhero.hammad()


// let names = ["Hammad", "Ali"];
// Array.prototype.sayHello = function () {
//     console.log(`${this.length}`);
// };

// names.sayHello();  // Output: "Hello from Array!"



// let str="hammad       "
// String.prototype.sariExtraSpaceKhatam=function(){
// console.log(this);
//     console.log(`the length is ${this.trim().length}`);
    
// }
// str.sariExtraSpaceKhatam()
// "sadiq ".sariExtraSpaceKhatam()


// let user={
//     name:"hammad",
//     eamil:"hammad@gmail.com"
// }
// const teacher={
//     makevideo:true
// }
// const teachersport={
//     isAvailable:false
// }
// const TAsupport={
//     makeassignment:"JS assignment",
//     fulltime:true,
// __proto__:teacher
// }
// console.log(TAsupport);
// console.log(TAsupport.makevideo);      // true bcz proto say excess kia hua hay teacher
// console.log(TAsupport.isAvailable);    // undefined bcz proto say uski property nhi li


// teacher.__proto__=user
// console.log(teacher.eamil);







//===============================================================
//                            .call and this,  use

//            terminal and window different


// function setUsername(username){
// this.username=username
// console.log(`called ${username}`);
// }
// function creatuser(username,email,password){
// setUsername(username)

// this.email=email
// this.password=password
// }
// console.log(new creatuser('hammad','hamm@gmail.com',123));





// function setUsername(username){
// this.username=username
// }
// function creatuser(username,email,password){
// setUsername.call(this, username)

// this.email=email
// this.password=password
// }
// console.log(new creatuser('hammad','hamm@gmail.com',123));

