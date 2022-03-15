var form =document.getElementById('addForm');
var newList=document.getElementById('items');
var filter=document.getElementById('filter');
//form submit event
form.addEventListener('submit',additem);

//remove event
newList.addEventListener('click',removeItem);

//filter event
filter.addEventListener('keyup',filterItem);

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
 //filter items
 function filterItems(e){
     //convert text to lowercase
     var text=e.target.value.toLowerCase();
     //getlis
     var items=itemList.getElementByTagName('li');
     //convert to an array
     Array.from(items).forEach(function(item){
var itemName=item.firstChild.textContent;
if(itemName.toLowerCase().indexOf(text)!=-1){
    item.style.display='block';
}
else{
    item.style.display='none';
}
}

 });

 }