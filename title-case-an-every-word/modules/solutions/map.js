export default str => {
    if (typeof str !== 'string') {
        throw new TypeError(`Invalid arguments: first argument should be a string.\nReceived ${str}.`);
    }

    if (str.length === 0) {
        return '';
    }

    return str
        .split(' ')
        .map(word => `${word[0].toUpperCase()}${word.substring(1).toLowerCase()}`)
        .join(' ');
};