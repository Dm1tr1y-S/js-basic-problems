export default arr => {
    if (!Array.isArray(arr)) {
        throw new TypeError(`Invalid arguments: first argument should be an array.\nReceived ${arr}.`);
    }

    const rec = remainingArr => {
        if (remainingArr.length === 0) {
            return [];
        } else if (remainingArr[0]) {
            return [
                remainingArr[0],
                ...rec(remainingArr.slice(1))
            ];
        }

        return rec(remainingArr.slice(1));
    };

    return rec(arr);
};