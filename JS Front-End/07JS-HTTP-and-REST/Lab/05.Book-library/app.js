function attachEvents() {
  const loadBooks = document.getElementById('loadBooks');
  const booksContainer = document.querySelector('table > tbody');
  const [titleInput, authorInput] = Array.from(document.querySelectorAll('#form > input'));
  const submitBtn = document.querySelector('#form > button');
  const formHeader = document.querySelector('#form > h3');
  let allBooksData = {};
  let editBookId = null;

  const baseURL = 'http://localhost:3030/jsonstore/collections/books/';

  loadBooks.addEventListener('click', loadAllBooksHandler);
  submitBtn.addEventListener('click', submitFormHandler);

  async function loadAllBooksHandler() {
    booksContainer.innerHTML = '';
    const booksRes = await fetch(baseURL);
    const booksData = await booksRes.json();
    allBooksData = booksData;

    for (const bookID in booksData) {
      const { author, title } = booksData[bookID];
      const tableRow = document.createElement('tr');
      const titleColumn = document.createElement('td');
      const authorColumn = document.createElement('td');
      const buttonsColumn = document.createElement('td');
      const editBtn = document.createElement('button');
      const deleteBtn = document.createElement('button');
      titleColumn.textContent = title;
      authorColumn.textContent = author;
      editBtn.textContent = 'Edit';
      deleteBtn.textContent = 'Delete';
      deleteBtn.id = bookID;
      editBtn.id = bookID;

      editBtn.addEventListener('click', loadEditForm);
      deleteBtn.addEventListener('click', deleteBookHandler);

      tableRow.appendChild(titleColumn);
      tableRow.appendChild(authorColumn);
      buttonsColumn.appendChild(editBtn);
      buttonsColumn.appendChild(deleteBtn);
      tableRow.appendChild(buttonsColumn);
      booksContainer.appendChild(tableRow);
    }
  }

  function loadEditForm() {
    editBookId = this.id;
    formHeader.textContent = 'Edit FORM';
    submitBtn.textContent = 'Save';
    const bookByID = allBooksData[this.id];
    titleInput.value = bookByID.title;
    authorInput.value = bookByID.author;
  }

  async function submitFormHandler() {
    const title = titleInput.value;
    const author = authorInput.value;
    const httpHeaders = {
      method: 'POST',
      body: JSON.stringify({ title, author })
    }

    let url = baseURL;

    if (formHeader.textContent === 'Edit FORM') {
      httpHeaders.method = 'PUT';
      url += editBookId;
    }

    const resData = await fetch(url, httpHeaders);
    loadAllBooksHandler();

    if (formHeader.textContent === 'Edit FORM') {
      formHeader.textContent = 'FORM';
      submitBtn.textContent = 'Submit';
    }
    titleInput.value = '';
    authorInput.value = '';
  }

  async function deleteBookHandler() {
    const id = this.id;
    const httpHeaders = {
      method: 'DELETE'
    };

    await fetch(baseURL + id, httpHeaders);
    loadAllBooksHandler();
  }
}

attachEvents();