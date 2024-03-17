export default array2D => {
    if (!Array.isArray(array2D)) {
        throw new TypeError(`Invalid argument: first argument should be an array.\nReceived ${array2D}.`);
    }

    return array2D.map(nestedArr => 
        nestedArr.reduce((largestNum, currentNum) => 
            Math.max(largestNum, currentNum), -Infinity));
};