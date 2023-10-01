// https://leetcode.com/problems/greatest-common-divisor-of-strings/?envType=study-plan-v2&envId=leetcode-75

/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function(str1, str2) {
    
    let getGcd = (a, b) => {
        if (b === 0)
            return a;
        return (getGcd(b, (a%b)))
    }

    let gcd = getGcd(str1.length, str2.length);
    // return gcd;
  
    let regexStr = new RegExp('.{1,' + gcd + '}', 'g');
    let str1Sub = str1.match(regexStr)
    let str2Sub = str2.match(regexStr)


    let str1Same = str1Sub.every(ele => ele === str1Sub[0]);
    let str2Same = str2Sub.every(ele => ele === str1Sub[0]);

    if(str1Same && str2Same) {
        return str1Sub[0]
    } else {
        return ""
    }
};
