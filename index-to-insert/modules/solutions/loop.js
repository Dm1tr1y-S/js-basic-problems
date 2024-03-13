export default (numbers, insertingNum) => {
    if (!Array.isArray(numbers) || typeof insertingNum !== 'number') {
        throw new TypeError(`Invalid arguments: first arguments should be an array, second argument should be a number.\nReceived ${numbers}, ${insertingNum}.`);
    }

    const localNumbers = [...numbers];
    localNumbers.sort((a, b) => a - b);

    for (const [ index, number ] of localNumbers.entries()) {
        if (insertingNum <= number) {
            return index;
        }
    }

    return localNumbers.length;
};