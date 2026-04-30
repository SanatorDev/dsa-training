/**
 * Suppose you have an array of positive integers representing the duration of various JavaScript build tasks in seconds: [2, 3, 1, 2, 4, 3]. You have a target time limit of 7 seconds.

Your goal is to find the minimal length of a contiguous subarray whose sum is greater than or equal to 7. (In this case, the subarray [4, 3] equals 7, so the minimal length is 2).

I want you to write a function minSubArrayLen(target, nums) using a dynamic sliding window. You will need a left pointer, a currentSum, and an infinite minLength tracker. You will expand the window by adding to currentSum with a for loop (the right pointer).
 */
export function minSubArrayLen(target: number, nums: number[]): number {
  let left = 0;
  let currentSum = 0;
  let minLength = Infinity;
  for (let right = 0; right < nums.length; right++) {
    currentSum += nums[right]!;
    while (currentSum >= target) {
      minLength = Math.min(minLength, right - left + 1);
      currentSum -= nums[left]!;
      left++;
    }
  }
  return minLength === Infinity ? 0 : minLength;
}
