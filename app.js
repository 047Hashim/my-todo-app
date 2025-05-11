let inputTxt = document.querySelector("#input-txt");
let addBtn = document.querySelector("#add-btn");
let taskList = document.querySelector(".task-list");

addBtn.addEventListener("click", (e) => {
  e.preventDefault();
  if (inputTxt.value.trim() !== "") {
    taskList.insertAdjacentHTML(
      "beforeend",
      `<li class="list">
            <input type="checkbox" /> <span class='content'>${inputTxt.value}</span>
            <span class="btns"
              ><button class="edit-btn">Edit</button>
              <button class="delete-btn">Delete</button></span
            >
          </li>`
    );
    inputTxt.value = "";
  } else {
    alert("Task cannot be empty!");
  }
});

taskList.addEventListener("click", (e) => {
  //delete
  if (e.target.classList.contains("delete-btn")) {
    e.target.closest("li").remove();
  }

  //Edit
  if (e.target.classList.contains("edit-btn")) {
    let taskSpan = e.target.closest("li").querySelector("span");
    let newTask = prompt("Edit Task:", taskSpan.textContent);
    if (newTask !== "") {
      taskSpan.textContent = newTask;
    } else {
      alert("Task cannot be empty!");
    }
  }
});

document.addEventListener("DOMContentLoaded", () => {
  // Get the current date
  const currentDate = new Date();
  let options = {
    weekday: "long",
    month: "long",
    day: "numeric",
  };
  const dateFormatter = new Intl.DateTimeFormat("en-US", options);
  const fullDate = dateFormatter.format(currentDate);
  const [weekday, monthDay] = fullDate.split(", ");
  const [month, day] = monthDay.trim().split(" ");
  const formattedDate = `${day} ${month}, ${weekday}`;

  document.querySelector(".date").textContent = ` ${formattedDate}`;
});
