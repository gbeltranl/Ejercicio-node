
function secret(array, callback , key ) {
    result = callback(array, key);
    return result;
}

function encrypt(array , key) {
    for (let i = 0; i < array.length; i++) {
        array[i] += key;
    }
    return array;
}
function decrypt(array , key) {
    for (let i = 0; i < array.length; i++) {
        array[i] -= key;
    }
    return array;
}


