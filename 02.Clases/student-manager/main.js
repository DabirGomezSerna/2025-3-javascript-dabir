"use strict";

let students = [];

window.onload = function () {
  const stored = localStorage.getItem("students");
  if (stored) {
    students = JSON.parse(stored);
    displayStudents();
    updateAverage();
  }
};

function updateAverage() {
  if (students.length === 0) {
    return;
  }
  let total = 0;
  for (let i = 0; i < students.length; i++) {
    total = total + students[i].grade;
  }
  let average = total / students.length;
  document.getElementById("averageDisplay").textContent = `Average Grade: ${average.toFixed(2)}`;
}

function displayStudents() {
  const list = document.getElementById("studentList");
  list.innerHTML = ``;

  for (let i = 0; i < students.length; i++) {
    const li = document.createElement("li");
    if(students[i].status === "Passed"){
        li.innerHTML = `<p class="passed"> ${students[i].name} - ${students[i].grade} - ${students[i].status}</p>`;
    }else{
        li.innerHTML = `<p class="failed"> ${students[i].name} - ${students[i].grade} - ${students[i].status}</p>`;
    }
    
    list.appendChild(li);
  }
}

function saveToLocalStorage() {
  localStorage.setItem("students", JSON.stringify(students));
}

function addStudent() {
  const name = document.getElementById("nameInput").value.trim();
  if (name === "" || name === isNaN) {
    alert("Please enter a valid name");
    return;
  }
  const grade = parseFloat(document.getElementById("gradeInput").value);
  if (grade < 0 || grade > 100) {
    alert("Please enter a valid grade");
    return;
  }

  const student = {
    name,
    grade,
    status: grade >= 70 ? "Passed" : "Failed",
  };

  document.getElementById("nameInput").value = "";
  document.getElementById("gradeInput").value = "";

  students.push(student);
  displayStudents();
  updateAverage();
  saveToLocalStorage();
}
