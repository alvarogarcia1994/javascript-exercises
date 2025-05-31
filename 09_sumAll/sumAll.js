const sumAll = function(a, b) {

    if (!Number.isInteger(a) || !Number.isInteger(b)) return "ERROR";

    if (a < 0 || b < 0) return "ERROR";

    var total = 0;
    if (a <= b){
        for (var x = a; x <= b; x++){
            total += x;
        }
    } else {
        for (var y = a; y >= b; y--){
            total += y;
        }
    }
    return total;
};

// Do not edit below this line
module.exports = sumAll;
