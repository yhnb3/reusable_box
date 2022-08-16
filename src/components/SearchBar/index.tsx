import { ChangeEventHandler, FocusEventHandler, KeyboardEventHandler, useState } from 'react'

import styles from './searchBar.module.scss'
import SearchLogContainer from './SearchLogContainer'

const SEARCH_LOG = ['자바스크립트', '리액트', '타입스크립트', '스토리북']

const SearchBar = () => {
  const [inputValue, setInputValue] = useState('')
  const [isLogOpen, setIsLogOpen] = useState(false)
  const [focusIndex, setFocusIndex] = useState(0)

  const onInputChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    const { value } = e.currentTarget
    setInputValue(value)
  }

  const onInputFocus: FocusEventHandler<HTMLInputElement> = () => {
    setIsLogOpen(true)
  }

  const filteredData = SEARCH_LOG.filter((keyword) => {
    return keyword.includes(inputValue)
  })

  const onInputKeyDown: KeyboardEventHandler<HTMLInputElement> = (e) => {
    if (e.key === 'Tab') return
    if (e.key === 'ArrowUp') {
      e.preventDefault()
      setFocusIndex((prev) => (prev - 1 + filteredData.length) % filteredData.length)
    } else if (e.key === 'ArrowDown') {
      setFocusIndex((prev) => (prev + 1) % filteredData.length)
    }
  }

  return (
    <div>
      <form>
        <input
          className={styles.input}
          type='text'
          value={inputValue}
          onChange={onInputChange}
          onFocus={onInputFocus}
          onKeyDown={onInputKeyDown}
        />
      </form>
      {isLogOpen && filteredData.length > 0 ? (
        <SearchLogContainer data={filteredData} keyword={inputValue} focusIndex={focusIndex} />
      ) : null}
    </div>
  )
}

export default SearchBar
