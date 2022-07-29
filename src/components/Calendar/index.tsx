import { useState } from 'react'
import dayjs from 'dayjs'
import cx from 'classnames'

import { makeDayArr } from './libs'
import { IDay } from './types.d'
import styles from './calendar.module.scss'

const Calendar = () => {
  const [date, setDate] = useState({
    year: parseInt(dayjs().format('YYYY'), 10),
    month: parseInt(dayjs().format('MM'), 10),
  })
  const { month, year } = date

  const todayDate = dayjs().format('YYYY-M-D')

  const onNextClick = () => {
    setDate(({ year: prevYear, month: prevMonth }) => {
      if (prevMonth === 12) return { year: prevYear + 1, month: 1 }
      return { year: prevYear, month: prevMonth + 1 }
    })
  }

  const onPrevClick = () => {
    setDate(({ year: prevYear, month: prevMonth }) => {
      if (prevMonth === 1) return { year: prevYear - 1, month: 12 }
      return { year: prevYear, month: prevMonth - 1 }
    })
  }

  const dayData = makeDayArr({ month, year })

  return (
    <div className={styles.calendarContainer}>
      <div className={styles.calendarHandler}>
        <button className={styles.prevBtn} type='button' onClick={onPrevClick}>
          {' '}
        </button>
        <h1 className={styles.canlendarTitle}>
          {year}.{month < 10 ? `0${month}` : month}
        </h1>
        <button className={styles.nextBtn} type='button' onClick={onNextClick}>
          {' '}
        </button>
      </div>

      <section className={styles.calendarSection}>
        {dayData.map((cell: IDay) => {
          const key = `${cell.type}-${cell.value}-${cell.isCurrent ? '' : 'not'}`
          const cellType = cell.type === 'head' ? `${styles.head}` : `${styles.item}`
          return (
            <div
              key={key}
              className={cx(
                cellType,
                styles.calendarCell,
                { [styles.current]: cell.isCurrent },
                { [styles.today]: cell.date === todayDate }
              )}
            >
              {cell.value}
            </div>
          )
        })}
      </section>
    </div>
  )
}

export default Calendar
