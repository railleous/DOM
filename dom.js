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

var items = document.getElementsByClassName('list-group-item');
console.log(items)
//items[2].textContent = 'Hello 2';
items[2].style.backgroundColor = 'green';

//for(var i=0 ; i < items.length; i++){
//    items[i].style.backgroundColor = '#f4f4f4';
//}

for(var i=0 ; i < items.length; i++){
    items[i].style.fontWeight = 'bold';
    items[i].style.color = 'purple';
}

