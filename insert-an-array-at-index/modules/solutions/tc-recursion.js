export default (arr, insertingArr, indexToInsert) => {
    if (!Array.isArray(insertingArr) || !Array.isArray(arr) || typeof indexToInsert !== 'number') {
        throw new TypeError(`Invalid arguments: first and second arguments should be arrays, third argument should be a number.\nReceived ${insertingArr}, ${arr}, ${indexToInsert}.`);
    }

    const localArr = [...arr];

    const iter = (remainingArr, resultArr, index) => {
        if (remainingArr.length === 0) {
            return resultArr;
        }

        resultArr.splice(index, 0, remainingArr[0]);
        return iter(remainingArr.slice(1), resultArr, index + 1);
    }

    return iter(insertingArr, localArr, indexToInsert);
};