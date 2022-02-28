function romanToInt (s) {
    //here we are going to set up all roman letters with exceptions as separate objects so that later I can loop over the input and check for each:
    const romans = {
        "I": 1,
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000,
    };
    const exceptions = {
        "IV": 4,        
        "IX": 9,        
        "XL": 40,        
        "XC": 90,        
        "CD": 400,
        "CM": 900        
    };
    let i = 0, answer = 0;
    //looping through through each input letter and checking if it exists as a key in the exceptions first, else going for normal roman letters:
    while(i<s.length) {
        if(exceptions[s[i]+s[i+1]]){
            answer += exceptions[s[i]+s[i+1]];
            i+=2;
        }else {
            answer += romans[s[i]];
            i++;
        }
    }
    //output:
    return answer;
}
console.log(romanToInt("LVIII"));

module.exports = romanToInt;