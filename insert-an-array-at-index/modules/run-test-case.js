import * as sampleModule from "./sample.js";
import * as solutionModule from "./solution.js";
import compareResults from "./compare-results.js";
import checkMutation from "./check-mutation.js";

export default testCaseIndex => {
    if (typeof testCaseIndex !== 'number') {
        throw new TypeError(`Invalid arguments: first argument should be a number.\nReceived: ${testCaseIndex}`);
    }

    const { resultArr: expectedResult } = sampleModule.expectedResults[testCaseIndex];
    const {  arr, insertingArr, indexToInsert } = sampleModule.inputValues[testCaseIndex];

    console.log(`Test Case ${testCaseIndex + 1}`);
    console.log(`  Expected result - ${JSON.stringify(expectedResult)}`);
    console.log(`  Input array - ${JSON.stringify(arr)}`);
    console.log(`  Inserting array - ${JSON.stringify(insertingArr)}`);
    console.log(`  Index to insert - ${indexToInsert}\n`);

    for (const functionName of Object.keys(solutionModule)) {
        const testObj = {
            testCaseIndex,
            expectedResult,
            functionName,
            inputs: {
                arr,
                insertingArr,
                indexToInsert
            }
        };
        compareResults(testObj);
    }

    console.log('\nChecking for Mutation:');
    const { inputArr, inputInsertingArr } = sampleModule.expectedResults[testCaseIndex]

    // Check if input arrays has mutated after executing functions from /moduels/solutions/ dir
    checkMutation(arr, inputArr);
    checkMutation(insertingArr, inputInsertingArr);
    console.log('\n\n');
};
