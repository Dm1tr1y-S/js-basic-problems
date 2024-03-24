export default (arr, insertingArr, indexToInsert) => {
    if (!Array.isArray(insertingArr) || !Array.isArray(arr) || typeof indexToInsert !== 'number') {
        throw new TypeError(`Invalid arguments: first and second arguments should be arrays, third argument should be a number.\nReceived ${insertingArr}, ${arr}, ${indexToInsert}.`);
    }

    const localArr = [...arr];
    let currentIndex = indexToInsert;

    for (const element of insertingArr) {
        localArr.splice(currentIndex, 0, element);
        currentIndex++;
    }

    return localArr;
};