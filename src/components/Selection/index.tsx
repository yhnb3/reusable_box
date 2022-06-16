import { ReactNode, useCallback, useMemo, useState } from 'react'
import { SelectionContext } from './hooks/useSelectionContext'
import OptionItem from './OptionItem'
import OptionList from './OptionList'
import Trigger from './Trigger'

interface IProps {
  children: ReactNode
}

const Selection = ({ children }: IProps) => {
  const [selected, setSelected] = useState('선택하세요.')
  const [open, setOpen] = useState(false)

  const select = useCallback((value: string) => {
    setSelected(value)
  }, [])

  const click = useCallback(() => setOpen((prev) => !prev), [])

  const value = useMemo(() => ({ selected, select, open, click }), [click, open, select, selected])

  return <SelectionContext.Provider value={value}>{children}</SelectionContext.Provider>
}

Selection.Trigger = Trigger
Selection.OptionList = OptionList
Selection.OptionItem = OptionItem

export default Selection
