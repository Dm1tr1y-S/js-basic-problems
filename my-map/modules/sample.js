const inputValues = [
    {
        arr : ['hello', 'world', 'wyd'],
        callback(e, i, arr) { return e.length; }
    },
    {
        arr : ['now', 'this', 'is', 'uppercased'],
        callback(e, i, arr) { return arr[i].toUpperCase(); }
    },
    {
        arr : [0, 'convert', [], {}, false],
        callback(e, i, arr) { return Boolean(arr[i]); }
    },
    {
        arr : ['count', 'to', 3],
        callback(e, i, arr) { return i + 1; }
    },
    {
        arr : [],
        callback(e, i, arr) { return null; }
    }
];
const expectedResults = [
    [5, 5, 3],
    [ "NOW", "THIS", "IS", "UPPERCASED" ],
    [false, true, true, true, false],
    [1, 2, 3],
    []
];

export { inputValues, expectedResults }