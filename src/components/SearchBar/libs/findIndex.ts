interface IProps {
  target: string
  keyword: string
}

export const findIndex = ({ target, keyword }: IProps) => {
  if (keyword.trim() === '') return [{ start: 0, end: target.length + 1, isStrong: false }]
  let newTarget = target
  let prevIdx = 0
  let idx = newTarget.search(keyword)
  const result = []
  while (idx !== -1) {
    if (idx !== 0) {
      result.push({ start: prevIdx, end: idx + prevIdx, isStrong: false })
    }
    result.push({ start: idx + prevIdx, end: idx + keyword.length + prevIdx, isStrong: true })
    prevIdx += idx + keyword.length
    newTarget = newTarget.slice(idx + keyword.length)
    idx = newTarget.search(keyword)
  }
  if (newTarget.length !== 0) {
    result.push({ start: prevIdx, end: target.length + 1, isStrong: false })
  }
  return result
}
