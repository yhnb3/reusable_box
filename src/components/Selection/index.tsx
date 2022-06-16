import { ReactNode, useCallback, useMemo, useRef, useState } from 'react'
import { SelectionContext } from './hooks/useSelectionContext'
import OptionItem from './OptionItem'
import OptionList from './OptionList'
import Trigger from './Trigger'

interface IProps {
  children: ReactNode
  on?: boolean
}

const Selection = ({ children, on = false }: IProps) => {
  const [selected, setSelected] = useState('선택하세요.')
  const [open, setOpen] = useState(on)

  const trigger = useRef<HTMLButtonElement | null>(null)

  const select = useCallback((value: string) => {
    setSelected(value)
  }, [])

  const click = useCallback(() => setOpen((prev) => !prev), [])

  const value = useMemo(() => ({ selected, select, open, click, trigger }), [click, open, select, selected])

  return <SelectionContext.Provider value={value}>{children}</SelectionContext.Provider>
}

Selection.Trigger = Trigger
Selection.OptionList = OptionList
Selection.OptionItem = OptionItem

export default Selection
