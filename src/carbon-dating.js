 const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;


module.exports = function dateSample(str) {
    if (typeof str === "string") {
        let a = parseFloat(str);
        if (a !== NaN)
            if (a !== 0) {
                let k = 0.693 / HALF_LIFE_PERIOD;
                let t = Math.log(MODERN_ACTIVITY / a) / k;
                let t_end = Math.ceil(t);
                if (t_end > 0)
                    return t_end;
                else
                    return false;
            }
        return false;
    } else
        return false;
};