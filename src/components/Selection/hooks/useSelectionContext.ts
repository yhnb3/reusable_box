import { createContext, useContext } from 'react'

interface IContext {
  selected: string
  select: (value: string) => void
  open: boolean
  click: () => void
}
export const SelectionContext = createContext<IContext | null>(null)

export const useSelectionContext = () => {
  const state = useContext(SelectionContext)
  if (!state) {
    throw new Error('컨텍스트 없어')
  }
  return state
}
