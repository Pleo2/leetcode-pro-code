// export default function isAnagram(s: string, t: string): boolean {
//     if ( s.length !== t.length ) return false
//     return sortString(s) === sortString(t) ? true : false
// }

// const sortString = (s:string): string  => {
//     return s.split('').sort().toString()
// }
export default function isAnagram(s:string, t:string): boolean {
    if (s.length !== t.length) false
    return sortString2(s) === sortString2(t)? true : false
}

const sortString2 = (s:string) => s.split('').sort().toString()