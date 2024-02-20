const inputValues = [
    {
        str : 'Open sesame',
        target : 'same'
    },
    {
        str : 'Abstraction',
        target : 'action'
    },
    {
        str : '',
        target : ''
    },
    {
        str : 'this one is negative',
        target : 'positive'
    },
    {
        str : '',
        target : 'found anything?'
    }
];
const expectedResults = [
    true,
    true,
    true,
    false,
    false
];

export { inputValues, expectedResults }