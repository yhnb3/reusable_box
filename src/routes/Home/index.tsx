import { SliderWithoutInput } from 'components'
import styles from './home.module.scss'

const Home = () => {
  return (
    <div className={styles.container}>
      <SliderWithoutInput min={0} max={100} step={1} />
    </div>
  )
}

export default Home
