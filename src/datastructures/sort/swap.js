'use strict';

module.exports = function swap(arr, i, j) {
    console.log('Swapping ', arr[i], arr[j]);
    arr[i] = arr[i] + arr[j];
    arr[j] = arr[i] - arr[j];
    arr[i] = arr[i] - arr[j];
};