import { ChangeEventHandler, useState } from 'react'
import styles from './slider.module.scss'
import SliderBar from './SliderBar'

const Slider = () => {
  const [value, setValue] = useState(0)

  const onSliderChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    const nextValue = e.currentTarget.value
    console.log(1)
    setValue(Number(nextValue))
  }

  return (
    <div className={styles.sliderContainer}>
      <output className={styles.tooltip} style={{ transform: `translateX(${value * 1.84}px)` }}>
        {value}
      </output>
      <SliderBar value={value} onSliderChange={onSliderChange} />
    </div>
  )
}

export default Slider
