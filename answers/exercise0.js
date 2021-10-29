var countSheep = function (num) {
    let sheepString = ''
    for (let i = 1; i <= num; i++){
        sheepString += i + " sheep..."
    }
    return sheepString
};

module.exports = countSheep;
