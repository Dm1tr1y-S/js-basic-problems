const inputValues = [
    {
        arr: [50, 10, 20, 30, 40],
        insertingNumber: 35, 
    },
    {
        arr: [60, 55, 45, 40, 60],
        insertingNumber: 50,
    },
    {
        arr: [2, 20, 10],
        insertingNumber: 19,
    },
    {
        arr: [],
        insertingNumber: 100,
    }   
];
const expectedResults = [
    {
        indexOfElement: 3,
        inputArr: [50, 10, 20, 30, 40]
    },
    {
        indexOfElement: 2,
        inputArr: [60, 55, 45, 40, 60]
    },
    {
        indexOfElement: 2,
        inputArr: [2, 20, 10]
    },
    {
        indexOfElement: 0,
        inputArr: []
    }
];

export { inputValues, expectedResults }