import cx from 'classnames'
import { Dispatch, FocusEventHandler, SetStateAction } from 'react'
import { findIndex } from '../libs'

import styles from './searchLog.module.scss'

interface IProps {
  data: string[]
  keyword: string
  focusIndex: number
  setFocusIndex: Dispatch<SetStateAction<number>>
  setIsLogOpen: Dispatch<SetStateAction<boolean>>
}

const SearchLogContainer = ({ data, keyword, focusIndex, setFocusIndex, setIsLogOpen }: IProps) => {
  const onLogFocus: FocusEventHandler<HTMLDivElement> = (e) => {
    const { idx } = e.currentTarget.dataset
    setFocusIndex(Number(idx))
  }

  const onLastLogBlur: FocusEventHandler<HTMLDivElement> = (e) => {
    const { idx } = e.currentTarget.dataset
    if (Number(idx) === data.length - 1) {
      setFocusIndex(0)
      setIsLogOpen(false)
    }
  }

  return (
    <div className={styles.logContainer}>
      {data.map((target, idx) => {
        const key = `${keyword}-${idx}`
        const strongTarget = findIndex({ target, keyword })
        const isSelected = focusIndex === idx
        return (
          <div
            className={cx(styles.logKeyword, { [styles.selected]: isSelected })}
            key={key}
            data-idx={idx}
            tabIndex={idx - idx}
            onFocus={onLogFocus}
            onBlur={onLastLogBlur}
          >
            {strongTarget.map(({ start, end, isStrong }) => {
              const logKey = `${start}-${end}`
              if (!isStrong) return <span key={logKey}>{target.slice(start, end)}</span>
              return <strong key={logKey}>{target.slice(start, end)}</strong>
            })}
          </div>
        )
      })}
    </div>
  )
}

export default SearchLogContainer
