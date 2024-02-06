import './style.css'
import typescriptLogo from './typescript.svg'
// import containsDuplicate from './array-&-hashing/constains-duplicates.ts'
// import isAnagram from './array-&-hashing/valid-anagram.ts'
// import  twoSum3 from './array-&-hashing/two-sum.ts'
// import topKFrequent from './array-&-hashing/topKfrequent'
// import productExceptSelf from './array-&-hashing/product-arr-except-self'
import isValidSudoku from "./array-&-hashing/ValidSudoku"

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <a href="https://leetcode.com/Pleo2/" target="_blank">
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/LeetCode_Logo_black_with_text.svg/2560px-LeetCode_Logo_black_with_text.svg.png" class="logo" alt="leetcode logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
    <h1>leetCode + TypeScript</h1>
    <p class="read-the-docs">
      Click on the leetcode and TypeScript logos to learn more
    </p>
  </div>
`

// to run the code uncomment the call function
// containsDuplicate([1, 2, 4, 5, 6, 6, 5, 1, 2, 5, 4])
// console.log(isAnagram('arepera', 'arepera'))
// console.log(twoSum3([2,7,11,15], 9))
// console.log(topKFrequent([1, 1, 1, 2, 2, 3, 4, 4, 4, 4], 2))
// console.log(productExceptSelf([1,2,3,4]))
console.log(isValidSudoku([
  ["5","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]
]
))