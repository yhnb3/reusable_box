import { useState } from 'react'
import Track from './Track'

interface IProps {
  min: number
  max: number
  step: number
}

const SliderWithoutInput = ({ min, max, step }: IProps) => {
  const [value, setValue] = useState(50)

  return (
    <div>
      <Track min={min} max={max} value={value} />
    </div>
  )
}

export default SliderWithoutInput
