var lengthOfLongestSubstring = function (s) {

    let output = ''
    //iterate through the string
    for (let i = 0; i < s.length; i++) {

        //iterate through the substring
        let subString = s[i]
        for (let j = i + 1; j < s.length; j++) {
            if (subString.includes(s[j])) {
                break
            } else {
                subString += s[j]
            }
        }

        //compare previous and current substring
        if (output.length < subString.length) {
            output = subString
        }

    }
    return output.length
};

const s = "abcabcbb";
const stringLength = lengthOfLongestSubstring(s)
console.log(stringLength)
