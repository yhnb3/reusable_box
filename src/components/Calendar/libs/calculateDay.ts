interface IProps {
  month: number
  year: number
}

const checkLeap = (year: number) => {
  if (year % 400 === 0) return true
  if (year % 100 === 0) return false
  if (year % 4 === 0) return true
  return false
}

const DAYS_BY_MONTH: Record<number, number> = {
  1: 31,
  2: 28,
  3: 31,
  4: 30,
  5: 31,
  6: 30,
  7: 31,
  8: 31,
  9: 30,
  0: 31,
  11: 30,
  12: 31,
}
const checkDays = ({ isLeap, month }: { isLeap: boolean; month: number }) => {
  if (month === 2) {
    if (isLeap) return 29
    return 28
  }
  return DAYS_BY_MONTH[month]
}

export const calculateDay = ({ month, year }: IProps) => {
  const isLeap = checkLeap(year)
  return checkDays({ isLeap, month })
}
