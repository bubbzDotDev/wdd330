'use strict';

import utilities from './utilities.js';
import Todos from './Todos.js';

const todoItemsList = utilities.qs('#todo-items-list');
const addTodoButton = utilities.qs('#add-todo-button');

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