import { createContext, ReactNode, useCallback, useContext, useMemo, useState } from 'react'

interface IProps {
  children: ReactNode
}

const ToggleContext = createContext({ on: false, toggle: () => {} })

const Toggle = ({ children }: IProps) => {
  const [on, setOn] = useState(false)
  const toggle = useCallback(
    () =>
      setOn((prev) => {
        console.log(prev)
        return !prev
      }),
    [setOn]
  )
  const value = useMemo(() => ({ on, toggle }), [on, toggle])

  return <ToggleContext.Provider value={value}>{children}</ToggleContext.Provider>
}

const useToggleContext = () => {
  const context = useContext(ToggleContext)
  if (!context) {
    throw new Error('컨텍스트 없어요')
  }
  return context
}

const Button = () => {
  const { toggle } = useToggleContext()
  return (
    <button type='button' onClick={toggle}>
      버튼
    </button>
  )
}

Toggle.Button = Button

export default Toggle
