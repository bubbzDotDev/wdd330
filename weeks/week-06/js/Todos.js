'use strict';

import utilities from './utilities.js';
import ls from './ls.js';


export default class Todo {

  constructor(id, content, completed) {
    this.id = id;
    this.content = content;
    this.completed = completed;
  }

  save() {
    ls.writeToLS(this.id, JSON.stringify(this));
  }

};