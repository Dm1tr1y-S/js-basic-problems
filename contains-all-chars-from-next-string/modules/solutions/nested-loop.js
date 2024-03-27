export default arr => {
    if (!Array.isArray(arr) || arr.length !== 2) {
        throw new TypeError(`Invalid arguments: first argument should be an array with two elements.\nReceived ${arr}`);
    }

    const [ str, target ] = arr;
    
    for (let i = 0; i < target.length; i++) {
        let includesChar = false;

        for (let j = 0; j < str.length; j++) {
            if (target[i].toLowerCase() === str[j].toLowerCase()) {
                includesChar = true;
            }
        }

        if (!includesChar) {
            return false;
        }
    }
    
    return true;
};