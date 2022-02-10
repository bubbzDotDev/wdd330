'use strict';

import utilities from './utilities.js';

function readFromLS(key) {
   return JSON.parse(localStorage.getItem(key));
}

function writeToLS(key, data) {
   localStorage.setItem(key, data);
}

function getArrayFromLS() {
  const todos = [];
  for (let i = 0; i < localStorage.length; i++) {
    const id = localStorage.key(i);
    const todo = readFromLS(id);
    todos.push(todo);
  }
  todos.sort(utilities.compareId).reverse();
  return todos;
}

function removeFromLS(key) {
  localStorage.removeItem(key);
}

export default { 
  readFromLS, 
  writeToLS, 
  getArrayFromLS, 
  removeFromLS 
};