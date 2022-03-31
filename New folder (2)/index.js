//currying by bind method

// let multiply=function(x,y){
//     console.log(x * y);
// }
// let multiplyBy2=multiply.bind(this,2);
// multiplyBy2(5);

// let multiplyBy3=multiply.bind(this,3);
// multiplyBy3(5);

// let multiply=function(x){

//     return function(y){
//         console.log(x * y);
//     }

// }
//  let multiplyBy2=multiply(2);
// multiplyBy2(5);

//  let multiplyBy3=multiply(3);
//  multiplyBy3(5);
// function y(){



//     for(let i=1;i<6;i++){
    
//     setTimeout(() => console.log(i ), i * 1000)
    
//     }
    
//     console.log('Done Coding')
    
    
    
//     }
    
//     y();

// //this inside a global space-------------
// this.table='window table';
// this.garage={
//     table:'table'
// };
// console.log(window.table);

// //this inside a object for privacy--------
// let lucky={
//     table :'bada table'
// };
// console.log(lucky.table);

// //this inside a method---------
// let lucky={
//         table :'bada table',
//         cleaningTable(){
//             console.log(`cleaning ${this.table}`);
//         }
//     };
    
// lucky.cleaningTable();

// // this inside a function--------
// call function to rescue
// this.table='window table';
// const cleanTable=function(soap){
//     console.log(`cleaning ${this.table} using ${soap}`);
// };
// cleanTable.call(this,'some soup');

// //this inside an inner function---------
// this.table='window table';
// const cleanTable=function(soap){
//     const innerFunction=(_soap)=> {
//         console.log(`cleaning ${this.table} using ${_soap}`);
//     }
//    innerFunction(soap);
// };
// cleanTable.call(this,'some soap');


// //this inside a constructor----------
// this.table='window table';
// let createroom=function(name){
//     this.table=`${name} table`
// }
// createroom.prototype.cleanTable=function(soap){
//     console.log(`cleaning ${this.table} using ${soap}`);
// };
// const lucky=new createroom('lucky');
// const lovely=new createroom('lovely');

// lovely.cleanTable('some sbun');
// lucky.cleanTable('some shampoo');

// //this inside a classes---------------------
// class createroom{
//     constructor(name){
//         this.table=`${name} table`
//     }
//     cleanTable(soap){
//         console.log(`cleaning ${this.table} using ${soap}`);
//     }
// }
// const lucky=new createroom('lucky');
// const lovely=new createroom('lovely');

// lovely.cleanTable('some sbun');
// lucky.cleanTable('some shampoo');

//-----------------------------------------------------------------------------------------------------------
// check eligibility of students
// class student{
//     static count=0;
//     constructor(name,boardMarks){
//         this.name=name,
//         this.boardMarks=boardMarks
        
//     }
//     cleanTable(age,phoneNo){
//         console.log(` ${this.name}  is age ${age} and his/her phoneNO ${phoneNo} with board percentage ${this.boardMarks}`);
//     }

//     static countStudent(){
// return(student.count++);
//     }

//      eligible(min){
//         if(this.boardMarks<min){
//             console.log(`${this.name} is not eligible`);
//         }
//         else{
//             console.log(`${this.name} is eligible`);
//         }
//     }
    
   
// }




// const lucky=new student('lucky',80);
// const lovely=new student('lovely',20);
// const anu=new student('anu',70);
// const krish=new student('krish',10);
// const babu=new student('babu',30);


// lovely.cleanTable('19','5754575');
// lucky.cleanTable('22','575454545');
// anu.cleanTable('18','5754');
// krish.cleanTable('12','454545');
// babu.cleanTable('15','57575');



// console.log(student.countStudent());


// lovely.eligible(40);
// lucky.eligible(40);
// anu.eligible(40);
// krish.eligible(40);
// babu.eligible(40);

//---------------------------------------------------------------------------------------

//fat arrows
// 'use strict';
// var getA=function(a){
//     return a;
// };
// you can simplu right this in fat arrows
 
// let getA=a => a;
// console.log(getA(5));

// let square=b=> b*b;
// console.log(square(5));

// let square= (b) => {return b*b};
// console.log(square(5));

// var b=4;
// let square= _ => {return b*b};  //we can use () or _ in replace of empty methoed
// console.log(square());