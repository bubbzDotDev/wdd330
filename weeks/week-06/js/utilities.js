'use strict';

/**
 * Do a querySelector lookup
 * @param  {string} selector The selector passed to querySelector
 * @return {element}     The matching element or null if not found
 */
function qs(selector) {
   return document.querySelector(selector);
}

function compare(a, b) { // From: https://stackoverflow.com/questions/1129216/sort-array-of-objects-by-string-property-value
   if ( a.id < b.id ){
      return -1;
    }
    if ( a.id > b.id ){
      return 1;
    }
    return 0;
}

export default { qs, compare };