export default arr => {
    if (!Array.isArray(arr)) {
        throw new TypeError(`Invalid arguments: first argument should be an array.\nReceived ${arr}.`);
    }

    const iter = (remainingArr, truthyArr) => {
        if (remainingArr.length === 0) {
            return truthyArr;
        } else if (remainingArr[0]) {
            truthyArr.push(remainingArr[0]);
        }

        return iter(remainingArr.slice(1), truthyArr);
    };

    return iter(arr, []);
};