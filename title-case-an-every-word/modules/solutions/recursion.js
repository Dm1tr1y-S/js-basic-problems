export default str => {
    if (typeof str !== 'string') {
        throw new TypeError(`Invalid arguments: first argument should be a string.\nReceived ${str}.`);
    }

    const rec = i => {
        if (i === str.length) {
            return '';
        }
        
        const char = (i === 0) || (str[i - 1] === ' ') 
            ? str[i].toUpperCase() 
            : str[i].toLowerCase();
        return `${char}${rec(i + 1)}`;
    };

    return rec(0);
};