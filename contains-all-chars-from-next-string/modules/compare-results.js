import * as solutionModule from "./solution.js"

export default testObj => {
    if (typeof testObj !== 'object') {
        throw new Error(`Invalid arguments: frist argument should be an object.\nReceived: ${testObj}`);
    }

    const { testCaseIndex, expectedResult, functionName, inputs: { arr }} = testObj;
    const actualResult = solutionModule[functionName](arr);
    
    if (actualResult !== expectedResult) {
        throw new Error(`${functionName}(${JSON.stringify(arr)})!== ${expectedResult} for Test Case ${testCaseIndex + 1}\nActual result: ${actualResult}`);
    }

    console.log(`  ${functionName}(array) === ${expectedResult}`);
};