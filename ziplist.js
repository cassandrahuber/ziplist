"use strict";
function ziplist(list1, list2) {
    if (list1.length !== list2.length) {
        throw new Error('Lists must be of the same length');
    }
    const result = [];
    for (let i = 0; i < list1.length; i++) {
        result.push(list1[i], list2[i]);
    }
    return result;
}
console.log(ziplist(['a', 'b', 'c'], ['1', '2', '3']));
function zipListTheFunctionalWay(list1, list2) {
    if (list1.length !== list2.length) {
        throw new Error('Lists must be of the same length');
    }
    const result = [];
    list1.forEach((item, i) => result.push(item, list2[i]));
    return result;
}
console.log(zipListTheFunctionalWay(['a', 'b', 'c'], ['1', '2', '3']));
