import { ChangeEventHandler } from 'react'
import styles from './sliderBar.module.scss'

interface IProps {
  value: number
  onSliderChange: ChangeEventHandler<HTMLInputElement>
}

const SliderBar = ({ value, onSliderChange }: IProps) => {
  return (
    <div className={styles.sliderBarContainer}>
      <input type='range' className={styles.input} min='0' max='100' value={value} onChange={onSliderChange} />
      <meter className={styles.track} min='0' max='100' value={value} />
    </div>
  )
}

export default SliderBar
