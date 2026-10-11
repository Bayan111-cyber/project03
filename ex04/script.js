const input = document.getElementById("taskInput");
const addButton = document.getElementById("addButton");
const taskList = document.getElementById("taskList");
const counter = document.getElementById("counter");

let totalTasks = 0;

// Add task function
function addTask() {

    // Get the text from input
    const taskText = input.value;

    // Don't add empty tasks
    if (taskText === "") {
        return;
    }

    // Create li
    const li = document.createElement("li");

    // Add task text
    li.textContent = taskText;

    // Create delete button
    const deleteButton = document.createElement("button");

    deleteButton.textContent = "Delete";

    // Delete task
    deleteButton.addEventListener("click", function() {
        li.remove();

        totalTasks--;
        counter.textContent = totalTasks;
    });

    // Complete task when clicking on it
    li.addEventListener("click", function() {
        li.classList.toggle("completed");
    });

    // Add delete button inside li
    li.appendChild(deleteButton);

    // Add li inside ul
    taskList.appendChild(li);

    // Update counter
    totalTasks++;
    counter.textContent = totalTasks;

    // Clear input
    input.value = "";
}

// Button click
addButton.addEventListener("click", addTask);

// Press Enter
input.addEventListener("keydown", function(event) {

    if (event.key === "Enter") {
        addTask();
    }

});