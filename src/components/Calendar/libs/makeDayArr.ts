import dayjs from 'dayjs'
import { IDay } from '../types.d'
import { calculateDay } from './calculateDay'

const INIT: IDay[] = [
  { type: 'head', value: 'Mon' },
  { type: 'head', value: 'Tue' },
  { type: 'head', value: 'Wen' },
  { type: 'head', value: 'Thu' },
  { type: 'head', value: 'Fri' },
  { type: 'head', value: 'Sat' },
  { type: 'head', value: 'Sun' },
]

const fillPrevMonthDay = ({
  prevMonthDays,
  firstDay,
  year,
  month,
}: {
  prevMonthDays: number
  firstDay: number
  year: number
  month: number
}) => {
  const newDaysArr = [...INIT]
  const range = firstDay === 0 ? 6 : firstDay - 1
  let startPrevMonth = prevMonthDays - range + 1
  for (let i = 0; i < range; i += 1) {
    newDaysArr.push({
      type: 'cell',
      value: String(startPrevMonth),
      date: `${year}-${month}-${startPrevMonth}`,
      isCurrent: false,
    })
    startPrevMonth += 1
  }
  return newDaysArr
}

const fillCurrentMonthDay = ({
  currentMonthDays,
  daysArr,
  year,
  month,
}: {
  currentMonthDays: number
  daysArr: IDay[]
  year: number
  month: number
}) => {
  for (let i = 1; i < currentMonthDays + 1; i += 1) {
    daysArr.push({
      type: 'cell',
      value: i < 10 ? `0${i}` : `${i}`,
      date: `${year}-${month}-${i}`,
      isCurrent: true,
    })
  }
  return daysArr
}

interface IProps {
  month: number
  year: number
}

const fillNextMonthDay = ({
  lastDay,
  daysArr,
  year,
  month,
}: {
  lastDay: number
  daysArr: IDay[]
  year: number
  month: number
}) => {
  const range = lastDay === 0 ? 0 : 7 - lastDay
  for (let i = 1; i < range + 1; i += 1) {
    daysArr.push({
      type: 'cell',
      value: i < 10 ? `0${i}` : `${i}`,
      date: `${year}-${month}-${i}`,
      isCurrent: false,
    })
  }
  return daysArr
}

export const makeDayArr = ({ month, year }: IProps) => {
  const prevMonth = month === 1 ? 12 : month - 1
  const prevYear = month === 1 ? year - 1 : year
  const nextMonth = month === 12 ? 1 : month + 1
  const nextYear = month === 12 ? year + 1 : year
  const prevMonthDays = calculateDay({ month: prevMonth, year: prevYear })
  const currentMonthDays = calculateDay({ month, year })
  const firstDay = dayjs(`${year}-${month}-01`).day()
  const lastDay = dayjs(`${year}-${month}-${currentMonthDays}`).day()

  const prevMonthDaysArr = fillPrevMonthDay({ prevMonthDays, firstDay, year: prevYear, month: prevMonth })
  const currentMonthDaysArr = fillCurrentMonthDay({ currentMonthDays, daysArr: prevMonthDaysArr, year, month })
  return fillNextMonthDay({ lastDay, daysArr: currentMonthDaysArr, year: nextYear, month: nextMonth })
}
