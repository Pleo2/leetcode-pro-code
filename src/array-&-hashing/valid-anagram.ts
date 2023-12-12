export default function isAnagram(s: string, t: string): boolean {
    if ( s.length !== t.length ) return false
    return sortString(s) === sortString(t) ? true : false
}

const sortString = (s:string): string  => {
    return s.split('').sort().toString()
}