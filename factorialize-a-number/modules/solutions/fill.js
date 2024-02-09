export default num => {
    if (typeof num !== 'number') {
        throw new TypeError(`Invalid arguments: first argument should be a number.\nRecived: ${num}.`);
    }

    const numbers = new Array(num)
        .fill('')
        .map((_, i) => i + 1);
    return numbers.reduce((result, number) => result * number, 1);
};