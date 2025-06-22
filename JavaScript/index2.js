//  1st:singleturn =>constuctor say banta hay such as ::object.create
// singleturn object is defines as   let user=new object()

// 2nd:object literals =>jo normal banatay hay such as ::const user={}


// const user={
//     fullname:"hammad",
//     "full name":"hammad choudhary",
//     age:19,
//     location:"pakistan",
//     email:"hammad@gmail.com",
//     isloggedin:true,
//    key:Symbol("key1")

// }
// console.log(user);
// console.log(user.age);
// console.log(user.fullname);
// console.log(user["full name"]);

// user.age += 6
// Object.freeze(user)               //after freeze changing not work
// user.age += 7
// console.log(user.age);



//                   symbol add in object by outside



// const mysymbol=Symbol("key")
// let user={
//     fullname:"hammad sadiq",
//     [mysymbol]:"hammad146"

// }
// console.log(user);
// console.log(user[mysymbol]);




//                            function by greeting


// const user={
//     fullname:"hammad",
//     age:19,
//     location:"pakistan",
//     email:"hammad@gmail.com",
//     isloggedin:true

// }
// user.hello=function(){
//     console.log(`hello ${this.fullname}`)
// }
// user.hello()


//                      object also defind such as


// let regularuser={}
// regularuser.id="hammadp500@gmail.com"
// regularuser.name="hammad"
// regularuser.password="hammad123"


// console.log(regularuser);
// console.log(regularuser.id)



//                       another object in object with nesting



// let regularuser={
//     email:"hammadp500@gmail.com",
//     password:"hammad134",
//     username:{
//         fullname:{
//             firstname:"hammad",
//             secondname:"sadiq"
//         }
//     }
// }
// console.log(regularuser)
// console.log(regularuser.username.fullname.secondname)

// regularuser.username.nu=888;
// regularuser.username.fullname.nu=888;
// console.log(regularuser)











//                when we have multiple obj and we want to combine we use two method
//               1st methode is obj.assign which is difficult 2nd is spread easy methode

// let obj1={1:"a", 2:"b"}
// let obj2={3:"a", 4:"b"}
// let obj3={5:"a", 6:"b"}

// let obj4=Object.assign({},obj1,obj2,obj3)       //{}it is a target and obj1,obj2,.. is scource dource copy in target
// console.log(obj4)

// let obj4={...obj1,...obj2,...obj3}                 // spread methode glass break into pieces
// console.log(obj4)



//                         different obj in array

// let user=[
//     {
//         id:1,
//         email:"h@gmail.com"
//     },
//     {
//         id:2,
//         email:"h@gmail.com"
//     },
//     {
//         id:3,
//         email:"h@gmail.com"
//     }
// ]
// console.log(user)
// console.log(user[1])
// console.log(user[1].email)

// user.map(n=>{
// console.log(n)
// })




//                          excess all the keys and values in object

// const user={
//     fullname:"hammad",
//     age:19,
//     location:"pakistan",
//     email:"hammad@gmail.com",
//     isloggedin:true

// }
// console.log(Object.keys(user))
// console.log(Object.values(user))
// console.log(Object.entries(user))
// console.log(user.hasOwnProperty("age"))








//                    practice


// let user=[
//     {
//         fullname:"hammad",
//         id:"hammad123",
//         password:12356
//     },
//     {
//         fullname:"huzaifa",
//         id:"hammad123",
//         password:12356
//     }, 
//     {
//         fullname:"sadiq",
//         id:"hammad123",
//         password:12356
//     },
//      {
//         fullname:"hammad",
//         id:"hammad123",
//         password:12356
//     }
// ]


// let data=user.map(n=>{
// let dataa=n.fullname
// if(dataa.startsWith("h")){
// console.log(dataa)
// }}
// )






//                   destructure in object

// let course={
//     coursename:"javascript",
//     price:100,
//     teacher:"hammad"
// }
// console.log(course.teacher);

// const{teacher}= course                
// console.log(teacher)

// const{teacher:sir}=course             //if teacher is big word replace it with sir
// console.log(sir)
