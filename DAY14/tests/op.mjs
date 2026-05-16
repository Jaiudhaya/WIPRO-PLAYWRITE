function sum(a, b) {
    return a + b;
}

function sub(a, b) {
    return a - b;
}

// 1 function to export --> export default sum;
// exports 2 or more (ie) export sum, sub; --> module.exports = {sum, sub};

export default sum; // only sum func exports