'use strict';

import utilities from './utilities.js';
import ls from './ls.js';
import Todo from './Todos.js';

const todoItemsList = utilities.qs('#todo-items-list');
const addTodoButton = utilities.qs('#add-todo-button');
const errorMessage = utilities.qs('#error-message');

function renderTodoList() {
  const todos = ls.getArrayFromLS();
  todos.forEach(todo => {
    const li = document.createElement('li');
    li.textContent = todo.content;
    todoItemsList.appendChild(li);
  });
}

/* 
 *  To Do List 
 */
if (localStorage.length > 0) {
  // Items exist
  renderTodoList();

} else {
  // No items yet
  todoItemsList.textContent = 'Add an item below to get started!';
}

/* 
 *  Add Item Button
 */
addTodoButton.addEventListener('click', () => {
  const todoInput = utilities.qs('#todo-input').value;
  if (todoInput.trim() === '') {
    errorMessage.textContent = 'Please enter an item and try again.';
  } else {
    errorMessage.textContent = '';
    const timestamp = Date.now();
    const todo = new Todo(timestamp, todoInput, false);
    todo.save();
    utilities.qs('#todo-input').value = '';
    location.reload();
  }
});