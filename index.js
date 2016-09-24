'use strict';

var beautify = require('./src/util/beautify'),
	testLinkedList = require('./src/datastructures/linkedList/test'),
	testSort = require('./src/datastructures/sort/test');;

/** Linked List **/
testLinkedList();

/** Sort **/
testSort();