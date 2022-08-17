import SearchLog from './SearchLog'

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
        return (
          <SearchLog key={key} currentIdx={idx} data={data} target={target} keyword={keyword} focusIndex={focusIndex} />
        )
      })}
    </div>
  )
}

export default SearchLogContainer
