export default str => {
    if (typeof str !== 'string') {
        throw new TypeError(`Invalid arguments: first argument should be a string.\nReceived: ${str}.`);
    }

    let result = '';

    for (const char of str) {
        result = `${char}${result}`;
    }
    
    return result;
};