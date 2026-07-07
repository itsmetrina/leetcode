1/**
2 * @param {number[]} sortedArr
3 * @return {number[][]}
4 */
5var threeSum = function (nums) {
6    let sortedArr = nums.sort((a, b) => a - b);
7    let output = [];
8
9    for (let i = 0; i < sortedArr.length; i++) {
10        if (i > 0 && sortedArr[i] === sortedArr[i - 1]) continue;
11        let l = i + 1; r = sortedArr.length - 1; target = 0 - sortedArr[i];
12
13        while (l < r) {
14            let complement = sortedArr[l] + sortedArr[r];
15            if (complement === target) {
16                output.push([sortedArr[i], sortedArr[l], sortedArr[r]]);
17                l++;
18                r--;
19                while (l < r && sortedArr[l] === sortedArr[l - 1]) l++;
20                while (l < r && sortedArr[r] === sortedArr[r + 1]) r--;
21            } else if (complement < target) {
22                l++;
23            } else {
24                r--;
25            }
26        }
27    }
28    return output;
29};