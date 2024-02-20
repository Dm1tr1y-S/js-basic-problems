import * as solutionModule from "./solution.js"

export default testObj => {
    if (typeof testObj !== 'object') {
        throw new TypeError(`Invalid arguments: first argument should be an object.\nReceived: ${testObj}`);
    }

    const { testCaseIndex, expectedResult, functionName, inputs } = testObj;
    const { str, target } = inputs;
    const actualResult = solutionModule[functionName](str, target);

    if (actualResult !== expectedResult) {
        throw new Error(`${functionName}(${str}, ${target}) !== ${expectedResult} for Test Case ${testCaseIndex + 1}\nActual result: ${actualResult}`);
    }

    console.log(`  ${functionName}(${str}, ${target}) === ${expectedResult}`);
};