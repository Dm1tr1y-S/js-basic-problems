export default (numbers, insertingNum) => {
    if (!Array.isArray(numbers) || typeof insertingNum !== 'number') {
        throw new TypeError(`Invalid arguments: first arguments should be an array, second argument should be a number.\nReceived ${numbers}, ${insertingNum}.`);
    }

    const numbersLessThanInserting = numbers.filter(number => number < insertingNum);
    return numbersLessThanInserting.length;
};