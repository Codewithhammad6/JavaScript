//                      promises

// let promiseone=new Promise(function(resolve,reject){

// setTimeout(function(){
// console.log('async task is completed');
// resolve();
// },1000)
// })

// promiseone.then(function(){
//         console.log('promise consumed');
// })





//                      same as above

// new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     console.log("Async task 2");
//     resolve();
//   }, 1000);

// }).then(function () {
//   console.log("Async 2 resolved");
// });



//                     how receive data

// let promiseone = new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     resolve({ username: "Hammad sadiq", useremail: "Hammad123@gmail.com" });
//   }, 1000);
// });

// promiseone.then(function (user) {
//   console.log(user);
// });








// let promiseone=new Promise(function(resolve,reject){
//     setTimeout(function(){
// let error=false;
// if(!error){
//     resolve({ username: "Hammad sadiq", useremail: "Hammad123@gmail.com"});
// }else{
//     reject('Error something went wrong')
// }
//     },1000)
// })
// promiseone.then((user)=>{
//     console.log(user);
//     return user.username
// })




//                    multiple .then uses

// let promiseone=new Promise(function(resolve,reject){
//     setTimeout(function(){
// let error=false;
// if(!error){
//     resolve({ username: "Hammad sadiq", useremail: "Hammad123@gmail.com"});
// }else{
//     reject('Error something went wrong')
// }
//     },1000)
// })
// promiseone.then((user)=>{
//     console.log(user);
//     return user.username
// }).then(function(username){
// console.log(username);
// })




// let promiseone=new Promise(function(resolve,reject){
//     setTimeout(function(){
// let error=false;
// if(!error){
//     resolve({ username: "Hammad sadiq", useremail: "Hammad123@gmail.com"});
// }else{
//     reject('Error something went wrong')
// }
//     },1000)
// })
// promiseone.then((user)=>{
// console.log(user);
// return user.username
// }).then(function(username){
// console.log(username);
// }).catch(function(error){
// console.log(error);
// })







//                    catch the error 

// let promiseone=new Promise(function(resolve,reject){
//     setTimeout(function(){
// let error=true;
// if(!error){
//     resolve({ username: "Hammad sadiq", useremail: "Hammad123@gmail.com"});
// }else{
//     reject('Error something went wrong')
// }
//     },1000)
// })
// promiseone.then((user)=>{
// console.log(user);
// return user.username
// }).then(function(username){
// console.log(username);
// }).catch(function(error){
// console.log(error);
// })



//                   use the .finally

// let promiseone=new Promise(function(resolve,reject){
//     setTimeout(function(){
// let error=true;
// if(!error){
//     resolve({ username: "Hammad sadiq", useremail: "Hammad123@gmail.com"});
// }else{
//     reject('Error something went wrong')
// }
//     },1000)
// })
// promiseone.then((user)=>{
// console.log(user);
// return user.username
// }).then(function(username){
// console.log(username);
// }).catch(function(error){
// console.log(error);
// }).finally(()=>console.log('The promise is either resolved or rejected'))


















//            same as above but using async await and try catch


// let promiseone=new Promise(function(resolve,reject){
//     setTimeout(function(){
// let error=false;                    //true ya false
// if(!error){
//     resolve({ username: "Hammad sadiq", useremail: "Hammad123@gmail.com"});
// }else{
//     reject('Error something went wrong')
// }
//     },1000)
// })

// async function consumepromise(){
// try {
//     let responce=await promiseone
// console.log(responce);
// console.log(responce.username);
// } catch (error) {
//     console.log(error);
// }
// }
// consumepromise()








// async function getuser() {
//     try {
//       let responce=  await fetch('https://jsonplaceholder.typicode.com/users')
//       let data=await responce.json()
//       console.log(data);
      
//     } catch (error) {
//         console.log(error);
        
//     }
// }
// getuser();





//         same above with .then and .catch

// fetch('https://jsonplaceholder.typicode.com/users')
// .then(function(responce){
// return responce.json()
// })
// .then((data)=>{
// console.log(data);
// })
// .catch((error)=>{
// console.log(error);
// })