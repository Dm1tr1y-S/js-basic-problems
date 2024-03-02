const inputValues = [
    {
        arr : ['this', 'is', 'gonna', 'be', 'an', 'actual', 'string'],
        callback(acc, e, i, arr) { return `${acc} ${e}`; },
        initialValue: null
    },
    {
        arr : ['now', 'this', 'is', 'uppercased'],
        callback(acc, e, i, arr) { return `${acc} ${arr[i].toUpperCase()}`; },
        initialValue: 'AND'
    },
    {
        arr : [-500, 500, -300, 300, 7],
        callback(acc, e, i, arr) { return acc + e; },
        initialValue: 1000
    },
    {
        arr : [100, 40, 72, 322, -5, 0],
        callback(acc, e, i, arr) { return Math.max(acc, e); },
        initialValue: undefined
    }
];
const expectedResults = [
    'this is gonna be an actual string',
    'AND NOW THIS IS UPPERCASED',
    1007,
    322
];

export { inputValues, expectedResults }