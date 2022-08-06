import { useState } from 'react'
import styles from './carousel.module.scss'

const players = ['halland', 'debruyne', 'phoden', 'rodrigo']

const Carousel = () => {
  const [location, setLocation] = useState(1)
  const [transition, setTransition] = useState('transform 0.5s ease-in-out')

  const transform = `translate(-${100 * location}%)`

  const moveSlide = (n: number) => {
    setTimeout(() => {
      setTransition('')
      setLocation(n)
    }, 500)
  }

  const prevBtnOnClick = () => {
    setLocation((prev) => {
      if (prev === 1) {
        moveSlide(players.length)
      }
      return prev - 1
    })

    setTransition('transform 0.5s ease-in-out')
  }

  const nextBtnOnClick = () => {
    setLocation((prev) => {
      if (prev === players.length) {
        moveSlide(1)
      }
      return prev + 1
    })

    setTransition('transform 0.5s ease-in-out')
  }

  return (
    <div className={styles.carouselContainer}>
      <button className={styles.prevBtn} type='button' onClick={prevBtnOnClick}>
        {' '}
      </button>
      <img
        className={styles.carouselImage}
        key={players[players.length - 1]}
        src={`images/${players[players.length - 1]}_large.webp`}
        alt={players[players.length - 1]}
        style={{ transform: `${transform}`, transition: `${transition}` }}
      />
      {players.map((player) => {
        return (
          <img
            className={styles.carouselImage}
            key={player}
            src={`images/${player}_large.webp`}
            alt={player}
            style={{ transform: `${transform}`, transition: `${transition}` }}
          />
        )
      })}
      <img
        className={styles.carouselImage}
        key={players[0]}
        src={`images/${players[0]}_large.webp`}
        alt={players[0]}
        style={{ transform: `${transform}`, transition: `${transition}` }}
      />
      <button className={styles.nextBtn} type='button' onClick={nextBtnOnClick}>
        {' '}
      </button>
    </div>
  )
}

export default Carousel
