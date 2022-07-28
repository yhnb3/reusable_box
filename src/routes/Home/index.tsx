import Calendar from 'components/Calendar'
import styles from './home.module.scss'

const Home = () => {
  return (
    <div className={styles.container}>
      <Calendar />
    </div>
  )
}

export default Home
