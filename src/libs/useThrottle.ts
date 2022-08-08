import { useState } from 'react'

export const useThrottle = (func: () => void, delay: number) => {
  const [isOn, setIsOn] = useState(false)
  if (!isOn) {
    setIsOn(true)
    setTimeout(() => {
      func()
      setIsOn(false)
    }, delay)
  }
}
