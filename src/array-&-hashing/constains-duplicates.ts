function containsDuplicate(nums: number[]): boolean {
  const set = new Set();
  for(let i = 0; i < nums.length;i++) {
    set.has(nums[i]) ? true :  set.add(nums[i])
  }
  return false
}