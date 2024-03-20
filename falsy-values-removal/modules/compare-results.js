import * as solutionModule from "./solution.js"
import compareArraysIncludingNaN from "./compare-arrays-including-nan.js";

export default testObj => {
    if (typeof testObj !== 'object') {
        throw new TypeError(`Invalid arguments: first argument should be an object.\nReceived: ${testObj}`);
    }

    const { testCaseIndex, expectedResult, functionName, inputs: { arr }} = testObj;
    const actualResult = solutionModule[functionName](arr);

    if (!compareArraysIncludingNaN(actualResult, expectedResult)) {
        throw new Error(`${functionName}(${JSON.stringify(arr)}) doesn't equal ${JSON.stringify(expectedResult)} for Test Case ${testCaseIndex + 1}\nActual result: ${JSON.stringify(actualResult)}`);
    }

    console.log(`  ${functionName}(array) equals ${JSON.stringify(expectedResult)}`);
};