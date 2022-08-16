import cx from 'classnames'
import { findIndex } from '../libs'

import styles from './searchLog.module.scss'

interface IProps {
  data: string[]
  keyword: string
  focusIndex: number
}

const SearchLogContainer = ({ data, keyword, focusIndex }: IProps) => {
  return (
    <div className={styles.logContainer}>
      {data.map((target, idx) => {
        const key = `${keyword}-${idx}`
        const strongTarget = findIndex({ target, keyword })
        const isSelected = focusIndex === idx
        return (
          <div className={cx(styles.logKeyword, { [styles.selected]: isSelected })} key={key} tabIndex={idx - idx}>
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
