import * as sampleModule from "./sample.js"
import * as solutionModule from "./solution.js"
import compareResults from "./compare-results.js"

export default testCaseIndex => {
    if (typeof testCaseIndex !== 'number') {
        throw new Error(`Invalid arguments: frist argument should be a number.\nReceived: ${testCaseIndex}`);
    }

    const expectedResult = sampleModule.expectedResults[testCaseIndex];
    const arr = sampleModule.inputValues[testCaseIndex];

    console.log(`Test Case ${testCaseIndex + 1}`);
    console.log(`  Expected result - ${expectedResult}`);
    console.log(`  Input array - ${JSON.stringify(arr)}\n`);

    for (const functionName of Object.keys(solutionModule)) {
        const testObj = {
            testCaseIndex,
            expectedResult,
            functionName,
            inputs: {
                arr
            }
        };
        compareResults(testObj);
    }

    console.log('\n\n');
};