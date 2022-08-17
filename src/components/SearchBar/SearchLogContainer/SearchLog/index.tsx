import { FocusEventHandler } from 'react'
import cx from 'classnames'

import { useSearchBarContext } from 'components/SearchBar/hooks'

import styles from './searchLog.module.scss'
import { findIndex } from 'components/SearchBar/libs'

interface IProps {
  currentIdx: number
  data: string[]
  target: string
  keyword: string
  focusIndex: number
}

const SearchLog = ({ currentIdx, data, target, keyword, focusIndex }: IProps) => {
  const { setSearchValue, setFocusIndex, setIsLogOpen } = useSearchBarContext()

  const strongTarget = findIndex({ target, keyword })
  const isSelected = focusIndex === currentIdx

  const onLogFocus: FocusEventHandler<HTMLDivElement> = (e) => {
    const { idx } = e.currentTarget.dataset
    setSearchValue(data[Number(idx)])
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
    <div
      className={cx(styles.logKeyword, { [styles.selected]: isSelected })}
      data-idx={currentIdx}
      tabIndex={currentIdx - currentIdx}
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
}

export default SearchLog
