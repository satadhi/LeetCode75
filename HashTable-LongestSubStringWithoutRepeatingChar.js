/**
 * https://leetcode.com/problems/longest-substring-without-repeating-characters/
 */
var lengthOfLongestSubstring = function(s) {

    let map = {};
    let maxCount = 0;
    let tempCount = 0;
    let i = 0;

    for (let j = 0; j < s.length; j++) {

        if (map[s[j]]) {

            while (s[i] !== s[j]) {
                delete map[s[i]];
                i++;
                tempCount--;
            }

            i++;
        } else if (map[s[j]] === undefined) {
            map[s[j]] = true;
            tempCount++;
        }

        maxCount = Math.max(maxCount, tempCount);
    }

    console.log(maxCount);

    return maxCount;
};
