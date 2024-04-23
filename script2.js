function addTodoTask() {
  event.preventDefault();
  // Array without content
  const todoTask = [];
  // Get fetches retrives from HTML document
  const taskInput = document.querySelector('#taskInput').value;
  // Fills the array with content from taskInput
  todoTask.push(taskInput);
  // Checks if todoTask have content
  console.log(todoTask);
}

const taskButton = document.querySelector('#taskButton');
console.log(taskButton);

taskButton.addEventListener('click', addTodoTask);
// Loops through array and for new data
for (index = 0; index < TodoTasks.length; index = index + 1) {
  // Get data from our loop using to run through whats inside array
  const newTodoTask = todoTask[index];

  //Create a new HTML-element "li"
  const newListItem = document.createElement('li');
  console.log(newListItem);

  // Set that the element "li" have content from our looped through data
  newListItem.textContent = newTodoTasks;
}

