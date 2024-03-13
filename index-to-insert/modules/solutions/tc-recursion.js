export default (numbers, insertingNum) => {
    if (!Array.isArray(numbers) || typeof insertingNum !== 'number') {
        throw new TypeError(`Invalid arguments: first arguments should be an array, second argument should be a number.\nReceived ${numbers}, ${insertingNum}.`);
    }

    const localNumbers = [...numbers];
    localNumbers.sort((a, b) => a - b);

    const iter = index => {
        if (index === localNumbers.length) {
            return localNumbers.length
        } else if (insertingNum <= localNumbers[index]) {
            return index;
        }

        return iter(index + 1);
    };

    return iter(0);
};