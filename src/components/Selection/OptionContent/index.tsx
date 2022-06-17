import { useSelectionContext } from '../hooks'
import styles from './optionContent.module.scss'

const OptionContent = () => {
  const { selected } = useSelectionContext()
  return (
    <div className={styles.optionContentContainer}>
      <h1>{selected}</h1>
      <section>
        <p>대충 내용.......</p>
      </section>
    </div>
  )
}

export default OptionContent
