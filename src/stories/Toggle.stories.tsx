import { ComponentMeta, ComponentStory } from '@storybook/react'
import Toggle from './Toggle'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Toggle',
  component: Toggle,
} as ComponentMeta<typeof Toggle>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Toggle> = (args) => <Toggle {...args} />

export const Base = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/arg

export const Medium = Template.bind({})
Medium.args = {
  size: 'medium',
}

export const Large = Template.bind({})
Large.args = {
  size: 'large',
}

export const Red = Template.bind({})
Red.args = {
  color: 'red',
}

export const Blue = Template.bind({})
Blue.args = {
  color: 'blue',
}
