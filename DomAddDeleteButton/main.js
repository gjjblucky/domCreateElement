var form =document.getElementById('addForm');
var newList=document.getElementById('items');

//form submit event
form.addEventListener('submit',additem);

//remove event
newList.addEventListener('click',removeItem);

//add item

function additem(e){
    e.preventDefault();

//get input valuue
var newitem=document.getElementById('item').value;


//create element
    var li=document.createElement('li');
//create class
li.className='list-group-item';

//add text node with input value
li.appendChild(document.createTextNode(newitem));

//add delete button
var dlt=document.createElement('button');

dlt.className='btn btn-danger btn-sm float-right delete';
dlt.appendChild(document.createTextNode('x'));

//append dlt to li
li.appendChild(dlt);

//append li to newlist
newList.appendChild(li);

}

//remove item
function removeItem(e)
{
if(e.target.classList.contains('delete')){
if(confirm('ARE YOU SURE?')){
    var li=e.target.parentElement;
    newList.removeChild(li);
}

}


}