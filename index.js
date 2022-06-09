import Library from './modules/display.js';
import { DateTime } from './modules/luxon.js';
import showHide from './modules/content.js';

const bookList = new Library();

document.addEventListener('DOMContentLoaded', bookList.displayAll());
document.addEventListener('DOMContentLoaded', showHide(1));

// adding a book
document.querySelector('form').addEventListener('submit', (e) => {
  e.preventDefault();
  const title = document.querySelector('#title').value;
  const author = document.querySelector('#author').value;

  const book = {'title': title, 'author': author};
  bookList.display(book);
  bookList.add(book);
});

// removing a book
document.querySelector('.books').addEventListener('click', (e) => {
  const writer = e.target.previousElementSibling.textContent;
  bookList.delete(writer);
  e.target.parentElement.remove();
});

// Adding the correct section
/* eslint-disable no-unused-vars */

const list = document.querySelector('#list');
list.addEventListener(('click'), () => { showHide(1) });

const add = document.querySelector('#add-new');
add.addEventListener(('click'), () => { showHide(2) });

const cont = document.querySelector('#info-contact');
cont.addEventListener(('click'), () => { showHide(3) });

// Show date and time
const dateTime = document.querySelector('#date');

const time = () => {
  // const currentDateTime = DateTime.now().toString();//DateTime.now().toLocaleString(DateTime.DATETIME_FULL_WITH_SECONDS);
  const currentDateTime = DateTime.now().toLocaleString(DateTime.DATETIME_FULL);
  dateTime.innerHTML = currentDateTime;
};
setInterval(time);