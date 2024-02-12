export default str => {
    if (typeof str !== 'string') {
        throw new TypeError(`Invalid arguments: first argument should be a string.\nReceived ${str}.`);
    }

    let result = '';

    for (let i = 0; i < str.length; i++) {
        const char = (i === 0) || (str[i - 1] === ' ') 
            ? str[i].toUpperCase() 
            : str[i].toLowerCase();
        result = `${result}${char}`;
    }

    return result;
};