1/**
2 * @param {string} s
3 * @return {boolean}
4 */
5var isValid = function(s) {
6    const stack = [];
7    const map = {
8        ')' : '(',
9        '}' : '{',
10        ']' : '['
11    };
12
13    for (let char of s) {
14        if(char === '(' || char === '{' || char === '[') {
15            stack.push(char);
16        } else {
17            if(stack[stack.length - 1] === map[char]) {
18                stack.pop();
19            } else return false;
20        }
21    }
22
23    return stack.length === 0;
24};