// let fellname=["hammad","huzaifa","sadiq","ali","hammad"]
// let othername=["spiderman","flash","superhero"]

// console.log(fellname)
// console.log(fellname.toString());
// console.log(fellname.indexOf("huzaifa"));
// console.log(fellname.includes("sadiq"))
// console.log(fellname.length)
// console.log(fellname.at(2));
// console.log(fellname.lastIndexOf("hammad"))


// console.log(fellname.join(" and "));

// console.log(fellname.concat(othername));
// console.log(fellname.concat(othername,"ahmad"));
// console.log(fellname.concat(othername).concat("khan"));

// fellname.unshift(othername)
// console.log(fellname);            //another full array also add
// console.log(fellname[0]);         //  approach full array that add
// console.log(fellname[0][1])       // approach element of added array



// let fullnam=[1,2,3,4,[5,6],[7,8,[10,15,17],9]]
// console.log(fullnam.flat(Infinity));                  //full nested array solve


// othername.push("hy");
// console.log(othername);


// othername.pop()
// console.log(othername);



// othername.unshift("krish");
// console.log(othername);


// othername.shift()
// console.log(othername);


// let num=[1,2,3,4,5,6]
// console.log(num.copyWithin(1,3));


// ==========================================================



// let fellname=["hammad","huzaifa","sadiq","ali"]
// let othername=["spiderman","flash","superhero"]



// slice give a new array and not change orignal array 
// splice used to remove and add new element in array and orignal changed



// console.log(fellname.slice(0,3))      
// console.log(fellname)        

// console.log(fellname.splice(0,2))       //remove first 2 element
// console.log(fellname)              

// console.log(fellname.splice(0,2,"Muhammad"))     // replace MUhammad with first 2 element 
// console.log(fellname)                            // index 0 pr add kia or 2 elem delete


// console.log(fellname.splice(1,0,"usman","umair"))     // add name after 1st element without remove any element
// console.log(fellname)                             





// ======================================================================
              //  foreach is a HOD high order function


// let fellname=[1,2,3,4,5]

// fellname.forEach(n=>{
//     console.log(n)
// })


// let count=0;
// fellname.forEach(n=>{
//     count += n;
// })
// console.log(count)





// let numb=['a','b','c','d','a','b','d','e','a']


// let count={};
// numb.forEach(item=>{
//     if(count[item]){
//         count[item]++
//     }else{
//         count[item]=1
//     }
// })
// console.log(count);


// numb.forEach((item,index)=>{
//   numb[index]= item.toUpperCase()
// })
// console.log(numb)


// let name1=["hammad","sadiq","huzaifa","hamza"]
// name1.forEach(item=>{
//   if(item.startsWith("h")){
//     console.log(item)
//   }
// })



//                       map


// let numbers=[1,2,3,4,5,6,7,8];
// let count=0;
//  numbers.map(n=>{
//     count+=n;
//  })
//  console.log(count) 



// let numbers=[1,2,3,4,5,6,7,8];       //in this orignal array not change
// numbers.map(n=>{
//    console.log(n*2)
// })
// console.log(numbers)



// let numbers=[1,2,3,4,5,6,7,8];        //in this orignal array change
// numbers.map((n,index)=>{
//    numbers[index]=n*2
// })
// console.log(numbers)




// let numb=['a','b','c','d','a','b','d','e','a']

// let count={};
// numb.map(item=>{
//     if(count[item]){
//         count[item]++;
//     }
//     else{
//         count[item]=1;
//     }
// })
// console.log(count)



//                ++         remove duplcate         ++

// let numb=['a','b','e','c','d','a','b','d','e','a']
// const unique=[...new Set(numb)]
// console.log(unique);
// console.log(unique.sort());




// let nums=[1,0.2,3,3,6,7,4,88,6,7,8];   
// let unique=[...new Set(nums)]
// console.log(unique.sort((a,b)=>a-b));




//                   filter()    or  find()   both are same

// let posts=[
//     {title:"post1",owner:"hammad"},
//     {title:"post2",owner:"hammad"},
//     {title:"post3",owner:"sadiq"},

// ]
// console.log(posts.filter(p=>p.owner==="hammad"))


// let numbers=[1,2,3,4,5,6,7,8]
// console.log(numbers.filter(p=>p>5))




// let arr=[1,2,3,4,5,6,7,8,9,10]

// console.log(arr.filter(n=>n >5));
// console.log(arr.filter((n)=>(n >5)));
// console.log(arr.filter(n=>{ return n >5}));






//                      .findindex()


// let posts=[
//     {title:"post1",owner:"hammad"},
//     {title:"post2",owner:"huzaifa"},
//     {title:"post3",owner:"sadiq"},

// ]
// console.log(posts.findIndex(p=>p.owner==="huzaifa"))



//                          .reduce()

// let nums=[1,2,3,4,5,6,7,8];
// let total = nums.reduce((total,currentval)=>total+currentval)
// console.log(total)

// let nums=[1,2,3,4,5,6,7,8];
// let total = nums.reduce((total,currentval)=>total+currentval,10)
// console.log(total)



// function sum(...numbers) {
//   return numbers.reduce((acc, curr) => acc + curr, 0);
// }
// sum(1, 2, 3);


//                   use to identify max and min value


// let nums=[1,0.2,3,3,6,7,4,88,6,7,8];                 // 1st method
// console.log(Math.max(...nums))

// let nums= [1,2,3,3,6,7,4,88,6,7,8];                    // 2nd method for min in which infinity is +
// let arr=nums.reduce((a,b)=>Math.min(a,b),Infinity)
// console.log(arr)


// let nums= [1,2,3,3,6,7,4,88,6,7,8];                       // for max in which infinity is -
// let arr=nums.reduce((a,b)=>Math.max(a,b),-Infinity)
// console.log(arr)









//                .some()


// let num=[1,2,3,4,5,6,7,8]
// let isgreaterthan5=num.some(n=>n >5)
// console.log(isgreaterthan5)



//               .every()        it check everyone element 

// let num=[1,2,3,4,5,6,7,8]               
// let isgreaterthan0=num.every(n=>n >0)
// console.log(isgreaterthan0)


//              .sort()           alphabitacialy arrange

// let alph=['a','d','h','r','j','u','b','c','d','z'];
// let sort=alph.sort()
// console.log(sort)


// let name=["hammad","ali","sdaiq","danish"];
// let sort=name.sort()
// console.log(sort)


// let num=[1,4,7,9,3,2,6,0,6];            //only for 1 digit number
// let sort=num.sort()
// console.log(sort)


// let num=[1,4,17,65,13,2,62,0,6];            //for 2 digit apply this
// let sort=num.sort((a,b)=> a-b)
// console.log(sort)



// const myarray=[1,2,3,4,5]
// myarray[10]=56
// console.log(myarray);
// console.log(myarray.length);
// console.log(myarray[5]);











//              array .fill


// const arr = new Array(5).fill("Hello");
// console.log(arr);  // ["Hello", "Hello", "Hello", "Hello", "Hello"]



// const arr = Array.from({length:8},(v,i)=>i)
// console.log(arr);  // [0, 1, 2, 3, 4]


// function createRange(start, end) {
//   return Array.from({ length: end-start+1 }, (v, i) => start + i);
// }
// console.log(createRange(3, 7));  // [3, 4, 5, 6, 7]




