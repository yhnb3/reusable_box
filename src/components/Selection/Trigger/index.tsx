import { useSelectionContext } from '../hooks/useSelectionContext'

const Trigger = () => {
  const { click, selected } = useSelectionContext()
  return (
    <button type='button' onClick={click}>
      {selected}
    </button>
  )
}

export default Trigger
