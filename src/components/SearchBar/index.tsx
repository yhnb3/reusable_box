import { ChangeEventHandler, FocusEventHandler, useState } from 'react'

import styles from './searchBar.module.scss'
import SearchLog from './SearchLog'

const SEARCH_LOG = ['자바스크립트', '리액트', '타입스크립트', '스토리북']

const SearchBar = () => {
  const [inputValue, setInputValue] = useState('')
  const [isFocus, setIsFocus] = useState(false)

  const onInputChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    const { value } = e.currentTarget
    setInputValue(value)
  }

  const onInputFocus: FocusEventHandler<HTMLInputElement> = () => {
    setIsFocus(true)
  }

  const onInputBlur: FocusEventHandler<HTMLInputElement> = () => {
    setIsFocus(false)
  }

  const filteredData = SEARCH_LOG.filter((keyword) => {
    return keyword.includes(inputValue)
  })

  return (
    <div>
      <form>
        <input
          className={styles.input}
          type='text'
          value={inputValue}
          onChange={onInputChange}
          onFocus={onInputFocus}
          onBlur={onInputBlur}
        />
      </form>
      {isFocus && filteredData.length > 0 ? <SearchLog data={filteredData} /> : null}
    </div>
  )
}

export default SearchBar
