export default (arr, insertingArr, indexToInsert) => {
    if (!Array.isArray(insertingArr) || !Array.isArray(arr) || typeof indexToInsert !== 'number') {
        throw new TypeError(`Invalid arguments: first and second arguments should be arrays, third argument should be a number.\nReceived ${insertingArr}, ${arr}, ${indexToInsert}.`);
    }

    const localArr = arr.slice();
    localArr.splice(indexToInsert, 0, ...insertingArr);
    return localArr;
};