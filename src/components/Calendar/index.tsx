import { useState } from 'react'
import dayjs from 'dayjs'
import cx from 'classnames'

import { makeDayArr } from './libs'
import { IDay } from './types.d'
import styles from './calendar.module.scss'

const Calendar = () => {
  const [month] = useState('06')
  const [year] = useState('2022')

  const dayData = makeDayArr({ month, year })

  return (
    <div className={styles.calendarContainer}>
      <h1>
        {month}, {year}
      </h1>
      <section className={styles.calendarSection}>
        {dayData.map((cell: IDay) => {
          const key = `${cell.type}-${cell.value}-${cell.isCurrent ? '' : 'not'}`
          const cellType = cell.type === 'head' ? `${styles.head}` : `${styles.item}`
          return (
            <div key={key} className={cx(cellType, styles.calendarCell, { [styles.current]: cell.isCurrent })}>
              {cell.value}
            </div>
          )
        })}
      </section>
    </div>
  )
}

export default Calendar
