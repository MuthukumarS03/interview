'use strict';

var beautify = require('./src/util/beautify'),
	testLinkedList = require('./src/datastructures/linkedList/test'),
	testSort = require('./src/datastructures/sort/test'),
	testTree = require('./src/datastructures/tree/test');

/** Linked List **/
testLinkedList();

/** Sort **/
testSort();

/** Tree **/
testTree();