import { MouseEventHandler, useRef, useState } from 'react'

import CarouselIndicator from './CarouselIndicator'
import styles from './carousel.module.scss'

const players = ['halland', 'debruyne', 'phoden', 'rodrigo']

const Carousel = () => {
  const [location, setLocation] = useState(1)
  const [transition, setTransition] = useState('transform 0.5s ease-in-out')
  const [isThrottle, setIsThrottle] = useState(false)
  const timer = useRef<NodeJS.Timer | null>(null)
  const playersForImage = [players[players.length - 1], ...players, players[0]]

  const transform = `translate(-${100 * location}%)`

  const moveSlide = (n: number) => {
    setTimeout(() => {
      setTransition('')
      setLocation(n)
    }, 500)
  }

  const prevBtnOnClick = () => {
    if (!isThrottle) {
      setLocation((prev) => {
        if (prev === 1) {
          moveSlide(players.length)
        }
        return prev - 1
      })
      setIsThrottle(true)
      timer.current = setTimeout(() => {
        setIsThrottle(false)
        timer.current = null
      }, 500)
    }
    setTransition('transform 0.5s ease-in-out')
  }

  const nextBtnOnClick = () => {
    if (!isThrottle) {
      setLocation((prev) => {
        if (prev === players.length) {
          moveSlide(1)
        }
        return prev + 1
      })
      setIsThrottle(true)
      timer.current = setTimeout(() => {
        setIsThrottle(false)
        timer.current = null
      }, 500)
    }
    setTransition('transform 0.5s ease-in-out')
  }

  const indicatorOnClick: MouseEventHandler<HTMLButtonElement> = (e) => {
    const { number } = e.currentTarget.dataset
    setLocation(parseInt(String(number), 10))
    setTransition('transform 0.5s ease-in-out')
  }

  const current = () => {
    if (location === 0) return players.length
    if (location === players.length + 1) return 1
    return location
  }

  return (
    <div className={styles.carouselContainer}>
      <button className={styles.prevBtn} type='button' onClick={prevBtnOnClick}>
        {' '}
      </button>
      {playersForImage.map((player, idx) => {
        const key = `player-${idx}`
        return (
          <picture key={key} style={{ transform: `${transform}`, transition: `${transition}` }}>
            <source srcSet={`images/${player}_small.webp`} media='(max-width:1000px)' />
            <img className={styles.carouselImage} src={`images/${player}_large.webp`} alt={player} />
          </picture>
        )
      })}
      <button className={styles.nextBtn} type='button' onClick={nextBtnOnClick}>
        {' '}
      </button>
      <CarouselIndicator onClick={indicatorOnClick} players={players} current={current} />
    </div>
  )
}

export default Carousel
