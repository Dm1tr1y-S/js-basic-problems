export default arr => {
    if (!Array.isArray(arr) || arr.length !== 2) {
        throw new TypeError(`Invalid arguments: first argument should be an array with two elements.\nReceived ${arr}`);
    }

    const [ str, target ] = arr.map(element => element.toLowerCase());

    const iter = remainingTarget => {
        if (remainingTarget.length === 0) {
            return true;
        } else if (!str.includes(remainingTarget[0])) {
            return false;
        }

        return iter(remainingTarget.substring(1));
    };

    return iter(target);
};