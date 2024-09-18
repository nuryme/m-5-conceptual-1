//----------------------    Single Element Selector
const headText = document.getElementById('head-text')
headText.style.color = 'green';
headText.style.textAlign = 'center';
const uniquePara = document.querySelector('#unique');
uniquePara.style.color = 'pink';
const para = document.querySelector('.info');      //querySelector() onekgula class dile she  by default 1st ta niye kaj kore
para.style.border = '1px solid pink'

//----------------------    Multiple Element Selector
const myTags = document.getElementsByTagName('p');
for(let i = 0; i<myTags.length; i++) {
    const elementStyle = myTags[i];
    elementStyle.style.backgroundColor = 'lightblue'
}
const myClasses = document.getElementsByClassName('info');
for(const myClass of myClasses) {
    myClass.style.padding = '10px'
}
const selectorAll = document.querySelectorAll('.info');
for(const selector of selectorAll) {
    selector.style.fontSize = '20px'
}

//--------------------  parentElement || nextElementSibling || previousElementSibling
const item2 = document.getElementById('item-2');
const parent = item2.parentElement;
console.log(parent);
const nextSibling = item2.nextElementSibling;
const previousSibling = item2.previousElementSibling;
console.log(nextSibling)
console.log(previousSibling)

//--------------------  innerText || innerHTML || textContent
const hiddenText = document.getElementById('hidden-content');
hiddenText.style.display = 'none';
const container3 = document.querySelector('.container3');
console.log(container3.innerText)
console.log(container3.textContent)
console.log(container3.innerHTML)

//--------------------  setAttribute() || getAttribute() || removeAttribute()
const btn = document.getElementById('btn');
const btn2 = document.getElementById('btn2');
btn.setAttribute('class', 'btn-primary');
btn.setAttribute('disabled', true);
btn2.setAttribute('class', 'added-class another-class');
const myLink = document.getElementById('myLink');
console.log(myLink.getAttribute('title'))
console.log(myLink.getAttribute('target'));
myLink.removeAttribute('href');

//--------------------  Creating an Element || Adding class
const container5 = document.querySelector('.container5');
const dymanicP = document.createElement('p');
dymanicP.innerText = 'I am created by js dynamically';
// container5.appendChild(dymanicP);
const ul = document.createElement('ul');
const li1 = document.createElement('li')
const li2 = document.createElement('li')
const li3 = document.createElement('li');
li1.innerText = 'list 1'
li2.innerText = 'list 2'
li3.innerText = 'list 3';
ul.appendChild(li1)
ul.appendChild(li2)
ul.appendChild(li3);
// container5.appendChild(ul);
ul.classList.add('common-style');
dymanicP.className = 'styling';

//--------------------  appendChild() || append()
container5.append(dymanicP, ul);
container5.append('append added 1', 'append added 2');

//--------------------  remove() || removeChild()
const container6 = document.querySelector('.container6');
const removedP = document.getElementById('removed');
const removedP2 = document.getElementById('removed2');
removedP.remove();
container6.removeChild(removedP2);