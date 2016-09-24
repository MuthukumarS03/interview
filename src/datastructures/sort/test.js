'use strict';
var beautify = require('../../util/beautify'),
    bubbleSort = require('./bubbleSort'),
    selectionSort = require('./selectionSort'),
    mergeSort = require('./mergeSort');


function testSorting(sort) {

    function sorting () {
        var arr = [ 22, -32, 5, -34, 5];
        console.log('Array before sort ', arr);
        sort(arr);
        console.log('Array after sort ', arr);
    }
    
    //Dynamically set the name of 'sorting' function.
    Object.defineProperty(sorting, 'name', { value: sort.name });

    return sorting;
}


module.exports = function testSort() {

    /** Bubble Sort **/
    beautify(testSorting(bubbleSort));

    /** Selection Sort **/
    beautify(testSorting(selectionSort));

    /** Merge Sort **/
    beautify(testSorting(mergeSort));

};