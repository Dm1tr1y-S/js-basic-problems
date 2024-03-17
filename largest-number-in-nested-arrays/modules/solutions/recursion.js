export default array2D => {
    if (!Array.isArray(array2D)) {
        throw new TypeError(`Invalid argument: first argument should be an array.\nReceived ${array2D}.`);
    }

    const rec = remainingArr => {
        return remainingArr.length === 0 
            ? [] 
            : [
                Math.max(...remainingArr[0]),
                ...rec(remainingArr.slice(1))
            ];
    };

    return rec(array2D);
};