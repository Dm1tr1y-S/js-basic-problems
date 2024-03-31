import * as solutionModule from "./solution.js"
import compare2DArrays from "./compare-2d-arrays.js";

export default testObj => {
    if (typeof testObj !== 'object') {
        throw new TypeError(`Invalid arguments: first argument should be an object.\nReceived: ${testObj}`);
    }

    const { testCaseIndex, expectedResult, functionName, inputs: { arr, size }} = testObj;
    const actualResult = solutionModule[functionName](arr, size);

    if (!compare2DArrays(actualResult, expectedResult)) {
        throw new Error(`${functionName}(${JSON.stringify(arr)}, ${size}) doesn't equal ${JSON.stringify(expectedResult)} for Test Case ${testCaseIndex + 1}\nActual result: ${JSON.stringify(actualResult)}`);
    }

    console.log(`  ${functionName}(array}, ${size}) equals ${JSON.stringify(expectedResult)}`);
};