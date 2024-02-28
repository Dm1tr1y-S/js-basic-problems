const inputValues = [
    {
        arr : ['wrong', 'aslo-wrong', 'correct-element'],
        callback(e, i, arr) { return i === 2; }
    },
    {
        arr : ['hello', 'wrong', 'still-wrong'],
        callback(e, i, arr) { return e.endsWith('llo'); }
    },
    {
        arr : ['wrong', 'also-wrong', 'this-one'],
        callback(e, i, arr) { return (arr[i] !== 'wrong') && (arr[i] !== 'also-wrong'); }
    }
];
const expectedResults = [
    'correct-element',
    'hello',
    'this-one'
];

export { inputValues, expectedResults }