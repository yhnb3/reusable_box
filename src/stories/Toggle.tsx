import { Toggle } from 'components'

interface IProps {
  size?: string
  color?: string
}

const ToggleForStory = (props: IProps) => {
  return (
    <Toggle>
      <Toggle.Button {...props} />
    </Toggle>
  )
}

export default ToggleForStory
