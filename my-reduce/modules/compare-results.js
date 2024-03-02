import * as solutionModule from "./solution.js"

export default testObj => {
    if (typeof testObj !== 'object') {
        throw new TypeError(`Invalid arguments: first argument should be an object.\nReceived: ${testObj}`);
    }

    const { testCaseIndex, expectedResult, functionName, inputs: { arr, callback, initialValue }} = testObj;
    const actualResult = solutionModule[functionName](arr, callback, initialValue); 

    if (actualResult !== expectedResult) {
        throw new Error(`${functionName}(${JSON.stringify(arr)}, ${callback}, ${initialValue}) !== ${JSON.stringify(expectedResult)} for Test Case ${testCaseIndex + 1}\nActual result: ${JSON.stringify(actualResult)}`);
    }

    console.log(`  ${functionName}(array, callback, ${initialValue}) === ${JSON.stringify(expectedResult)}`);
};
