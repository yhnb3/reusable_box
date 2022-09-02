import { MouseEventHandler, useState } from 'react'
import styles from './handle.module.scss'

interface IProps {
  min: number
  max: number
  value: number
}

const Handle = ({ value, min, max }: IProps) => {
  const [isMouseDown, setIsMouseDown] = useState(false)
  const [targetX, setTargetX] = useState(0)
  const [x, setX] = useState(0)

  const onMouseDown: MouseEventHandler<HTMLButtonElement> = (e) => {
    setIsMouseDown(true)
    setTargetX(e.clientX)
  }
  const onMouseUp = () => {
    setIsMouseDown(false)
    setTargetX(0)
  }

  const onMouseLeave = () => {
    setIsMouseDown(false)
    setTargetX(0)
  }

  const onMouseMove: MouseEventHandler<HTMLButtonElement> = (e) => {
    if (isMouseDown) {
      setX(e.clientX - targetX)
    }
  }
  return (
    <button
      type='button'
      className={styles.handle}
      onMouseDown={onMouseDown}
      onMouseUp={onMouseUp}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      style={{ transform: `translateX(${x}px)` }}
    >
      {' '}
    </button>
  )
}

export default Handle
