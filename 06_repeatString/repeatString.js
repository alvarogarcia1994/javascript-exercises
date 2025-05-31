const repeatString = function(word, times) {
    if (times < 0){
        return "ERROR"
    } 
    
    var string2repeat = "";
    for (var x=0; x<times; x++){
        string2repeat += word;
    }
    return string2repeat;

};

// Do not edit below this line
module.exports = repeatString;
