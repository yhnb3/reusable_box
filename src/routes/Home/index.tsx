import { SearchBar } from 'components'
import styles from './home.module.scss'

const Home = () => {
  return (
    <div className={styles.container}>
      <SearchBar />
    </div>
  )
}

export default Home
