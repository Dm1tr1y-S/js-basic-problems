export default str => {
    if (typeof str !== 'string') {
        throw new TypeError(`Invalid arguments: first argument should be a string.\nReceived: ${str}.`);
    }

    const rec = remainingStr => {
        return remainingStr.length === 0 
            ? '' 
            : `${remainingStr.slice(-1)}${rec(remainingStr.slice(0, - 1))}`;
    };
    
    return rec(str);
};