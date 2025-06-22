//            **********     Loops/iterations  ************


//====================         for Loop          ========================



// for(let i=1;i<=10;i++){
//     console.log(i);
// }



//                  code line wise excute hota hay such as below two


// for(let i=1;i<=10;i++){
//     if(i==5){
//         console.log(`5 is best number`);
//     }   
//     console.log(i);
// }


// for(let i=1;i<=10;i++){  
//     console.log(i);
//     if(i==5){
//         console.log(`5 is best number`);
//     } 
// }



//                        loop in loop



// for (let i = 0; i <=10; i++) {
//     console.log(`outer loop value ${i}`);
// for (let j = 0; j <=10; j++) {
// console.log(`inner loop val ${j} and outer loop ${i}`)    
// }    
// }



// for (let i = 0; i <=10; i++) {
//     console.log(`outer loop value ${i}`);
// for (let j = 0; j <=10; j++) {
// console.log(`${i} * ${j} = ${i * j}`)
// }    
// }




//                 write table of 50 upto 10  end at(50*10)


// for (let i = 1; i <=50; i++) {
//     console.log(`                    Table of ${i}`)
//     for (let j = 1; j <=10; j++) {
// console.log(`${i} * ${j} = ${i*j}`);
//     }
// }






//                 write table of 10 upto 50  end at(10*50)



// for (let i = 1; i <=10; i++) {
//     console.log(`                    Table of ${i}`)
//     for (let j = 1; j <=50; j++) {
// console.log(`${i} * ${j} = ${i*j}`);
//     }
// }



//                   write table of only 50

// for (let i = 0; i <=10; i++) {
// console.log(`${50} * ${i} = ${50 * i}`);
// }





//                  get prompt from user what table is required


// let table=Number(prompt("What table you need"))

// for (let i = 0; i <=10; i++) {
// console.log(`${table} * ${i} = ${table * i}`);
// }






//         Break 4 digits password

// for (let i = 0; i <=9; i++) {
// for (let j = 0; j <=9; j++) {
// for (let k = 0; k <=9; k++) {
// for (let l = 0; l <=9; l++) {
//    console.log(`${i} ${j} ${k} ${l}`);    
// } 
// }    
// }    
// }


// console.log("hello \n world");



// let myarray=["hammad","sadiq","huzaifa"];
// console.log(myarray.length);                       // 3

// for (let i = 0; i < myarray.length; i++) {
//     const element = myarray[i];
//     console.log(element)
// }






//   ===============    Break and Continue     ===============================



// for (let i = 1; i <=20; i++) {
//     if( i==5){
//     console.log(`Deected 5`)                  //break end the loop
//     break
//     }
//     console.log(` value of i is ${i}`)
// }





// for (let i = 1; i <=20; i++) {
//     if( i==5){
//     console.log(`Deected 5`)                   //continue only detect and remain start
//     continue
//     }
//     console.log(` value of i is ${i}`)
// }



// for (let i = 1; i <=20; i++) {
//     if( i==5){
//     console.log(`Detected 5`)
//     continue
//     }
//     if( i==14){
//         console.log(`Detected 14`)
//         continue
//         }
//     console.log(` value of i is ${i}`)
// }











// =======================================================================
//                        While Loop     work same as for loop

// let i=0;
// while (i <=10) {
// console.log(i);
//    i++;
// }


// let i=0;
// while (i <=10) {
// console.log(i);
//    i = i+2;
// }






//                 table same jasay for loop say banaya tha uper


// let i=0;
// while (i <=9) {
//     console.log(`          Table of ${i+1}          `);
//     i++;
// let j=1;
//     while(j <=10){
// console.log(`${i} * ${j} = ${i*j}`)
// j++;
//     }
// }



// let myarray=["hammad","sadiq","huzaifa"];

// let i=0;
// while (i < myarray.length) {
//     console.log(myarray[i])
//     i++;
// }





// ============================================================================
//                      for of loop


