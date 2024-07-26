function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();

    if (taskText === '') {
        alert('Please enter a task.');
        return;
    }

    const taskList = document.getElementById('taskList');
    const listItem = document.createElement('li');

    listItem.innerHTML = `
        <span class="task-text">${taskText}</span>
        <div class="task-actions">
            <button onclick="toggleTask(this)">Complete</button>
            <button class="edit" onclick="editTask(this)">Edit</button>
            <button class="remove" onclick="removeTask(this)">Remove</button>
        </div>
    `;

    taskList.appendChild(listItem);
    taskInput.value = '';
}

function toggleTask(button) {
    const listItem = button.parentElement.parentElement;
    listItem.classList.toggle('completed');
}

function removeTask(button) {
    const listItem = button.parentElement.parentElement;
    listItem.remove();
}

function editTask(button) {
    const listItem = button.parentElement.parentElement;
    const taskTextElement = listItem.querySelector('.task-text');
    const currentText = taskTextElement.textContent;

    const newText = prompt('Edit your task:', currentText);
    if (newText !== null && newText.trim() !== '') {
        taskTextElement.textContent = newText.trim();
    }
}
