export default num => {
    if (typeof num !== 'number') {
        throw new TypeError(`Invalid arguments: first argument should be a number.\nRecived: ${num}.`);
    }

    let result = 1;
    
    for (let i = num; i > 1; i--) {
        result *= i;
    }
    
    return result;
};