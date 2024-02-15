import * as solutionModule from "./solution.js"

export default testObj => {
    if (typeof testObj !== 'object') {
        throw new TypeError(`Invalid arguments: first argument should be an object.\nReceived: ${testObj}`);
    }

    const { testCaseIndex, expectedResult, functionName, inputs } = testObj;
    const { str, timesRepeat } = inputs;
    const actualResult = solutionModule[functionName](str, timesRepeat);

    if (actualResult !== expectedResult) {
        throw new Error(`${functionName}(${str}, ${timesRepeat}) !== ${expectedResult} for Test Case ${testCaseIndex + 1}\nActual result: ${actualResult}`);
    }

    console.log(`  ${functionName}(${str}, ${timesRepeat}) === ${expectedResult}`);
};