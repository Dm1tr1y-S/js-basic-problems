export default arr => {
    if (!Array.isArray(arr)) {
        throw new TypeError(`Invalid arguments: first argument should be an array.\nReceived ${arr}.`);
    }

    const truthyArr = [];

    for (const element of arr) {
        if (element) {
            truthyArr.push(element);
        }
    }

    return truthyArr;
};