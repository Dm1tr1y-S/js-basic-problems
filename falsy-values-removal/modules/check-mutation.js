import compareArraysIncludingNaN from "./compare-arrays-including-nan.js"

export default (actualArr, expectedArr) => {
    if (!Array.isArray(actualArr) || !Array.isArray(expectedArr)) {
        throw new TypeError(`Invalid arguments: both arguments should be arrays.\nReceived: ${actualArr}, ${expectedArr}.`);
    }

    console.log(`  Expected array - ${JSON.stringify(expectedArr)}`);

    if (!compareArraysIncludingNaN(actualArr, expectedArr)) {
        throw new Error(`${JSON.stringify(actualArr)} has mutated.\nExpected  - ${JSON.stringify(expectedArr)}`);
    }

    console.log(`  Actual array - ${JSON.stringify(actualArr)}`);
};