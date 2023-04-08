let form = document.getElementById("form");
let input = document.getElementById("input");
let msg = document.getElementById("msg");
let posts = document.getElementById("posts");
let data = {};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("form Submitted");
  formValidation();
});

let formValidation = () => {
  if (input.value === "") {
    msg.innerHTML = "Post can not be blank";
    msg.style.color = "red";
    console.log("failure");
  } else {
    console.log("success");
    msg.innerHTML = "";
    acceptData();
  }
};

let acceptData = () => {
  data["text"] = input.value;
  console.log(data);
  createData();
};

let createData = () => {
  posts.innerHTML += `
    <div class="post-item">
        <p>${data.text}</p>
        <span class="options">
            <i onclick="editPost(this)" class="fas fa-edit"></i>
            <i onclick="deletePost(this)" class="fas fa-trash-alt"></i>
        </span>
    </div>
    `;

  input.value = "";
};

let deletePost = (e) => {
  e.parentElement.parentElement.remove();
};

let editPost = (e) => {
  input.value = e.parentElement.previousElementSibling.innerHTML;

  e.parentElement.parentElement.remove();
};
