export default arr => {
    if (!Array.isArray(arr) || arr.length !== 2) {
        throw new TypeError(`Invalid arguments: first argument should be an array with two elements.\nReceived ${arr}`);
    }

    const [ str, target ] = arr;

    // Create a regular expression to match any character not in `str`
    const regex = new RegExp(`[^${str}]`, 'ig');

    // Return !true if `target` has characters not presented in `str`
    return !regex.test(target);
};