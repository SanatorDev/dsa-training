/**
 * Your objective is to reverse this array in-place (meaning you cannot use .reverse() or create a new array to hold the result).
 */
export function reverseString(text: string): string {
  const chars = text.split("");
  let left = 0;
  let right = chars.length - 1;
  while (left < right) {
    const temp = chars[left]!;
    chars[left] = chars[right]!;
    chars[right] = temp;
    left++;
    right--;
  }
  return chars.join("");
}
