const inputValues = [
    {
        arr : ["head", "shoulders", "knees", "toes"],
        insertingArr : ["claw", "tentacle"],
        indexToInsert : 2
    },
    {
        arr : [4, 5],
        insertingArr : [1, 2, 3],
        indexToInsert : 1
    },
    {
        arr : [],
        insertingArr : [1, 2, 3, 4,],
        indexToInsert : 0
    },
];
const expectedResults = [
    {
        resultArr : ["head", "shoulders", "claw", "tentacle", "knees", "toes"],
        inputArr : ["head", "shoulders", "knees", "toes"],
        inputInsertingArr : ["claw", "tentacle"]
    },
    {
        resultArr : [4, 1, 2, 3, 5],
        inputArr : [4, 5],
        inputInsertingArr : [1, 2, 3]
    },
    {
        resultArr : [1, 2, 3, 4],
        inputArr : [],
        inputInsertingArr : [1, 2, 3, 4]
    }
];

export { inputValues, expectedResults }