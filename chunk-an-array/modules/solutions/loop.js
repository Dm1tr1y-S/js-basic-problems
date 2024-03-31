export default (arr, size) => {
    if (!Array.isArray(arr) || typeof size !== 'number') {
        throw new TypeError(`Invalid arguments: first argument should be an array, second argument should be a number.\nReceived: ${arr}, ${size}.`);
    }

    const resultArr = [];
    let tempArr = [];

    for (const element of arr) {
        tempArr.push(element);

        if (tempArr.length === size) {
            resultArr.push([...tempArr]);
            tempArr = [];
        }
    }

    if (tempArr.length !== 0) {
        resultArr.push([...tempArr]);
    }
    
    return resultArr;
};