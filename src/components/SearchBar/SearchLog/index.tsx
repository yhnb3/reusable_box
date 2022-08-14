import { findIndex } from '../libs'
import styles from './searchLog.module.scss'

interface IProps {
  data: string[]
  keyword: string
}

const SearchLog = ({ data, keyword }: IProps) => {
  return (
    <div className={styles.logContainer}>
      {data.map((target, idx) => {
        const key = `${keyword}-${idx}`
        const strongTarget = findIndex({ target, keyword })
        return (
          <div className={styles.logKeyword} key={key} tabIndex={idx - idx}>
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

export default SearchLog
