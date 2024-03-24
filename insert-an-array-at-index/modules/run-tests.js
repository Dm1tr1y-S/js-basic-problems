import * as samplesModule from "./sample.js"
import runTestCase from "./run-test-case.js"

export default taskName => {
    if (typeof taskName !== 'string') {
        throw new TypeError(`Invalid arguments: first argument should be a string.\nReceived: ${taskName}`);
    }

    console.log(`Testing ${taskName} Functions\n\n`);

    for (let testCaseIndex = 0; testCaseIndex < samplesModule.expectedResults.length; testCaseIndex++) {
        runTestCase(testCaseIndex);
    }
};