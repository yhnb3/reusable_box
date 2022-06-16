import { MouseEvent } from 'react'
import cx from 'classnames'

import { useSelectionContext } from '../hooks'
import styles from './optionItem.module.scss'

interface IProps {
  value: string
}

const OptionItem = ({ value }: IProps) => {
  const { selected, select } = useSelectionContext()

  const onClick = (event: MouseEvent<HTMLButtonElement>) => {
    const { name } = event.currentTarget.dataset
    select(String(name))
  }

  return (
    <button
      className={cx(styles.optionItem, { [styles.selected]: selected === value })}
      type='button'
      data-name={value}
      onClick={onClick}
    >
      {value}
    </button>
  )
}

export default OptionItem