// ["", "", ""]
// [{}, {}, {}]


// const arr=[1,2,3,4,5,6,7];
// for (const val of arr) {
//     console.log(val);
// }


// const arr1=["hammad","sadiq","huzaifa"];
// for (const val of arr1) {
//     console.log(val);
// }


// const arr1="Hammad Sadiq";
// for (const val of arr1) {
//     console.log(`Each char is ${val}`);
// }



//                     remove space in above by using continue

// const arr1="Hammad Sadiq";
// for (const val of arr1) {
//     if(val ==" "){
//         continue
//     }
//     console.log(`Each char is ${val}`);
// }



//                    only upto hammad by using break

// const arr1="Hammad Sadiq";
// for (const val of arr1) {
//     if(val ==" "){
//         break
//     }
//     console.log(`Each char is ${val}`);
// }




//            **************       Map      ******************
// Map object ki tarha hota object order ka khayal nhi rakhtay jabkay Map rakhta hay
// map may unique values hoti hain double bar koi value show nhi hoti


// let map=new Map()

// map.set('PK',"PAKISTAN")                        // 1 time
// map.set('IN',"INDIA")
// map.set('USA',"United States")
// map.set('PK',"PAKISTAN")                        // 2 time

// console.log(map)




//                    loop apply in map


// let map=new Map()

// map.set('PK',"PAKISTAN")                   
// map.set('IN',"INDIA")
// map.set('USA',"United States")

// for(let[key] of map){
//     console.log(key);
// }




// let map=new Map()

// map.set('PK',"PAKISTAN")                   
// map.set('IN',"INDIA")
// map.set('USA',"United States")

// for(let[ key,value] of map){
//     console.log(key,":-", value);
// }






//                                 for in loop for objects
// object may same key repeat nhi hoti or object may for in loop lagti hay or iteration kay sath value nhi likh saktay

//                    practice apply all loops in object



// const myobj={
//     'game1':'SpiderMan',
//     'game2':'NFS',
//     'game3':'SpiderMan',
//     'game4':'NFS'
// }

// for (const iteration in myobj) {
//     console.log(iteration);
// }

// for (const iteration in myobj) {
//     console.log(`${iteration} is ${myobj[iteration]}`);
// }


// for (const val of myobj) {               //Error not work 
//     console.log(val);
// }


// for (let i = 1; i <= Object.keys(myobj).length; i++) {
//     console.log(i);
// }

// for (let i = 1; i <= Object.keys(myobj).length; i++) {         // not work good
//     console.log(Object.values(myobj),Object.keys(myobj));
// }




// const chai={
//     name:'ginger chai',
//     price:250,
//     isavailable:true
// }
// // console.log(chai);

// for (let [key,value] of Object.entries(chai)) {
// console.log(`${key} : ${value}`);
// }




   

//                      All loops apply in array



// let arr=["hammad","sadiq","huzaifa","ahmad","ali"]

// for (const key of arr) {
//     console.log(key);
// }

// for (const key in arr) {
//     console.log(key);
// }

// for (const key in arr) {
//     console.log(`on index ${key} name is ${arr[key]}`);
// }

// for (let i=1;i<arr.length;i++) {
//     console.log(`on index ${i} name is ${arr[i]}`);
// }

// arr.forEach(n=>{
//     console.log(n);
// })

// arr.forEach((n,index)=>{
//     console.log(`on index ${index} name is ${n}`);
// })


// function printme(item){                                //ForEach hi hay ya nhi
//     console.log(item);
// }
// arr.forEach(printme)








// let mycoding=[
//     {
//         username:'hammad',
//         age:19
//     },
//     {
//         username:'sadiq',
//         age:40 
//     },
//     {
//         username:'ahmad',
//         age:60 
//     }
// ]

// mycoding.forEach((item)=>{
//     console.log(item.username);
// })


// for (const val of mycoding) {
//     console.log(val.username);
// }