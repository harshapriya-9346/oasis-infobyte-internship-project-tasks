function addTask() {
    const taskInput = document.getElementById('new-task');
    const taskText = taskInput.value.trim();
    if (taskText !== '') {
        const taskList = document.getElementById('pending-tasks');
        const listItem = createTaskItem(taskText, 'pending');
        taskList.appendChild(listItem);
        taskInput.value = '';
    }
}

function createTaskItem(text, type) {
    const listItem = document.createElement('li');
    listItem.className = type;

    const taskSpan = document.createElement('span');
    taskSpan.textContent = text;

    const dateTime = document.createElement('div');
    dateTime.className = 'date-time';
    dateTime.textContent = 'Added: ' + new Date().toLocaleString();

    const buttons = document.createElement('div');
    buttons.className = 'buttons';

    const completeButton = document.createElement('button');
    completeButton.textContent = 'Complete';
    completeButton.className = 'complete-btn';
    completeButton.onclick = function () {
        markComplete(listItem);
    };

    const editButton = document.createElement('button');
    editButton.textContent = 'Edit';
    editButton.className = 'edit-btn';
    editButton.onclick = function () {
        editTask(listItem);
    };

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.className = 'delete-btn';
    deleteButton.onclick = function () {
        listItem.parentElement.removeChild(listItem);
    };

    buttons.appendChild(completeButton);
    buttons.appendChild(editButton);
    buttons.appendChild(deleteButton);

    listItem.appendChild(taskspan);
    listItem.appendChild(dateTime);
    listItem.appendchild(buttons);

    return listItem;
}

function markComplete(taskItem) {
    taskItem.className = 'completed';
    taskItem.querySelector('.date-time').textContent += ' | Completed: ' + new Date().toLocaleString();
    taskItem.querySelector('.complete-btn').remove();
    document.getElementById('completed-tasks').appendChild(taskItem);
}

function editTask(taskItem) {
    const taskSpan = taskItem.querySelector('span');
    const newTaskText = prompt('Edit task:', taskSpan.textContent);
    if (newTaskText) {
        taskSpan.textContent = newTaskText;
    }
}




