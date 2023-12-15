//Examine the document object//

//console.dir(document)
//console.log(document.domain);
//console.log(document.URL);
//console.log(document.title);
//console.log(document.head);
//console.log(document.body);
//console.log(document.all);
//console.log(document.all[10]);
//console.log(document.forms);
//console.log(document.links);

//GETELEMENTBYID

//console.log(document.getElementById('header-title'));

//var headerTitle = document.getElementById('header-title');
//var header = document.getElementById('main-header');
//console.log(headerTitle);
//headerTitle.textContent = 'Text';
//header.style.borderBottom = 'solid 3px #000';
//var listItems = document.getElementsByClassName('list-group-item');
//console.log(listItems[4].style.color = 'green');

//GETELEMENTSBYCLASSNAME//

//var items = document.getElementsByClassName('list-group-item');
//console.log(items)
//items[2].textContent = 'Hello 2';
//items[2].style.backgroundColor = 'green';

//for(var i=0 ; i < items.length; i++){
//    items[i].style.backgroundColor = '#f4f4f4';
//}

//for(var i=0 ; i < items.length; i++){
//    items[i].style.fontWeight = 'bold';
//    items[i].style.color = 'purple';
//}

// GETELEMENTSBYTAGNAME
//var li = document.getElementsByTagName('li');
//console.log(li);
//console.log(li[2]);

//for(var i=0 ; i < li.length; i++){
//       li[i].style.fontWeight = 'bold';
//      li[i].style.color = 'purple';
//}

//Query Selector//

/* var header = document.querySelector('#main-header');
header.style.borderBottom = 'solid 4px #ccc';

var input = document.querySelector('input');
input.value = 'Type Here';

var submit = document.querySelector('input[type="submit"]');
submit.value = 'Send';

var items = document.querySelector('.list-group-item');
items.style.color = 'red';

var lastItems = document.querySelector('.list-group-item:last-child');
lastItems.style.color = 'green';

var secondItems = document.querySelector('.list-group-item:nth-child(2)');
secondItems.style.color = 'blue';

var thirdItems = document.querySelector('.list-group-item:nth-child(3)');
thirdItems.style.color = 'purple'; */

//Query SelectorAll//

//var titles = document.querySelectorAll('.title');
//console.log(titles);
//titles[0].textContent = 'Hello';

//var odd = document.querySelectorAll('li:nth-child(odd)');
//var even = document.querySelectorAll('li:nth-child(even)');



//for(var i = 0; i < odd.length; i++) {
    //Choose all the odd elements and make their background green using QuerySelectorALL
    //odd[i].style.backgroundColor = 'green';
    //even[i].style.backgroundColor = '#ccc';
//}

//Using QuerySelectorALL change the font color to green for 2nd item in the item list
/* var secondItem = document.querySelector('.list-group-item:nth-child(2)');
secondItem.style.color = 'green'; */

//Make the 2nd item have green background color
/* var secondbg = document.querySelector('.list-group-item:nth-child(2)');
secondbg.style.backgroundColor = 'green'; */

//Make the 3rd item invisible
/* var thirditem = document.querySelector('.list-group-item:nth-child(3)');
thirditem.style.color = 'green'; */

// TRAVERSING THE DOM //
/* var itemList = document.querySelector('#items'); */
//parentNode
//console.log(itemList.parentNode);
//itemList.parentNode.style.backgroundColor = '#f4f4f4';

//childNodes
//console.log(itemList.childNodes);
//children
/* console.log(itemList.children);
console.log(itemList.children[1]);
itemList.children[1].style.backgroundColor = 'yellow'; */

//firstchild
/* console.log(itemList.firstChild)
//firstElementChild
console.log(itemList.firstElementChild);
itemList.firstElementChild.textContent = 'Hello 1'; */

/* //lastChild
console.log(itemList.lastChild);
//lastElementChild
console.log(itemList.lastElementChild);
itemList.lastElementChild.textContent = 'Hello 4'; */

//sibling
//nextsibling
/* console.log(itemList.nextSibling);
//nextelementSibling
console.log(itemList.nextElementSibling)
//previousSibling
console.log(itemList.previousSibling);
//previousElementsibling
console.log(itemList.previousElementSibling);
itemList.parentElement.style.color = 'green'; */

// createElement
//create a div
/* var newDiv = document.createElement('div');
newDiv.className = 'hello';
//add id
newDiv.id = 'hello1';
//Add attribute
newDiv.setAttribute('title','Hello Div');
// Create text node
var newDivText = document.createTextNode('Hello World');
// Add text to div
newDiv.appendChild(newDivText);

//Now go head and add HEllo word before Item Lister
var container = document.querySelector('header .container');
var h1 = document.querySelector('header h1');
console.log(newDiv);
newDiv.style.fontSize = '30px';
container.insertBefore(newDiv, h1);

//Now go head and add HEllo word before Item 1
var ul = document.querySelector('ul.list-group');
ul.insertBefore(newDiv, ul.firstChild);
console.log(newDiv); */

/* var button = document.getElementById('button').addEventListener('click',function() {
    console.log('Button Clicked');
}) */

/* var button = document.getElementById('button').addEventListener('click',buttonClick);
 
function buttonClick(e) { */
    //console.log('Button clicked');
   // document.getElementById('header-title').textContent = 'Changed';
   // document.querySelector('#main').style.backgroundColor = '#f4f4f4';
   /* console.log(e);
   console.log(e.target);

   console.log(e.type); */
   //console.log(e.clientX);


//}












// PROJECT
var form = document.getElementById('addForm');
var itemList = document.getElementById('items');

// form submit event
form.addEventListener('submit', addItem);
// delete event
itemList.addEventListener('click', removeItem);

//Add item
function addItem(e) {
    e.preventDefault();

// Get input Value
var newItem = document.getElementById('item').value;

// create new li eleemnt
var li = document.createElement('li');
//Add class
li.className = 'list-group-item';
//Add text node with input value
li.appendChild(document.createTextNode(newItem));
//create del button element
var deletebtn = document.createElement('button');
// add class to delete utton
deletebtn.className = 'btn btn-danger btn-sm float-right delete';
//append text node
deletebtn.appendChild(document.createTextNode('X'));
deletebtn.appendChild(document.createTextNode('edit'));

//append button to li
li.appendChild(deletebtn)

//append li to list
itemList.appendChild(li);
}

// Remove item
function removeItem(e) {
    if(e.target.classList.contains('delete')) {
        if(confirm('Are you Sure?')) {
            var li = e.target.parentElement;
            itemList.removeChild(li);
        }
    }
}