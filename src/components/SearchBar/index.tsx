import { ChangeEventHandler, FocusEventHandler, KeyboardEventHandler, useMemo, useState } from 'react'
import { SearchBarContext } from './hooks'

import styles from './searchBar.module.scss'
import SearchLogContainer from './SearchLogContainer'

const SEARCH_LOG = [
  '자바스크립트',
  '리액트',
  '타입스크립트',
  '스토리북',
  '자바',
  'Javascript',
  'React',
  'Stroybook',
  'Typescript',
]

const SearchBar = () => {
  const [inputValue, setInputValue] = useState('')
  const [searchValue, setSearchValue] = useState('')
  const [isLogOpen, setIsLogOpen] = useState(false)
  const [focusIndex, setFocusIndex] = useState(0)

  const contextValue = useMemo(
    () => ({
      setFocusIndex,
      setIsLogOpen,
      setSearchValue,
    }),
    []
  )

  const onInputChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    const { value } = e.currentTarget
    setInputValue(value)
    setSearchValue(value)
  }

  const onInputFocus: FocusEventHandler<HTMLInputElement> = () => {
    setIsLogOpen(true)
  }

  const filteredData = SEARCH_LOG.filter((keyword) => {
    return keyword.toLowerCase().includes(inputValue.toLowerCase())
  })

  const onInputKeyDown: KeyboardEventHandler<HTMLInputElement> = (e) => {
    if (e.key === 'Tab') return
    if (e.key === 'ArrowUp') {
      e.preventDefault()
      setFocusIndex((prev) => {
        const nextIdx = (prev - 1 + filteredData.length) % filteredData.length
        setSearchValue(filteredData[nextIdx])
        return nextIdx
      })
    } else if (e.key === 'ArrowDown') {
      setFocusIndex((prev) => {
        const nextIdx = (prev + 1) % filteredData.length
        setSearchValue(filteredData[nextIdx])
        return nextIdx
      })
    }
  }

  return (
    <SearchBarContext.Provider value={contextValue}>
      <div>
        <form>
          <input
            className={styles.input}
            type='text'
            value={searchValue}
            onChange={onInputChange}
            onFocus={onInputFocus}
            onKeyDown={onInputKeyDown}
          />
        </form>
        {isLogOpen && filteredData.length > 0 ? (
          <SearchLogContainer data={filteredData} keyword={inputValue} focusIndex={focusIndex} />
        ) : null}
        <div className={styles.searchValue}>검색어 : {searchValue}</div>
      </div>
    </SearchBarContext.Provider>
  )
}

export default SearchBar
