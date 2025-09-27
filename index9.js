//                     classes
//terminal use


// class user{
//   constructor(username,email,password){
// this.username=username;
// this.email=email;
// this.password=password
//   }
// passwordSpecial(){
//     return `${this.password}abc`
// }
// struppercase(){
//     return `${this.username.toUpperCase()}`
// }
// }
// let one=new user("hammad","hammad@gmail.com",1234)
// console.log(one);
// console.log(one.passwordSpecial());
// console.log(one.struppercase());



//      same thing with function

// function user(username,email,password){
//     this.username=username;
//     this.email=email;
//     this.password=password
// }
// user.prototype.passwordSpecial=function(){
//     return `${this.password}abc`
// }
// user.prototype.struppercase=function(){
//     return `${this.username.toUpperCase()}`
// }

// let one=new user("hammad","hammad@gmail.com",1234)
// console.log(one);
// console.log(one.passwordSpecial());
// console.log(one.struppercase());






// class user{
//     constructor(username){
// this.username=username

//     }
//     logme(){
//         console.log(`Username is ${this.username}`);
//     }
// }
// class teacher extends user{
//     constructor(username,email,password){
//         super(username)
//         this.email=email;
//         this.password=password
//     }
//     addcourses(){
//         console.log(`only teacher add courses ${this.username}`);
//     }
// }
// let data=new teacher("hammad",'@gmail.com',25)
// console.log(data);
// data.logme()
// data.addcourses()


// let datasec=new user("sadiq")
// console.log(datasec);
// datasec.logme()
// datasec.addcourses()                   //user not add courses








// class user{
//     constructor(username){
// this.username=username
//     }
//     static logme(){
//         console.log(`Username is ${this.username}`);
//     }
// }
// class teacher extends user{
//     constructor(username,email){
//         super(username)
//         this.email=email;
//     }
// }
// let data=new teacher("hammad",'@gmail.com')
// console.log(data);
// data.logme()                              //error static use it dont give excess


// let datasec=new user("sadiq")
// console.log(datasec);
// console.log(datasec.logme());                // user ko bhi excess nhi ha




//                     .bind()

// class React{
//     constructor(){
//         this.library="React"
//         this.server="https:localhoste:300"
//         document.body.querySelector('button').addEventListener('click',this.handlerClick.bind(this))
//     }
//     handlerClick(){
//         console.log("button clicked");
//         console.log(this);
//         console.log(this.server);
        
//     }
// }
// let app=new React();














//            object related          math.pi

//Math.PI ki value change nhi ho sakti not writable,enumerable and configuration

// const descriptor=Object.getOwnPropertyDescriptor(Math,'PI')
// console.log(descriptor);




// const chai={
//     name:'ginger chai',
//     price:250,
//     isavailable:true
// }
// console.log(chai);





// const chai={
//     name:'ginger chai',
//     price:250,
//     isavailable:true
// }
// console.log(Object.getOwnPropertyDescriptor(chai,"name"));

// Object.defineProperty(chai,'name',{                       //ab koi nama change nhi kr sakta
//     enumerable:false,
//     writable:false
// })

// console.log(Object.getOwnPropertyDescriptor(chai,"name"));






// const chai={
//     name:'ginger chai',
//     price:250,
//     isavailable:true
// }
// // console.log(chai);
// for (let [key,value] of Object.entries(chai)) {
// console.log(`${key} : ${value}`);
// }




// const chai={
//     name:'ginger chai',
//     price:250,
//     isavailable:true,
//    orderchai:function(){
//     console.log(`${this.name} nhi bani`);
//    }
// }
// for (let [key,value] of Object.entries(chai)) {          //code blast ho gya
// console.log(`${key} : ${value}`);
// }

// for (let [key,value] of Object.entries(chai)) {          //code blast nhi hua
//    if(typeof value !== 'function'){
//     console.log(`${key} : ${value}`);
//  }}


// for (let key in chai) {                           //code blast nhi hua
//    if(typeof chai[key] !== 'function'){
//     console.log(`${key} : ${chai[key]}`);
//  }
// }





// agar hum khud apnay object ko enumerable false kr day to loop nhi lagay ga



// const chai={
//     name:'ginger chai',
//     price:250,
//     isavailable:true

// }
// Object.defineProperty(chai,'name',{                       //ab koi nama change nhi kr sakta
//     enumerable:false,
// })

// console.log(Object.getOwnPropertyDescriptor(chai,"name"));

// for (let [key,value] of Object.entries(chai)) {             //name ko enumerable kia is liay wo loop may show nhi ho rha
// console.log(`${key} : ${value}`);
// }


// for (let value in chai) {            
//     console.log(`${value}: ${chai[value]}`);
//     }

