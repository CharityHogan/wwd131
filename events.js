let tasks = [];

function taskTemplate(task) {
  return `
    <li ${task.completed ? 'class="strike"' : ""}>
      <p>${task.detail}</p>
      <div>
        <span data-function="delete">❎</span>
        <span data-function="complete">✅</span>
      </div>
    </li>`;
}

function renderTasks(tasks) {
  const listElement = document.querySelector("#todoList");
  listElement.innerHTML = "";
  const html = tasks.map(taskTemplate).join("");
  listElement.innerHTML = html;
}

function newTask() {
  const taskInput = document.querySelector("#todo");
  const task = taskInput.value.trim();
  if (task) {
    tasks.push({ detail: task, completed: false });
    renderTasks(tasks);
    taskInput.value = "";
  }
}

function removeTask(taskElement) {
  tasks = tasks.filter(
    (task) => task.detail !== taskElement.querySelector("p").innerText
  );
  taskElement.remove();
}

function completeTask(taskElement) {
  const taskIndex = tasks.findIndex(
    (task) => task.detail === taskElement.querySelector("p").innerText
  );
  tasks[taskIndex].completed = !tasks[taskIndex].completed;
  taskElement.classList.toggle("strike");
}

function manageTasks(e) {
  const parent = e.target.closest("li");
  if (!parent) return;

  if (e.target.dataset.function === "delete") {
    removeTask(parent);
  } else if (e.target.dataset.function === "complete") {
    completeTask(parent);
  }
}

document.querySelector("#submitTask").addEventListener("click", newTask);
document.querySelector("#todoList").addEventListener("click", manageTasks);

renderTasks(tasks);
