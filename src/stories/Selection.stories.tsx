import { ComponentMeta, ComponentStory } from '@storybook/react'
import Selection from './Selection'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Selection',
  component: Selection,
} as ComponentMeta<typeof Selection>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Selection> = () => <Selection />

export const Base = Template.bind({})
