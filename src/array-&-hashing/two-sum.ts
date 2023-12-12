//two sum 

// Input nums == [2,7,11,15], target = 9
// Output: [0,1]

export default function twoSum(nums:number[], target: number): number[] | void {
    const map = new Map()
    for (let i = 0; i < nums.length; i++) {
        const diff = target - nums[i]
        if (map.has(diff)) {
          return [map.get(diff), i]
        } else {
          map.set(nums[i], i)
        }
    }
}
