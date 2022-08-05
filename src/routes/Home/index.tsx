import { Carousel } from 'components'
import styles from './home.module.scss'

const Home = () => {
  return (
    <div className={styles.container}>
      <Carousel />
    </div>
  )
}

export default Home
