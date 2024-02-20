export default (str, target) => {
    if (typeof str !== 'string' || typeof target !== 'string') {
        throw new TypeError(`Invalid arguments: both arguments should be strings.\nReceived ${str}, ${target}.`);
    }

    if (target.length > str.length) {
        return false;
    }
    
    const startIndex = str.length - target.length;
    let substr = '';

    for (let i = startIndex; i < str.length; i++) {
        substr = `${substr}${str[i]}`;
    }

    return substr === target;
};