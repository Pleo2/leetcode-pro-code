// the algorithm that runs un O(n) time and without unsing the division operation

/* export default function productExceptSelf(nums: number[]): number[] {
    const array: Array<number> = []
    let product: number = 1

    for (let i = 0; i < nums.length; i++) {
        array[i] = product
        product *= nums[i]
    }

    product = 1

       for (let i = nums.length - 1; i>= 0; i--) {
           array[i] *= product;
           product *= nums[i];
       }

    return array
} */

console.log(productExceptSelf([1, 2, 3, 4]))

export default function productExceptSelf(nums: number[]): number[] {
    // crear uno igual pero con programacion functional es decir reduce
    const arr: number[] = []
    let product: number = 1

    nums.forEach((_item, index ) => {
        arr[index] = product
        product *= nums[index]
    } )

   product = 1  

    for(let i = nums.length - 1; i >= 0; i-- ) {
        arr[i] *= product
        product *= nums[i]
    }

   return arr
}
