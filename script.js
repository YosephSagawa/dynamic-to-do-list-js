document.addEventListener('DOMContentLoaded', function() {
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    /**
     * Adds a new task to the task list
     */
    function addTask() {
        const taskText = taskInput.value.trim();
        if (taskText === "") {
            alert("Please enter a task:");
            return;
        } else {
            // Create a new list item
            const li = document.createElement('li');
            li.textContent = taskText;

            // Create a remove button
            const removeBtn = document.createElement('button');
            removeBtn.textContent = "Remove";
            removeBtn.classList.add('remove-btn');

            // Add an event listener to the remove button
            removeBtn.addEventListener('click', () => {
                // Remove the list item when the button is clicked
                taskList.removeChild(li);
            });
            li.appendChild(removeBtn);

            // Add the list item to the task list
            taskList.appendChild(li);

            // Clear the task input field
            taskInput.value = "";
        }
    }

    addButton.addEventListener('click', addTask);
    taskInput.addEventListener('keypress',(event) =>{
        if(event.key === 'Enter'){
            addTask();
        }
    });
});