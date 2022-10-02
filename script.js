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
const body = document.querySelector(".body");
const msg = document.querySelector(".msg");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  inputValidation();
});

const deleteBook = (e) => {
  e.parentElement.parentElement.remove();
};

const editBook = (e) => {
  e.parentElement.parentElement.remove();
};

const inputValidation = () => {
  if (title.value === "" && author.value === "") {
    msg.innerHTML = "Information cannot be blank";
  } else {
    msg.innerHTML = "";
    acceptData();
    displayUI();
    add.setAttribute("data-bs-dismiss", "modal");
    add.click();
    (() => {
      add.setAttribute("data-bs-dismiss", "");
    })();
  }
};

const data1 = {};
const acceptData = () => {
  data1["title"] = title.value;
  data1["author"] = author.value;
  data1["date"] = date.value;
  data1["pages"] = pageNumber.value;
  data1["check"] = bookCheck;
};

const displayUI = () => {
  main.innerHTML += `<div class="card m-3" style="width: 18rem">
      <div class="card-body">
        <h5 class="card-title text-center mb-3">Book Details</h5>
        <div class="book-details mb-3">
          <ul class="list-group">
            <li class="list-group-item">
              <span class="text-muted">Title:</span>
              <span class="title">${data1.title}</span></li
            >
            <li class="list-group-item">
              <span class="text-muted">Author:</span>
              <span class="author">${data1.author}</span>
            </li>
            <li class="list-group-item">
              <span class="text-muted">Published:</span>
              <span class="date">${data1.date}</span>
            </li>
            <li class="list-group-item">
              <span class="text-muted">Pages:</span>
              <span class="pages">${data1.pages}</span></li
            >
            <li class="list-group-item">
              <span class="text-muted"
                >Read:
                ${
                  data1.check.checked
                    ? '<i class="fa-sharp fa-solid fa-check text-success"></i>'
                    : '<i class="fa-sharp fa-solid fa-xmark text-danger"></i>'
                }</span
            ></li>
          </ul>
        </div>
        <a href="#" onClick="editBook(this)" class="btn btn-primary btn-sm btn-edit" data-bs-toggle="modal" data-bs-target="#modal" >Edit</a>
        <a href="#" onClick="deleteBook(this)" class="btn btn-primary btn-sm ms-3 btn-delete">Delete</a>
      </div>
    </div>`;
  form.reset();
};
