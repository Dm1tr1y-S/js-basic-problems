export default str => {
    if (typeof str !== 'string') {
        throw new TypeError(`Invalid arguments: first argument should be a string.\nReceived: ${str}.`);
    }
    
    const iter = (remainingStr, result) => {
        return remainingStr.length === 0 
            ? result 
            : iter(remainingStr.slice(0, -1), `${result}${remainingStr.slice(-1)}`);
    };
    
    return iter(str, '');
};