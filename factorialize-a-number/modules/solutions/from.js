export default num => {
    if (typeof num !== 'number') {
        throw new TypeError(`Invalid arguments: first argument should be a number.\nRecived: ${num}.`);
    }

    const numbers = Array.from(
        {length: num},
        (_, i) => i + 1);
    return numbers.reduce((result, number) => result * number, 1);
};
