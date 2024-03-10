const inputValues = [
    {
        arr : [true, 2, NaN, [], false, 'str', -Infinity, true, {}],
        callback(e, i, arr) { return typeof e === 'boolean'; }
    },
    {
        arr : ['hello', 'bye', '', 'hell', 'howdy', '123'],
        callback(e, i, arr) { return arr[i].startsWith('h'); }
    },
    {
        arr : ['hello', 'world', 3, null, NaN, 6, 7, -Infinity, 'ninth-element', 10],
        callback(e, i, arr) { return (i + 1) % 3 === 0; }
    },
    {
        arr : [NaN, false, 0, '', null, undefined],
        callback(e, i, arr) { return Boolean(e); }
    }
];
const expectedResults = [
    [true, false, true],
    ['hello', 'hell', 'howdy'],
    [3, 6, 'ninth-element'],
    []
];

export { inputValues, expectedResults }