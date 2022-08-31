import { ChangeEventHandler, useState } from 'react'
import styles from './slider.module.scss'
import SliderBar from './SliderBar'

const Slider = () => {
  const [value, setValue] = useState(0)

  const onSliderChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    const nextValue = e.currentTarget.value
    setValue(Number(nextValue))
  }

  return (
    <div className={styles.sliderContainer}>
      <div className={styles.tooltip} style={{ transform: `translateX(${value * 1.84}px)` }}>
        {value}
      </div>
      <SliderBar value={value} onSliderChange={onSliderChange} />
    </div>
  )
}

export default Slider
