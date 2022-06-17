import { ReactNode, useCallback, useMemo, useRef, useState } from 'react'
import cx from 'classnames'

import { SelectionContext } from './hooks/useSelectionContext'
import OptionContent from './OptionContent'
import OptionItem from './OptionItem'
import OptionList from './OptionList'
import Trigger from './Trigger'
import styles from './selection.module.scss'

interface IProps {
  children: ReactNode
  on?: boolean
  defaultValue?: string
  flexDirection?: string
  clickOutside?: boolean
}

const Selection = ({
  children,
  on = false,
  defaultValue = '선택하세요',
  flexDirection = 'column',
  clickOutside = true,
}: IProps) => {
  const [selected, setSelected] = useState(defaultValue)
  const [open, setOpen] = useState(on)

  const trigger = useRef<HTMLButtonElement | null>(null)

  const select = useCallback((value: string) => {
    setSelected(value)
  }, [])

  const click = useCallback(() => setOpen((prev) => !prev), [])

  const value = useMemo(
    () => ({ selected, select, open, click, trigger, flexDirection, clickOutside }),
    [selected, select, open, click, flexDirection, clickOutside]
  )

  return (
    <SelectionContext.Provider value={value}>
      <div className={cx(styles.selectionContainer, { [styles.row]: flexDirection === 'row' })}>{children}</div>
    </SelectionContext.Provider>
  )
}

Selection.Trigger = Trigger
Selection.OptionList = OptionList
Selection.OptionItem = OptionItem
Selection.OptionContent = OptionContent

export default Selection
