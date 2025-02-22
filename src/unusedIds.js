export function nextId(ids: number[]): number {
  let i = 0
  while (ids.includes(i)) {
    i++
  }
  return i
}
