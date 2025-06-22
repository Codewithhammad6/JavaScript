//                        map filter foreach reduce


// let arr=[
//     {
//         username:'hammad',
//         id:19
//     },
//     {
//         username:'sadiq',
//         id:19
//     },
//     {
//         username:'huzaifa',
//         id:19
//     }
// ]
// arr.forEach(n=>{
//     if(n.username.startsWith("h")){
//     console.log(n.username)}
// })

// console.log(arr.filter(n=>n.username.startsWith("h")))

// arr.map(n=>{
//     console.log(n.username);
// });





// let arr=["hammad","huzaifa","sadiq","ahmad"]

// arr.forEach(n=>{
//     console.log(n);
// })




// let arr=[1,2,3,4,5,6,7,8,9,10]

// console.log(arr.filter(n=>n >5));
// console.log(arr.filter((n)=>(n >5)));
// console.log(arr.filter(n=>{ return n >5}));



// arr.forEach(n=>{
//     if(n>5){
//         console.log(n);
//     }
// })






//                         important

// let arr=[1,2,3,4,5,6,7,8,9,10];

// let newarr=[];
// arr.forEach(n=>{
//     if(n>5){
//         newarr.push(n)
//     }
// })
// console.log(newarr);




// let books=[
//     {
//         title:'BookOne',genre:'Science',publish:'1980',edition:'2004'
//     },
//     {
//         title:'BookTwo',genre:'History',publish:'1990',edition:'2003'
//     },
//     {
//         title:'BookThree',genre:'Science',publish:'1960',edition:'2001'
//     },
//     {
//         title:'BookFour',genre:'French',publish:'1970',edition:'2007'
//     },
//     {
//         title:'BookFive',genre:'Non-French',publish:'1985',edition:'2008'
//     },
//     {
//         title:'BookSix',genre:'History',publish:'1983',edition:'2012'
//     },
//     {
//         title:'BookSeven',genre:'Islamic',publish:'1947',edition:'2010'
//     },
//     {
//         title:'BookEight',genre:'Non-French',publish:'1978',edition:'2018'
//     },
//     {
//         title:'BookNine',genre:'Science',publish:'1963',edition:'2024'
//     },
// ]

// let mybooks=books.filter(bk=>bk.genre==='History');
// mybooks=books.filter(bk=>bk.genre==='History' && bk.edition==='2012');
// console.log(mybooks);






// let arr=[1,2,3,4,5,6,7,8,9,10]          //in array add ten
// arr.map(n=>{
//     console.log(n+10);
// })

// let arr=[1,2,3,4,5,6,7,8,9,10]          //in array add ten
// let newarr=arr.map(n=>{
//     return n+10;
// })
// console.log(newarr);


//                                           in array add ten
// let arr=[1,2,3,4,5,6,7,8,9,10]
// let arr1=[]
// arr.map(n=>{
//     arr1.push(n+10)
// })
// console.log(arr1);



//===========                 chaining


// let arr=[1,2,3,4,5,6,7,8,9,10];

// let newarr=arr.map((n)=> n*10).map((n)=> n+1)
// console.log(newarr)


// let arr=[1,2,3,4,5,6,7,8,9,10];

// let newarr=arr.map((n)=> n*10).map((n)=> n+1).filter((n)=> n>50)
// console.log(newarr)




//          reduce


// let arr=[1,2,3,4];                  //initial may acc=0, and curr=1, acc+curr=1, ab acc=1,curr=2 ,acc+curr=3
// let newarr=arr.reduce((acc,curr)=>{ return acc + curr})                        //   0 + 1=1                    1 + 2=3
// console.log(newarr);


// let arr=[1,2,3,4];           
// let newarr=arr.reduce((acc,curr)=>{ return acc + curr},0)    //End pr 0 accumulator ki value hay hum apni marzi say start kr saktay hay
// console.log(newarr);



//                     calculate total price of shoping

// let shoping=[
//     {
//         course:'javascript',
//         price:1000
//     },
//     {
//         course:'python',
//         price:2000
//     },
//     {
//         course:'java',
//         price:1500
//     },
//     {
//         course:'php',
//         price:30
//     },
    
// ]






// let payment=shoping.map(cost=>cost.price).reduce((acc,curr)=>acc+curr)
// console.log(payment)



//                same as above but simple

// let payment=shoping.reduce((acc,curr)=>acc+curr.price, 0)
// console.log(payment)


// let item=shoping.map(items=>items.course)
// console.log(item);

// console.log(`sir your items:- ${item}
// total amount is := ${payment}`);



