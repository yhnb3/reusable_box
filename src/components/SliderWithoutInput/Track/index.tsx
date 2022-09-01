import styles from './track.module.scss'

interface IProps {
  min: number
  max: number
  value: number
}

const Track = ({ min, max, value }: IProps) => {
  return <meter className={styles.track} min={min} max={max} value={value} />
}

export default Track
