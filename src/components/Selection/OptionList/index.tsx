import { ReactNode, useRef } from 'react'
import cx from 'classnames'

import { useSelectionContext } from '../hooks/useSelectionContext'
import styles from './optionList.module.scss'
import { useClickAway } from 'react-use'

interface IProps {
  children: ReactNode
  border?: boolean
}
const OptionList = ({ children, border = true }: IProps) => {
  const { open, click, trigger } = useSelectionContext()
  const listRef = useRef<HTMLDivElement | null>(null)

  useClickAway(listRef, (event) => {
    const el = trigger.current
    el !== event.target && click()
  })

  return open ? (
    <div ref={listRef} className={cx(styles.optionList, { [styles.isBorder]: border })}>
      {children}
    </div>
  ) : null
}

export default OptionList
