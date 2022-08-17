import { createContext, Dispatch, SetStateAction, useContext } from 'react'

interface IContext {
  setFocusIndex: Dispatch<SetStateAction<number>>
  setIsLogOpen: Dispatch<SetStateAction<boolean>>
  setSearchValue: Dispatch<SetStateAction<string>>
}

export const SearchBarContext = createContext<IContext | null>(null)
export const useSearchBarContext = () => {
  const state = useContext(SearchBarContext)
  if (!state) {
    throw new Error('컨텍스트 없어')
  }
  return state
}
