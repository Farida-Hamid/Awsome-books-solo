class Library {
  constructor(inputTitle, inputAuthor) {
    this.title = inputTitle;
    this.author = inputAuthor;
  }

  display = book => {
    const list = document.querySelector('.books');
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>"${book.title}"</td>&nbspby &nbsp
      <td>${book.author}</td>
      <button class="cancel">Remove</button>`;
    list.appendChild(row);
  }

  displayAll = () => {
    const list = See.get();
    if (list) {
      list.forEach((book) => Library.display(book));
    }
  }

  undisplay = book => {
    if (book) {
      book.parentElement.remove();
    }
  }

  get = () => {
    let list;
    const data = localStorage.getItem('memory');
    if (!data) {
      list = [];
    } else {
      list = JSON.parse(data);
    }
    return list;
  }

  add = book => {
    const list = See.get();
    list.push(book);
    localStorage.setItem('memory', JSON.stringify(list));
  }

  delete = writer => {
    const list = See.get();

    list.forEach((book, index) => {
      if (book.author === writer) {
        list.splice(index, 1);
        Library.undisplay(book);
      }
    });
    localStorage.setItem('memory', JSON.stringify(list));
  }
}