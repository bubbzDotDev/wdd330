'use strict';

import utilities from './utilities.js';
import Todo from './Todos.js';

const todoItemsList = utilities.qs('#todo-items-list');
const addTodoButton = utilities.qs('#add-todo-button');
const errorMessage = utilities.qs('#error-message');
const filterAllButton = utilities.qs('#filter-all-button');
const filterActiveButton = utilities.qs('#filter-active-button');
const filterCompletedButton = utilities.qs('#filter-completed-button');

/* 
 *  To Do List 
 */
if (localStorage.length > 0) {
  // Items exist
  utilities.renderTodoList();
  utilities.filterAll();

} else {
  // No items yet
  todoItemsList.innerHTML = '<li class="add-item-text">Add an item below to get started!</li>';
}

/* 
 *  Add Item Button
 */
addTodoButton.addEventListener('click', event => {
  event.preventDefault();
  const todoInput = utilities.qs('#todo-input').value;
  if (todoInput.trim() === '') {
    errorMessage.textContent = 'Please enter an item and try again.';
  } else {
    errorMessage.textContent = '';
    const timestamp = Date.now();
    const todo = new Todo(timestamp, todoInput, false);
    todo.save();
    utilities.qs('#todo-input').value = '';
    utilities.renderTodoList();
    utilities.filterAll();
  }
});

/* 
 *  Filtering
 */
filterAllButton.addEventListener('click', () => {
  utilities.filterAll();
  utilities.renderTodoList();
});

filterActiveButton.addEventListener('click', () => {
  utilities.filterActive();
  utilities.renderTodoList('active');
});

filterCompletedButton.addEventListener('click', () => {
  utilities.filterCompleted();
  utilities.renderTodoList('completed');
});