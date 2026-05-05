/**
 * Find the Pivot Index
 * You are given an array of integers, for example: [1, 7, 3, 6, 5, 6].
The pivot index is the index where the sum of all numbers strictly to the left of the index is equal to the sum of all numbers strictly to the right of the index.
(In this example, the pivot index is 3 because the left sum 1 + 7 + 3 = 11 equals the right sum 5 + 6 = 11).

Your Task: Write a function findThePivotIndex(nums: number[]): number that returns the leftmost pivot index. If no such index exists, return -1.
 */
export function findThePivotIndex(nums: number[]): number {
  let leftSum = 0;
  let rightSum = 0;
  for (let i = 0; i < nums.length; i++) {
    rightSum += nums[i]!;
  }
  for (let i = 0; i < nums.length; i++) {
    rightSum -= nums[i]!;
    if (leftSum === rightSum) return i;
    leftSum += nums[i]!;
  }
  return -1;
}
