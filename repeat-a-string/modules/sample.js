const inputValues = [
    {
        str : 'abc',
        timesRepeat : 3
    },
    {
        str : 'qwe',
        timesRepeat : 1
    },
    {
        str : '*',
        timesRepeat : -2
    },
    {
        str : 'hello',
        timesRepeat : 0
    }
];
const expectedResults = [
    'abcabcabc',
    'qwe',
    '',
    ''
];

export { inputValues, expectedResults }