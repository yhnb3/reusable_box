import { useSelectionContext } from '../hooks/useSelectionContext'
import styles from './trigger.module.scss'

const Trigger = () => {
  const { click, selected } = useSelectionContext()
  return (
    <button type='button' onClick={click} className={styles.trigger}>
      <div>{selected}</div>
    </button>
  )
}

export default Trigger
