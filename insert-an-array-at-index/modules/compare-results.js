import * as solutionModule from "./solution.js"
import compareArrays from "./compare-arrays.js";

export default testObj => {
    if (typeof testObj !== 'object') {
        throw new TypeError(`Invalid arguments: first argument should be an object.\nReceived: ${testObj}`);
    }

    const { testCaseIndex, expectedResult, functionName, inputs: { arr, insertingArr, indexToInsert }} = testObj;
    const actualResult = solutionModule[functionName](arr, insertingArr, indexToInsert);

    if (!compareArrays(actualResult, expectedResult)) {
        throw new Error(`${functionName}(${JSON.stringify(arr)}, ${JSON.stringify(insertingArr)}, ${indexToInsert}) doesn't equal ${JSON.stringify(expectedResult)} for Test Case ${testCaseIndex + 1}\nActual result: ${JSON.stringify(actualResult)}`);
    }

    console.log(`  ${functionName}(array, insertingArray, ${indexToInsert}) equals ${JSON.stringify(expectedResult)}`);
};