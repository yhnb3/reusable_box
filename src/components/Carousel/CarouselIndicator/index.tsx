import { MouseEventHandler } from 'react'
import cx from 'classnames'

import styles from './carouselIndicator.module.scss'

interface IProps {
  onClick: MouseEventHandler<HTMLButtonElement>
  players: string[]
  current: () => number
}

const CarouselIndicator = ({ onClick, players, current }: IProps) => {
  return (
    <div className={styles.indicatorContainer}>
      {players.map((_, idx) => {
        const key = `carousel-indicator-${idx}`
        return (
          <button
            data-number={idx + 1}
            type='button'
            key={key}
            className={cx(styles.indicator, { [styles.currentIndicator]: current() === idx + 1 })}
            onClick={onClick}
          >
            {' '}
          </button>
        )
      })}
    </div>
  )
}

export default CarouselIndicator
