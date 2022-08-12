import { Dispatch, SetStateAction } from 'react'
import styles from './searchLog.module.scss'

interface IProps {
  data: string[]
}

const SearchLog = ({ data }: IProps) => {
  return (
    <div className={styles.logContainer}>
      {data.map((keyword, idx) => {
        const key = `${keyword}-${idx}`
        return (
          <p className={styles.logKeyword} key={key}>
            {keyword}
          </p>
        )
      })}
    </div>
  )
}

export default SearchLog
