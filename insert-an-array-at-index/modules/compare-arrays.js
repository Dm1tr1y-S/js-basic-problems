export default (arr1, arr2) => {
    if (!Array.isArray(arr1) || !Array.isArray(arr2)) {
        throw new TypeError(`Invalid arguments: both arguments should be arrays.\nReceived: ${arr1}, ${arr2}.`);
    }

    const isEqualLength = arr1.length === arr2.length;

    return isEqualLength && 
        arr1.every((element, index) => element === arr2[index]);
};