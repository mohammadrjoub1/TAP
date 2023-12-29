function twoSum(nums, target) {
  // Create a map to store the indices of numbers
  const numIndices = new Map();

  // Iterate through the array
  for (let i = 0; i < nums.length; i++) {
    // Calculate the complement (the number needed to reach the target)
    const complement = target - nums[i];

    // Check if the complement is in the map
    if (numIndices.has(complement)) {
      // If found, return the indices of the two numbers
      return [numIndices.get(complement), i];
    }

    // If not found, add the current number and its index to the map
    numIndices.set(nums[i], i);
  }

  // If no solution is found, return an empty array or handle it as needed
  return [];
}

// Example usage:
const nums = [2, 7, 11, 15];
const target = 9;
const result = twoSum(nums, target);
console.log(result);
