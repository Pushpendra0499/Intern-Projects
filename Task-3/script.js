document.addEventListener("DOMContentLoaded", function() {
    const taskField = document.getElementById("taskField");
    const addTaskBtn = document.getElementById("addTaskBtn");
    const taskList = document.getElementById("taskList");

    // Load tasks from local storage
    loadTasks();

    addTaskBtn.addEventListener("click", function() {
        const taskText = taskField.value.trim();
        if (taskText !== "") {
            addTask(taskText);
            saveTasks();
            taskField.value = "";
        }
    });

    function addTask(taskText) {
        const li = document.createElement("li");
        li.innerText = taskText;
        const deleteBtn = document.createElement("button");
        deleteBtn.innerText = "Delete";
        deleteBtn.addEventListener("click", function() {
            li.remove();
            saveTasks();
        });
        const editBtn = document.createElement("button");
        editBtn.innerText = "Edit";
        editBtn.addEventListener("click", function() {
            const newText = prompt("Edit task:", taskText);
            if (newText !== null && newText.trim() !== "") {
                li.innerText = newText.trim();
                saveTasks();
            }
        });
        li.appendChild(editBtn);
        li.appendChild(deleteBtn);
        taskList.appendChild(li);

        li.addEventListener("click", function() {
            li.classList.toggle("completed");
            saveTasks();
        });
    }

    function saveTasks() {
        const tasks = [];
        taskList.querySelectorAll("li").forEach(function(task) {
            const taskObj = {
                text: task.innerText,
                completed: task.classList.contains("completed")
            };
            tasks.push(taskObj);
        });
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }

    function loadTasks() {
        const tasks = JSON.parse(localStorage.getItem("tasks"));
        if (tasks) {
            tasks.forEach(function(task) {
                addTask(task.text);
                const li = taskList.lastChild;
                if (task.completed) {
                    li.classList.add("completed");
                }
            });
        }
    }
});
