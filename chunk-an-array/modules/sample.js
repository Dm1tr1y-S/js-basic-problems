const inputValues = [
    {
        arr : ["a", "b", "c", "d",],
        size : 2
    },
    {
        arr : [0, 1, 2, 3, 4, 5, 6],
        size : 3
    },
    {
        arr : [],
        size : 10
    }
];
const expectedResults = [
    {
        resultArr: [["a", "b"], ["c", "d"]],
        inputArr: ["a", "b", "c", "d",]
    },
    {
        resultArr: [[0, 1, 2], [3, 4, 5], [6]],
        inputArr: [0, 1, 2, 3, 4, 5, 6]
    },
    {
        resultArr: [],
        inputArr: []
    }
];

export { inputValues, expectedResults }