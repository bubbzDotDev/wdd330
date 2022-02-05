'use strict';

import Todos from './Todos.js';

const todoItemsList = document.querySelector('#todo-items-list');
const addTodoButton = document.querySelector('#add-todo-button');


/* 
 *  To Do List 
 */
if (localStorage.length > 0) {
  // Items exist

} else {
  // No items yet
  todoItemsList.textContent = 'Add an item below to get started!';
}

/* 
 *  Add Item Button
 */
addTodoButton.addEventListener('click', () => {
  
});