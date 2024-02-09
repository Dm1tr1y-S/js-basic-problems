export default num => {
    if (typeof num !== 'number') {
        throw new TypeError(`Invalid arguments: first argument should be a number.\nRecived: ${num}.`);
    }

    const rec = i => i <= 1 ? 1 : rec(i - 1) * i;
    return rec(num);
};