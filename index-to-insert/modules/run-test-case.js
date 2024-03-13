import * as sampleModule from "./sample.js";
import * as solutionModule from "./solution.js";
import compareResults from "./compare-results.js";
import checkMutation from "./check-mutation.js";

export default testCaseIndex => {
    if (typeof testCaseIndex !== 'number') {
        throw new TypeError(`Invalid arguments: first argument should be a number.\nReceived: ${testCaseIndex}`);
    }

    const { indexOfElement: expectedResult } = sampleModule.expectedResults[testCaseIndex];
    const { arr, insertingNumber } = sampleModule.inputValues[testCaseIndex];

    console.log(`Test Case ${testCaseIndex + 1}`);
    console.log(`  Expected result - ${expectedResult}`);
    console.log(`  Input array - ${JSON.stringify(arr)}`);
    console.log(`  Inserting number - ${insertingNumber}\n`);

    for (const functionName of Object.keys(solutionModule)) {
        const testObj = {
            testCaseIndex,
            expectedResult,
            functionName,
            inputs: {
                arr,
                insertingNumber,
            }
        };
        compareResults(testObj);
    }

    console.log('\nChecking for Mutation:');
    const { inputArr: expectedArr } = sampleModule.expectedResults[testCaseIndex]

    // Check if input arrays has mutated after executing functions from /moduels/solutions/ dir
    checkMutation(arr, expectedArr);
    console.log('\n\n');
};
