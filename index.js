// Función para agregar una nueva tarea
function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskText = taskInput.value.trim();

    if (taskText !== "") {
        const taskList = document.getElementById("taskList");
        const newTask = document.createElement("li");

        newTask.innerHTML = `
            <span>${taskText}</span>
            <button class="complete" onclick="completeTask(this)">✓</button>
            <button class="delete" onclick="deleteTask(this)">✗</button>
        `;

        taskList.appendChild(newTask);
        taskInput.value = "";
    }
}

// Función para completar una tarea
function completeTask(button) {
    const task = button.parentElement;
    task.classList.toggle("completed");
}

// Función para eliminar una tarea
function deleteTask(button) {
    const task = button.parentElement;
    task.remove();
}