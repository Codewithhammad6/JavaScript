//                       Getter Setter


// class user{
//     constructor(username,password){
// this.username=username;
// this.password=password
// }
// get password(){
//     return `${this._password}008`
// }
// set password(value){
//     this._password=value
// }
// }
// const hammad=new user("Hammad@gmail.com",'1245')
// // console.log(hammad);
// console.log(hammad.password);




// class cyber{
//     constructor(email,password){
//         this.email=email;
//         this.password=password;
//     }
//     get password(){
//         return `1560${this._password}0001`
//     }
// set password(value){
// this._password=value
// }
// }

// let user=new cyber("hammad2@gmail.com",112233)
// console.log(user.password);











// Mostly we use class not function and object like below

// class cyber{
//     constructor(email,password){
//         this.email=email;
//         this.password=password;
//     }
//     get email(){
//         return `${this.mail}@gmail.com`
//     }
//     set email(value){
//        this.mail=value
//       }
// }

// let user=new cyber("hammad2",112233)
// console.log(user.email);



//                      same work as above with function

// function cyber(email,password){
// this._email=email;
// this._password=password

// Object.defineProperty(this,'email',{
//     get:function(){
//         return this._email.toUpperCase()
//     },
//     set:function(value){
//        this._email=value
//     }
// })
// }

// let user=new cyber("hammad@gmail.com",25)
// console.log(user.email);




//                same as above with object

// const user={
//     _email:"hammad@gmal.com",
//     _password:1325,


// get email(){
// return this._email.toUpperCase()
// },
// set email(value){
// this._email=value;
// }

// }
// console.log(user.email);

// //  agar user ki sari properties usertwo ko dani hay
// let usertwo=Object.create(user)
// console.log(usertwo._email);
// console.log(usertwo.email);






