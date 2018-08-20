var btnAdd = document.getElementsByTagName('form')
var span = document.getElementsByTagName('span');
var list = document.getElementById('list');


function creationLi() {
    var createLi = document.createElement("li");
    var createText = span[0].innerText;
    createLi.appendChild(createText);
    list.appendChild(createLi);
};

//function btnAddClick() {};

btnAdd[0].addEventListener('submit', () => {
    event.preventDefault();
    creationLi()
});

console.dir(span);