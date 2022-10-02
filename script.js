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
const data = {};

// Event Listener
form.addEventListener("submit", (e) => {
  e.preventDefault();
  inputValidation();
});

// Input Validation
const inputValidation = () => {
  if (title.value === "" && author.value === "") {
    msg.innerHTML = "Information cannot be blank";
  } else {
    msg.innerHTML = "";
    acceptData();
    displayUI();

    add.setAttribute("data-bs-dismiss", "modal");
    add.click(); //Fake click

    //IIFE function for setting data-bs-dismiss empty
    (() => {
      add.setAttribute("data-bs-dismiss", "");
    })();
  }
};

// Accept the data and store that into the data object
const acceptData = () => {
  data["title"] = title.value;
  data["author"] = author.value;
  data["date"] = date.value;
  data["pages"] = pageNumber.value;
  data["check"] = bookCheck;
};

// Display or generate the book details into the UI
const displayUI = () => {
  main.innerHTML += `<div class="card m-3" style="width: 18rem">
      <div class="card-body">
        <h5 class="card-title text-center mb-3">Book Details</h5>
        <div class="book-details mb-3">
          <ul class="list-group">
            <li class="list-group-item">
              <span class="text-muted">Title:</span>
              <span class="title">${data.title}</span></li
            >
            <li class="list-group-item">
              <span class="text-muted">Author:</span>
              <span class="author">${data.author}</span>
            </li>
            <li class="list-group-item">
              <span class="text-muted">Published:</span>
              <span class="date">${data.date}</span>
            </li>
            <li class="list-group-item">
              <span class="text-muted">Pages:</span>
              <span class="pages">${data.pages}</span></li
            >
            <li class="list-group-item">
              <span class="text-muted"
                >Read:
                ${
                  data.check.checked
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

  // Reset all the form content
  form.reset();
};

// Delete the Book from Library
const deleteBook = (e) => {
  e.parentElement.parentElement.remove();
};

// Edit the existing book details
const editBook = (e) => {
  e.parentElement.parentElement.remove();
  let selectedElement = e.parentElement.children[1].children[0];
  console.dir(selectedElement);
  title.value = selectedElement.children[0].children[1].innerHTML;
  author.value = selectedElement.children[1].children[1].innerHTML;
  date.value = selectedElement.children[2].children[1].innerHTML;
  pageNumber.value = selectedElement.children[3].children[1].innerHTML;
  bookCheck.value = selectedElement.children[4].children[1];
};
