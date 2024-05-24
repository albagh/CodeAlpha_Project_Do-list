document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('taskInput');
    const addTaskBtn = document.getElementById('addTaskBtn');
    const taskList = document.getElementById('taskList');

    addTaskBtn.addEventListener('click', () => {
        const taskText = taskInput.value.trim();
        if (taskText !== "") {
            addTask(taskText);
            taskInput.value = '';
            taskInput.focus();
        }
    });

    taskInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            addTaskBtn.click();
        }
    });

    taskList.addEventListener('click', (e) => {
        if (e.target.classList.contains('deleteBtn')) {
            e.target.parentElement.remove();
        } else if (e.target.tagName === 'LI') {
            e.target.classList.toggle('completed');
        }
    });

    function addTask(taskText) {
        const li = document.createElement('li');
        li.textContent = taskText;
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.classList.add('deleteBtn');
        li.appendChild(deleteBtn);
        taskList.appendChild(li);
    }
});