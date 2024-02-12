export default str => {
    if (typeof str !== 'string') {
        throw new TypeError(`Invalid arguments: first argument should be a string.\nReceived ${str}.`);
    }

    const iter = (i, result) => {
        if (i === str.length) {
            return result;
        }

        const char = (i === 0) || (str[i - 1] === ' ') 
            ? str[i].toUpperCase() 
            : str[i].toLowerCase(); 
        return iter(i + 1, `${result}${char}`);
    };

    return iter(0, '');
};