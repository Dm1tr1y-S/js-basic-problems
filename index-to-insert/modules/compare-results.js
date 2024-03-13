import * as solutionModule from "./solution.js"

export default testObj => {
    if (typeof testObj !== 'object') {
        throw new TypeError(`Invalid arguments: first argument should be an object.\nReceived: ${testObj}`);
    }

    const { testCaseIndex, expectedResult, functionName, inputs: { arr, insertingNumber }} = testObj;
    const actualResult = solutionModule[functionName](arr, insertingNumber);

    if (actualResult !== expectedResult) {
        throw new Error(`${functionName}(${JSON.stringify(arr)}, ${insertingNumber}) !== ${expectedResult} for Test Case ${testCaseIndex + 1}\nActual result: ${actualResult}`);
    }

    console.log(`  ${functionName}(array, ${insertingNumber}) === ${expectedResult} `);
};