const inputValues = [
    {
        str: 'Hello world',
        maxLength: 4,
    },
    {
        str: 'Hello world',
        maxLength: 5,
    },
    {
        str: 'Hello world',
        maxLength: 'Hello world'.length,
    },
    {
        str: 'Hello world',
        maxLength: 'Hello world'.length + 100,
    },
    {
        str: 'Hello world',
        maxLength: 0,
    },
    {
        str: 'Hello world',
        maxLength: -1,
    },
];
const expectedResults = [
    'Hell...',
    'Hello...',
    'Hello world',
    'Hello world',
    '',
    ''
];

export { inputValues, expectedResults }