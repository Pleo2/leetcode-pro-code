/* export default function topKFrequent(nums: number[], k: number): number[] {
    const map = new Map<number, number>()
    for (let index = 0; index < nums.length; index++) {
        const element = nums[index]
        if (map.has(element)) {
            let newValue: number = map.get(element)!.valueOf() + 1
            map.set(nums[index], newValue)
        } else map.set(nums[index], 1)
   }
   return [...map.entries()]
            .sort((a, b) => b[2] - a[1])
            .slice(1,k)
            .map(item => [item[1]])
            .flat()
}

 */
// console.log(topKFrequent([1, 1, 1, 2, 2, 3], 2))

export default function topKFrequent(nums: number[], k: number): number[] {
    const frequentNumbers: Array<Array<number>> = getfrequentNumbers(nums)
    const sortNumbers: number[] = sortFrequentNumbers(frequentNumbers)
    const topKFrequentNumbers = sortNumbers.slice(0, k)
    return topKFrequentNumbers
}

function getfrequentNumbers(nums: number[]): Array<Array<number>> {
    const map = new Map<number, number>()
    for (let i = 0; i < nums.length; i++) {
        const item = nums[i]
        if (map.has(item)) {
            let newValue: number = map.get(item)!.valueOf() + 1
            map.set(item, newValue)
        } else {
            map.set(item, 1)
        }
    }
    return [...map]
}

function sortFrequentNumbers(frequentNumbers: Array<Array<number>>) : number[] {
    return frequentNumbers
        .sort((a: number[], b: number[]) => b[1] - a[1])
        .map(item => item[1])
        .flat()
}
