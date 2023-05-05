function reverse(str) {
    if (typeof str !== 'string') {
        throw new Error('Param has to be an string');
    }

    let result = '';

    for (let i = str.length -1; i >= 0; i--) {
        result += str[i];
    }

    return result;
}

module.exports = reverse