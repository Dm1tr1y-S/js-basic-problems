export default str => {
    if (typeof str !== 'string') {
        throw new TypeError(`Invalid arguments: first argument should be a string.\nReceived ${str}.`);
    }

    if (str.length === 0) {
        return '';
    }

    return str
            .split('')
            .reduce((result, char, i, arr) =>  {
                const actualChar = (i === 0) || (arr[i - 1] === ' ') 
                    ? char.toUpperCase() 
                    : char.toLowerCase();
                return `${result}${actualChar}`;
            }, '');
                          
};