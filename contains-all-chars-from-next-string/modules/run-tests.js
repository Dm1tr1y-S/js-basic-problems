import * as sampleModule from "./sample.js"
import runTestCase from "./run-test-case.js";

export default taskName => {
    if (typeof taskName !== 'string') {
        throw new Error(`Invalid arguments: frist argument should be a string.\nReceived: ${taskName}`);
    }

    console.log(`Testing ${taskName} Functions\n\n`);

    for (let testCaseIndex = 0; testCaseIndex < sampleModule.expectedResults.length; testCaseIndex++) {
        runTestCase(testCaseIndex);
    }
};