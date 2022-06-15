import cx from 'classnames'

import styles from './switch.module.scss'

interface IProps {
  toggle: () => void
  on: boolean
  size?: string
  color?: string
}

const Switch = ({ on, toggle, size = 'small', color = 'green' }: IProps) => {
  return (
    <label style={{ display: 'inline-block' }}>
      <input onChange={toggle} type='checkbox' checked={on} />
      <div className={cx(styles.toggleBtn, styles[size], styles[color], { [styles.on]: on })} />
    </label>
  )
}

export default Switch
