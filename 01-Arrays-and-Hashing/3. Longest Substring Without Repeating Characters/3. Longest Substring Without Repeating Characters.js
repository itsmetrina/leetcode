1/**
2 * @param {string} s
3 * @return {number}
4 */
5var lengthOfLongestSubstring = function (s) {
6    let l = 0, r = 0;
7    let seen = new Set();
8    let maxlen = 0;
9
10    while (r < s.length) {
11        while(seen.has(s[r])) {
12            seen.delete(s[l]);
13            l++;
14        }
15
16        seen.add(s[r]);
17        maxlen = Math.max(maxlen, r - l + 1);
18        r++;
19    }
20
21    return maxlen;
22};