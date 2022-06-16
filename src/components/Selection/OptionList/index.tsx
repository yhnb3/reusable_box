import { ReactNode } from 'react'

import { useSelectionContext } from '../hooks/useSelectionContext'
import styles from './optionList.module.scss'

interface IProps {
  children: ReactNode
}
const OptionList = ({ children }: IProps) => {
  const { open } = useSelectionContext()
  return open ? <div className={styles.optionList}>{children}</div> : null
}

export default OptionList
