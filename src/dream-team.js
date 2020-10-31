const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(arr) {
    if (arr === undefined)
        return false;
    else
    if (arr === null)
        return false;
    else {
        let objIsArray = Array.isArray(arr);
        if (objIsArray === false) {
            return false;
        } else {
            let arr_l = arr.length;
            if (arr_l === 0) {
                return false;
            } else {
                let team = [];
                let j = 0;
                for (let i = 0; i < arr_l; i++) {
                    if (typeof arr[i] === "string") {
                        team[j] = arr[i].toUpperCase().trim();
                        if (team[j].indexOf(' ') === -1) {
                            team[j] = team[j].slice(0, team[j].indexOf(' ') - 1);
                        }
                        team[j] = team[j].charAt(0);
                        j++;
                    }
                }
                team.sort();
                return team.join('').trim();
            }
        }
    }
};