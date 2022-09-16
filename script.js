const add = document.querySelector(".btn-add");
const main = document.querySelector(".main");
const title = document.querySelector("#title-input");
const author = document.querySelector("#author");
const pageNumber = document.querySelector("#page-number");
const date = document.querySelector("#date");
const bookCheck = document.querySelector("#book-check");

add.addEventListener("click", (e) => {
  e.preventDefault();
  main.innerHTML += `<div class="card m-3" style="width: 18rem">
    <div class="card-body">
      <h5 class="card-title text-center mb-3">Book Details</h5>
      <div class="book-details mb-3">
        <ul class="list-group">
          <li class="list-group-item">
            <span class="text-muted">Title:</span>
            <span class="title">${title.value}</span></li
          >
          <li class="list-group-item">
            <span class="text-muted">Author:</span>
            <span class="author">${author.value}</span>
          </li>
          <li class="list-group-item">
            <span class="text-muted">Published:</span>
            <span class="date">${date.value}</span>
          </li>
          <li class="list-group-item">
            <span class="text-muted">Pages:</span>
            <span class="pages">${pageNumber.value}</span></li
          >
          <li class="list-group-item">
            <span class="text-muted"
              >Read:
              ${
                bookCheck.checked
                  ? '<i class="fa-sharp fa-solid fa-check text-success"></i>'
                  : '<i class="fa-sharp fa-solid fa-xmark text-danger"></i>'
              }</span
          ></li>
        </ul>
      </div>
      <a href="#" class="btn btn-primary btn-sm">Edit</a>
      <a href="#" class="btn btn-primary btn-sm ms-3 btn-delete">Delete</a>
    </div>
  </div>`;

  const deleteElement = document.querySelector(".btn-delete");
  deleteElement.addEventListener("click", (e) => {
    e.preventDefault();
    deleteElement.parentElement.parentElement.remove();
  });
});
