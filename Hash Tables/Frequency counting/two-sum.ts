/**
 * Two Sum
 * Your Scenario: You are given an unsorted array of integers, nums, and an integer target. You must return the indices of the two numbers such that they add up to the target. You may assume that each input would have exactly one solution, and you may not use the same element twice.(Example: nums = [2, 7, 11, 15], target = 9 should return [0, 1] because nums[0] + nums[1] === 9).
 * The Constraint: You absolutely cannot sort the array, and you cannot use nested for loops. You must solve this in exactly O(N) time using a Hash Table (a JavaScript Map or Object) for lookup optimisation.
 */
export function twoSum(nums: number[], target: number): number[] {
  const map = new Map<number, number>();
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i]!;
    if (map.has(complement)) {
      return [map.get(complement)!, i!];
    }
    map.set(nums[i]!, i!);
  }
  return [];
}
