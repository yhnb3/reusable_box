import { ChangeEventHandler, useState } from 'react'
import styles from './slider.module.scss'

const Slider = () => {
  const [value, setValue] = useState(0)

  const onSliderChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    const nextValue = e.currentTarget.value
    setValue(Number(nextValue))
  }

  return (
    <div className={styles.sliderContainer}>
      <input type='range' className={styles.input} min='0' max='100' value={value} onChange={onSliderChange} />
      <meter className={styles.track} min='0' max='100' value={value} />
    </div>
  )
}

export default Slider
