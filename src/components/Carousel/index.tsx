import styles from './carousel.module.scss'

const players = ['halland', 'debruyne', 'phoden', 'rodrigo']

const Carousel = () => {
  return (
    <div className={styles.carouselContainer}>
      <button type='button' className={styles.prevBtn}>
        {' '}
      </button>
      {players.map((player) => {
        return <img className={styles.carouselImage} key={player} src={`images/${player}_large.webp`} alt={player} />
      })}
      <button type='button' className={styles.nextBtn}>
        {' '}
      </button>
    </div>
  )
}

export default Carousel
