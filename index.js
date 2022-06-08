import Library from './modules/display.js';
import showHide from './modules/content.js'
document.addEventListener('DOMContentLoaded', Library.displayAll);
document.addEventListener('DOMContentLoaded', showHide(1));

// adding a book
document.querySelector('form').addEventListener('submit', (e) => {
  e.preventDefault();
  const title = document.querySelector('#title').value;
  const author = document.querySelector('#author').value;

  const book = new Library(title, author);

  Library.display(book);
  Library.add(book);
});

// removing a book
document.querySelector('.books').addEventListener('click', (e) => {
  const writer = e.target.previousElementSibling.textContent;
  Library.delete(writer);
});

// Adding the correct section
/* eslint-disable no-unused-vars */

const list = document.querySelector('#list');
list.addEventListener(('click'), () => {
  console.log("here");
  showHide(1);
});


const add = document.querySelector('#add-new');
add.addEventListener(('click'), () => {
  console.log("here");
  showHide(2);
});

const cont = document.querySelector('#info-contact');
cont.addEventListener(('click'), () => {
  showHide(3);
  console.log("here");
});

