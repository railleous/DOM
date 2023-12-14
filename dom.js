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

var titles = document.querySelectorAll('.title');
console.log(titles);
//titles[0].textContent = 'Hello';

var odd = document.querySelectorAll('li:nth-child(odd)');
//var even = document.querySelectorAll('li:nth-child(even)');



for(var i = 0; i < odd.length; i++) {
    //Choose all the odd elements and make their background green using QuerySelectorALL
    odd[i].style.backgroundColor = 'green';
    //even[i].style.backgroundColor = '#ccc';
}

//Using QuerySelectorALL change the font color to green for 2nd item in the item list
var secondItem = document.querySelector('.list-group-item:nth-child(2)');
secondItem.style.color = 'green';

//Make the 2nd item have green background color
var secondbg = document.querySelector('.list-group-item:nth-child(2)');
secondbg.style.backgroundColor = 'green';

//Make the 3rd item invisible
var thirditem = document.querySelector('.list-group-item:nth-child(3)');
thirditem.style.color = 'green';



