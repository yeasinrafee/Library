# Library

let dataArray = [];
function books(title, author, pages, date, check) {
this.title = title;
this.author = author;
this.pages = pages;
this.date = date;
this.check = check;
}

function addBooks() {
add.addEventListener("click", (e) => {
e.preventDefault();

    //   Storing All the datas in an array
    const book = new books(
      title.value,
      author.value,
      pageNumber.value,
      date.value,
      bookCheck.value
    );
    dataArray.push(book);

    //   Displaying the UI
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
          <a href="#" class="btn btn-primary btn-sm btn-edit" >Edit</a>
          <a href="#" class="btn btn-primary btn-sm ms-3 btn-delete">Delete</a>
        </div>
      </div>`;

    const deleteElement = document.querySelector(".btn-delete");
    deleteElement.addEventListener("click", (e) => {
      e.preventDefault();
      deleteElement.parentElement.parentElement.remove();
    });
    form.reset();
    console.log(dataArray);

    const editElement = document.querySelector(".btn-edit");

});
}
addBooks();

Icons:
<i class="fa-sharp fa-solid fa-check text-success"></i>
<i class="fa-sharp fa-solid fa-xmark-large text-danger"></i>

Template:

<div class="card m-3" style="width: 18rem">
          <div class="card-body">
            <h5 class="card-title text-center mb-3">Book Details</h5>
            <div class="book-details mb-3">
              <ul class="list-group">
                <li class="list-group-item">
                  <span class="text-muted">Title:</span>
                  <span class="title">Game of thrones</span></li
                >
                <li class="list-group-item">
                  <span class="text-muted">Author:</span>
                  <span class="author">Gorge R.R. Martin</span>
                </li>
                <li class="list-group-item">
                  <span class="text-muted">Published:</span>
                  <span class="date">22/34/56</span>
                </li>
                <li class="list-group-item">
                  <span class="text-muted">Pages:</span>
                  <span class="pages">290</span></li
                >
                <li class="list-group-item">
                  <span class="text-muted"
                    >Read:
                    <i
                      class="fa-sharp fa-solid fa-check text-success"
                    ></i></span
                ></li>
              </ul>
            </div>
            <a href="#" class="btn btn-primary btn-sm">Edit</a>
            <a href="#" class="btn btn-primary btn-sm ms-3">Delete</a>
          </div>
        </div>
