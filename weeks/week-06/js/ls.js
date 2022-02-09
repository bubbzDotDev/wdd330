'use strict';

import utilities from './utilities.js';

/**
 * read a value from local storage and parse it as JSON
 * @param  {string} key The key under which the value is stored under in LS
 */
function readFromLS(key) {
   return JSON.parse(localStorage.getItem(key));
}

 /**
  * write an array of objects to local storage under the provided key
  * @param  {string} key The key under which the value is stored under in LS
  */
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
  todos.sort(utilities.compare).reverse();
  return todos;
}

export default { readFromLS, writeToLS, getArrayFromLS };