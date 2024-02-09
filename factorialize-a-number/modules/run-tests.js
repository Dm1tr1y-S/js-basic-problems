import * as samplesModule from "./sample.js"
import runTestCase from "./run-test-case.js"

export default taskMessage => {
    if (typeof taskMessage !== 'string') {
        throw new TypeError(`Invalid arguments: first argument should be a string.\nReceived: ${taskMessage}`);
    }

    console.log(`Testing ${taskMessage} Functions\n\n`);

    for (let testCaseIndex = 0; testCaseIndex < samplesModule.expectedResults.length; testCaseIndex++) {
        runTestCase(testCaseIndex);
    }
};