const inputValues = [
    [7,  "ate", "", false, 9],
    [false, null, 0, NaN, undefined, ""],
    [null, NaN, 1, 2, undefined]
];
const expectedResults = [
    {
        resultArr : [7, "ate", 9],
        inputArr : [7, "ate", "", false, 9]
    },
    {
        resultArr : [],
        inputArr : [false, null, 0, NaN, undefined, ""]
    },
    {
        resultArr : [1, 2],
        inputArr : [null, NaN, 1, 2, undefined]
    }
];

export { inputValues, expectedResults }