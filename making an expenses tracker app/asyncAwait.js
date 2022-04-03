// //with promises


// console.log('person1: shows ticket');
// console.log('person2: shows ticket');
// const promiseWifeBringingTickets=new Promise((resolve,reject) =>{
//     setTimeout(() =>{
// resolve('tickets');
//     },3000)
// });


//  const getPopcorn = promiseWifeBringingTickets.then((t) =>{
//     console.log('husband: we should go in');
//     console.log('wife: no i am hungary');
//     return new Promise((resolve,reject) =>{
//         resolve(`${t} popcorn`);
//     })
// });
// const getButter=  getPopcorn.then((h) =>{
    
//         console.log('husband: we should go in');
//         console.log('wife: no i need butter');
//         return new Promise((resolve,reject) =>{
//             resolve(`${h} butter`);
//         })

// });
// getButter.then((t) =>{  console.log(t)});
// console.log('person4: shows ticket');
// console.log('person5: shows ticket');

// ---------------------------------------------------------------

//with assync await

// console.log('person1: shows ticket');
// console.log('person2: shows ticket');
// const premove=async () =>{
// const promiseWifeBringingTickets=new Promise((resolve,reject) =>{
//     setTimeout(() =>{ 
// resolve('ticket');}
//     ,3000)
// });

// const getPopcorn=new Promise((resolve,reject) => resolve('popcorn'));
// const addbutter =new Promise((resolve,reject)=> resolve('butter'));  
// const coldDrinks=new Promise((resolve,reject) => resolve('coldrinks'));

// let ticket =await promiseWifeBringingTickets;
// console.log(`wife: i have the ${ticket}`);
// console.log('husband: we should go in');
// console.log('wife: no i am hungary');

// let popcorn=await getPopcorn;
// console.log(`husband: i got some ${popcorn}`);
// console.log('husband: we should go in');
// console.log('wife: no i need butter on my popcorn');

// let butter=await addbutter;
// console.log(`husband: i got some ${butter} on popcorn `);
// console.log('husband: anything else darling');
// console.log('wife: no i need coldrinks too');

// let colddrinks=await coldDrinks;
// console.log(`husband: i got  ${coldrinks}`);
// console.log('husband: anything else darling');
// console.log('wife: lets go');


// return ticket;
// return popcorn;
// return butter;
// return colddrinks;
// }

// premove().then((m) => {console.log(`person3:shows${m}`); } );

// console.log('person4: shows ticket');
// console.log('person5: shows ticket');

//---------------------------------------------------------------------


//promise.all


// console.log('person1: shows ticket');
// console.log('person2: shows ticket');
// const premove=async () =>{
// const promiseWifeBringingTickets=new Promise((resolve,reject) =>{
//     setTimeout(() =>{ 
// resolve('ticket');}
//     ,3000)
// // });

// const getPopcorn=new Promise((resolve,reject) => resolve('popcorn'));
// const addbutter =new Promise((resolve,reject)=> resolve('butter'));  
// const coldDrinks=new Promise((resolve,reject) => resolve('coldrinks'));

//  let ticket =await promiseWifeBringingTickets;

//  let [popcorn,butter,colddrinks]=await Promise.all([getPopcorn,addbutter,coldDrinks]);
//  console.log(`${popcorn}, ${butter}, ${colddrinks}`);
//  return ticket;
// }
// premove().then((m) => {console.log(`person3:shows${m}`); } );

// console.log('person4: shows ticket');
// console.log('person5: shows ticket');

//-------------------------------------------

//while error

// console.log('person1: shows ticket');
// console.log('person2: shows ticket');
// const premove=async () =>{
// const promiseWifeBringingTickets=new Promise((resolve,reject) =>{
//     setTimeout(() =>{ 
// reject('ticket');}
//     ,3000)
// });
// let ticket;

// try{
//      ticket =await promiseWifeBringingTickets;
// }catch(e){
//     ticket ='sad face';
// }


// return ticket;
// }
// premove().then((m) => {console.log(`person3:shows${m}`); } );

// console.log('person4: shows ticket');
// console.log('person5: shows ticket');