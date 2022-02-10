'use strict';

import ls from './ls.js';

const todoItemsList = qs('#todo-items-list');
const filterAllButton = qs('#filter-all-button');
const filterActiveButton = qs('#filter-active-button');
const filterCompletedButton = qs('#filter-completed-button');
const itemsFound = qs('#items-found');

function qs(selector) {
   return document.querySelector(selector);
}

// For sorting by ID #s:
function compareId(a, b) { // From: https://stackoverflow.com/questions/1129216/sort-array-of-objects-by-string-property-value
   if ( a.id < b.id ) {
      return -1;
   }
   if ( a.id > b.id ) {
      return 1;
   }
   return 0;
}

// For sorting by completed:
function compareCompleted(a, b) {
   if ( a.completed < b.completed ) {
      return -1;
   }
   if ( a.completed > b.completed ) {
      return 1;
   }
   return 0;
}

function filterAll() {
   filterAllButton.classList.add('filter-active');
   filterActiveButton.classList.remove('filter-active');
   filterCompletedButton.classList.remove('filter-active');
}

function filterActive() {
   filterAllButton.classList.remove('filter-active');
   filterActiveButton.classList.add('filter-active');
   filterCompletedButton.classList.remove('filter-active');
}

function filterCompleted() {
   filterAllButton.classList.remove('filter-active');
   filterActiveButton.classList.remove('filter-active');
   filterCompletedButton.classList.add('filter-active');
}

function filterButtonStyles(filter) {
   if (filter === 'active') {
      filterActive();
   } else if (filter === 'completed') {
      filterCompleted();
   } else {
      filterAll();
   }
}

function renderTodoList(filter) {
   todoItemsList.innerHTML = '';
   const todos = ls.getArrayFromLS();
   let filteredTodos = [];
   if (todos.length < 1) {
      todoItemsList.innerHTML = '<li class="add-item-text">Congrats on getting everything done!</li>';
   }
   if (filter === 'active') {
      filteredTodos = todos.filter(todo => todo.completed === false);
      if (filteredTodos.length < 1) {
         todoItemsList.innerHTML = '<li class="add-item-text">Congrats on getting everything done!</li>';
         itemsFound.textContent = '';
      } else {
         itemsFound.textContent = `${filteredTodos.length} item${filteredTodos.length > 1 ? 's' : ''} left!`;
      }
   } else if (filter === 'completed') {
      filteredTodos = todos.filter(todo => todo.completed === true);
      if (filteredTodos.length < 1) {
         todoItemsList.innerHTML = '<li class="add-item-text">No completed items.</li>';
         itemsFound.textContent = '';
      } else {
         itemsFound.textContent = `${filteredTodos.length} item${filteredTodos.length > 1 ? 's' : ''} completed!`;
      }
   } else {
      filteredTodos = [...todos];
      filteredTodos.sort(compareCompleted);
      if (filteredTodos.length < 1) {
         itemsFound.textContent = '';
      } else {
         const filterActiveFromAll = filteredTodos.filter(todo => todo.completed === false);
         itemsFound.textContent = `${filterActiveFromAll.length} item${filterActiveFromAll.length > 1 ? 's' : ''} left!`;
      }
   }
   filteredTodos.forEach(todo => {
      const li = document.createElement('li');
      li.innerHTML = String.raw`
         <div>
            <input type="checkbox" id="id-${todo.id}">
            <span id="content-${todo.id}">${todo.content}</span>
         </div>
         <button type="button" id="remove-todo-button-${todo.id}">&#10006;</button>
      `;
      todoItemsList.appendChild(li);
      const item = qs(`#id-${todo.id}`);
      const content = qs(`#content-${todo.id}`);
      if (todo.completed) {
         content.classList.add('strikethrough');
         item.checked = true;
      } else {
         content.classList.remove('strikethrough');
      }
      item.addEventListener('click', () => {
         todo.completed = !todo.completed;
         const data = {
            id: todo.id,
            content: todo.content,
            completed: todo.completed
         };
         ls.writeToLS(todo.id, JSON.stringify(data));
         renderTodoList(filter);
         filterButtonStyles(filter);
      });
      const removeTodoButton = qs(`#remove-todo-button-${todo.id}`);
      removeTodoButton.addEventListener('click', () => {
         ls.removeFromLS(todo.id);
         renderTodoList(filter);
         filterButtonStyles(filter);
      });
   });
 }

export default { 
   qs, 
   compareId, 
   renderTodoList, 
   compareCompleted, 
   filterAll, 
   filterActive, 
   filterCompleted 
};