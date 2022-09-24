const add = document.querySelector(".btn-add");
const main = document.querySelector(".main");
const modal = document.querySelector(".modal");
const title = document.querySelector("#title-input");
const author = document.querySelector("#author");
const pageNumber = document.querySelector("#page-number");
const date = document.querySelector("#date");
const bookCheck = document.querySelector("#book-check");
const form = document.querySelector("form");
const deleteElement = document.querySelector(".btn-delete");

class Books {
  dataArray = [];
  constructor(title, author, pages, date, check) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.date = date;
    this.check = check;
  }

  addBook() {
    this.dataArray.push({
      title: this.title,
      author: this.author,
      pages: this.pages,
      date: this.date,
      check: this.check,
    });
  }

  displayUI() {
    main.innerHTML += `<div class="card m-3" style="width: 18rem">
        <div class="card-body">
          <h5 class="card-title text-center mb-3">Book Details</h5>
          <div class="book-details mb-3">
            <ul class="list-group">
              <li class="list-group-item">
                <span class="text-muted">Title:</span>
                <span class="title">${this.dataArray[0].title}</span></li
              >
              <li class="list-group-item">
                <span class="text-muted">Author:</span>
                <span class="author">${this.dataArray[0].author}</span>
              </li>
              <li class="list-group-item">
                <span class="text-muted">Published:</span>
                <span class="date">${this.dataArray[0].date}</span>
              </li>
              <li class="list-group-item">
                <span class="text-muted">Pages:</span>
                <span class="pages">${this.dataArray[0].pages}</span></li
              >
              <li class="list-group-item">
                <span class="text-muted"
                  >Read:
                  ${
                    this.dataArray[0].check.checked
                      ? '<i class="fa-sharp fa-solid fa-check text-success"></i>'
                      : '<i class="fa-sharp fa-solid fa-xmark text-danger"></i>'
                  }</span
              ></li>
            </ul>
          </div>
          <a href="#" class="btn btn-primary btn-sm btn-edit" >Edit</a>
          <a href="#" class="btn btn-primary btn-sm ms-3 btn-delete">Delete</a>
        </div>
      </div>`;
  }
  deleteUI() {}
}

add.addEventListener("click", (e) => {
  const book = new Books(
    title.value,
    author.value,
    pageNumber.value,
    date.value,
    bookCheck
  );

  book.addBook();
  book.displayUI();
  console.log(book.dataArray);
  const deleteElement = document.querySelector(".btn-delete");
  deleteElement.addEventListener("click", (e) => {
    deleteElement.parentElement.parentElement.remove();
  });
});
