import { MouseEvent } from 'react'
import { useSelectionContext } from '../hooks'

interface IProps {
  value: string
}

const OptionItem = ({ value }: IProps) => {
  const { select } = useSelectionContext()

  const onClick = (event: MouseEvent<HTMLButtonElement>) => {
    const { name } = event.currentTarget.dataset
    select(String(name))
  }

  return (
    <button type='button' data-name={value} onClick={onClick}>
      {value}
    </button>
  )
}

export default OptionItem
