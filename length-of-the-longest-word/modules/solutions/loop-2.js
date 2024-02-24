export default str => {
    if (typeof str !== 'string') {
        throw new TypeError(`Invalid argument: first argument should be a string.\nReceived: ${str}.`);
    }

    let longestLength = 0;
    let currentLength = 0;

    for (let i = 0; i < str.length; i++) {
        const char = str[i];

        if (char === ' ') {
            if (currentLength > longestLength) {
                longestLength = currentLength;
            }

            currentLength = 0;
        } else {
            currentLength++;
        }
    }
    
    if (currentLength > longestLength) {
        longestLength = currentLength;
    }
    
    return longestLength;
};