//two sum 

// Input nums == [2,7,11,15], target = 9
// Output: [0,1]

export default function twoSum3(nums:number[], target:number): number[] | void {
  const map = new Map()
  for (let index = 0; index < nums.length; index++) {
   const diff = target - nums[index] 
    if (map.has(diff)) {
     return [map.get(diff), index] 
    } else {
      map.set(nums[index], index)
    }
  }
}


// export default function twoSum(nums:number[], target: number): number[] | void {
//     const map = new Map()
//     for (let i = 0; i < nums.length; i++) {
//         const diff = target - nums[i]
//         if (map.has(diff)) {
//           return [map.get(diff), i]
//         } else {
//           map.set(nums[i], i)
//         }
//     }
// }
