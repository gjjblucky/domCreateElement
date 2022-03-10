// PARENTNODE
var itemlist=document.querySelector('h1');
// console.log(itemlist.parentNode);
// itemlist.parentNode.style.backgroundColor='red';
// console.log(itemlist.parentNode.parentNode);

//PARENTELEMENT
// var itemlist=document.querySelector('P');
// console.log(itemlist.parentElement);
//  itemlist.parentElement.style.backgroundColor='red';
//  console.log(itemlist.parentNode.parentNode);


//CHILDNODES
//console.log(itemlist.childNodes);
// console.log(itemlist.children);

//FIRSTCHILD
//  console.log(itemlist.firstChild);
//  itemlist.firstChild.textContent='hello';

//FIRSTELEMENTCHILD

// console.log(itemlist.firstElementChild);


//LASTCHILD
//  console.log(itemlist.lastChild);
//  itemlist.lastChild.textContent='hello';

//FIRSTELEMENTCHILD

//  console.log(itemlist.lastElementChild);

//NEXTSIBLING
//  console.log(itemlist.nextSibling);

//NEXTELEMENTSIBLING
//   console.log(itemlist.nextElementSibling);

//PREVIOUSIBLING
//   console.log(itemlist.previousSibling);

//   //PREVIOUsELEMENtSIBLING
//   console.log(itemlist.previousElementSibling);

// ------------------------------------------------------
//CREATE ELEMENT

var newDiv=document.createElement('div');

//create class

newDiv.className='hello';

//create id

newDiv.id='name';

//create attribute

newDiv.setAttribute('title','hello div');

// create text node
var divtext=document.createTextNode('lucky is best');

//add text

newDiv.appendChild(divtext);

//add into dom
var num =document.querySelector('header .example');

var h1 =document.querySelector('header p');

console.log(newDiv);
num.insertBefore(newDiv,h1);