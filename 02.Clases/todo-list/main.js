"use strict"; //must be used so all script load in case of single failure point

function addTask() {
  const input = document.getElementById("taskInput");
  const taskText = input.value.trim();

  if (taskText !== "") {
    const li = document.createElement("li"); //<li></li>
    li.innerHTML = `
      <span onClick='toggleComplete(this)'> ${taskText} </span>
      <div class='task-buttons'>
        <button onClick='deleteTask(this)'>-</button>
      </div>
    `;
    document.getElementById("taskList").appendChild(li);
    input.value = "";
  }
}

function deleteTask(btn){
    btn.closest('li').remove();
}

function toggleComplete(span){
    span.classList.toggle('task-complete');
}