import * as sampleModule from "./sample.js";
import * as solutionModule from "./solution.js";
import compareResults from "./compare-results.js";

export default testCaseIndex => {
    if (typeof testCaseIndex !== 'number') {
        throw new TypeError(`Invalid arguments: first argument should be a number.\nReceived: ${testCaseIndex}`);
    }

    const expectedResult = sampleModule.expectedResults[testCaseIndex];
    const { arr, callback, initialValue } = sampleModule.inputValues[testCaseIndex];

    console.log(`Test Case ${testCaseIndex + 1}`);
    console.log(`  Expected result - ${JSON.stringify(expectedResult)}`);
    console.log(`  Input array - ${JSON.stringify(arr)}`);
    console.log(`  Callback - ${callback}`);
    console.log(`  Initial value - ${initialValue}\n`);

    for (const functionName of Object.keys(solutionModule)) {
        const testObj = {
            testCaseIndex,
            expectedResult,
            functionName,
            inputs: {
                arr,
                callback,
                initialValue
            }
        };
        compareResults(testObj);
    }

    console.log('\n\n');
};
