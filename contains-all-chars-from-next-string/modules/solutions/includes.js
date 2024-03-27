export default arr => {
    if (!Array.isArray(arr) || arr.length !== 2) {
      throw new TypeError(`Invalid arguments: first argument should be an array with two elements.\nReceived ${arr}`);
    }

    const [ str, target ] = arr.map(element => element.toLowerCase());
    
    for (const char of target) {
      if (!str.includes(char)) {
        return false;
      }
    }

  return true;
};