const CustomError = require("../extensions/custom-error");

module.exports = function countCats(twoDimens) {
    let kol = 0;
    let n_str = twoDimens.length;
    let objIsArray = Array.isArray(twoDimens);
    if (objIsArray === false || undefined) {
        return 0;
    }
    if (n_str === 0) {
        return 0;
    } else {
        for (var i = 0; i < twoDimens.length; i++) {
            for (var j = 0; j < twoDimens[i].length; j++) {
                if (twoDimens[i][j] === "^^") {
                    kol = kol + 1;
                }
            }
        }
        return kol;
    }
}