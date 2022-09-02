import { useState } from 'react'
import Track from './Track'

import styles from './sliderWithoutInput.module.scss'
import Handle from './Handle'

interface IProps {
  min: number
  max: number
  step: number
}

const SliderWithoutInput = ({ min, max, step }: IProps) => {
  const [value, setValue] = useState(50)

  return (
    <div className={styles.container}>
      <Handle min={min} max={max} value={value} />
      <Track min={min} max={max} value={value} />
    </div>
  )
}

export default SliderWithoutInput
