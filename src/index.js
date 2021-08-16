module.exports = function toReadable (number) {
    let oneObject = {
        0: 'zero',
        1: 'one',
        2: 'two',
        3: 'three',
        4: 'four',
        5: 'five',
        6: 'six',
        7: 'seven',
        8: 'eight',
        9: 'nine',
        10: 'ten',
        11: 'eleven',
        12: 'twelve',
        13: 'thirteen',
        14: 'fourteen',
        15: 'fifteen',
        16: 'sixteen',
        17: 'seventeen',
        18: 'eighteen',
        19: 'nineteen',
    }
    let dozens = {
        1: 'ten',
        2: 'twenty',
        3: 'thirty',
        4: 'forty',
        5: 'fifty',
        6: 'sixty',
        7: 'seventy',
        8: 'eighty',
        9: 'ninety',
    }

    if (number < 20){
        return oneObject[number];
    }

    if(number >= 20 && number < 100){
        if (number.toString()[1] == "0"){
            return dozens[number.toString()[0]];
        }else {
            return dozens[number.toString()[0]] + " " + oneObject[number.toString()[1]]
        }
    }
    if (number >= 100 && number < 1000){
    	if (number.toString()[1] == "0" && number.toString()[2] == "0"){
            return oneObject[number.toString()[0]] + " hundred";
        }
    		
    	if (number.toString()[1] == "0"){
            return oneObject[number.toString()[0]] + " hundred " + oneObject[number.toString()[2]];
        }
            
        if (number.toString()[1] == "1" && number.toString()[2] == 0) {
            return oneObject[number.toString()[0]] + " hundred ten";
        }
            
        if (number.toString()[1] == "1") {
            return oneObject[number.toString()[0]] + " hundred " + oneObject[number.toString()[1] + number.toString()[2]];
        }
            
    	if (number.toString()[2] == "0"){
            return oneObject[number.toString()[0]] + " hundred " + dozens[number.toString()[1]];
        } 
    	if(number.toString()[1] !== "0" && number.toString()[2] !== "0") {
            return oneObject[number.toString()[0]] + " hundred " + dozens[number.toString()[1]] + " " + oneObject[number.toString()[2]];
        };	
    }  





}
