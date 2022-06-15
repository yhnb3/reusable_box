import { createContext, ReactNode, useCallback, useContext, useMemo, useState } from 'react'
import Switch from './Switch'

interface IProps {
  children: ReactNode
}

const ToggleContext = createContext({ on: false, toggle: () => {} })

const Toggle = ({ children }: IProps) => {
  const [on, setOn] = useState(false)
  const toggle = useCallback(() => setOn((prev) => !prev), [setOn])
  const value = useMemo(() => ({ on, toggle }), [on, toggle])

  return <ToggleContext.Provider value={value}>{children}</ToggleContext.Provider>
}

export const useToggleContext = () => {
  const context = useContext(ToggleContext)
  if (!context) {
    throw new Error('컨텍스트 없어요')
  }
  return context
}

interface IBtnProps {
  size?: string
  color?: string
}

export const Button = (props: IBtnProps) => {
  const { on, toggle } = useToggleContext()
  return <Switch toggle={toggle} on={on} {...props} />
}

Toggle.Button = Button

export default Toggle
