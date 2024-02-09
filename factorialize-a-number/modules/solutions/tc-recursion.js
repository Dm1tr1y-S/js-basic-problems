export default num => {
    if (typeof num !== 'number') {
        throw new TypeError(`Invalid arguments: first argument should be a number.\nRecived: ${num}.`);
    }

    const iter = (i, result) => i <= 1 ? result : iter(i - 1, result * i);
    return iter(num, 1);
};