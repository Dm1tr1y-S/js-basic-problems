import * as sampleModule from "./sample.js";
import * as solutionModule from "./solution.js";
import compareResults from "./compare-results.js";

export default testCaseIndex => {
    if (typeof testCaseIndex !== 'number') {
        throw new TypeError(`Invalid arguments: first argument should be a number.\nReceived: ${testCaseIndex}`);
    }

    const expectedResult = sampleModule.expectedResults[testCaseIndex];
    const num  = sampleModule.inputValues[testCaseIndex]

    console.log(`Test Case ${testCaseIndex + 1}`);
    console.log(`  Expected result - ${expectedResult}`);
    console.log(`  Input number - ${num}\n`);

    for (const functionName of Object.keys(solutionModule)) {
        const testObj = {
            testCaseIndex: testCaseIndex,
            expectedResult: expectedResult,
            functionName: functionName,
            inputs: {
                num: num,
            }
        };
        compareResults(testObj);
    }

    console.log('\n\n');
};