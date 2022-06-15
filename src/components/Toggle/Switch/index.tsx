import cx from 'classnames'

import styles from './switch.module.scss'

interface IProps {
  toggle: () => void
  on: boolean
}

const Switch = ({ on, toggle }: IProps) => {
  return (
    <label style={{ display: 'inline-block' }}>
      <input onChange={toggle} type='checkbox' checked={on} />
      <div className={cx(styles.toggleBtn, { [styles.on]: on })} />
    </label>
  )
}

export default Switch
