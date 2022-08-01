import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Calendar } from 'components'

export default {
  title: 'Example/Calendar',
  component: Calendar,
} as ComponentMeta<typeof Calendar>
const CalendarTemplate: ComponentStory<typeof Calendar> = () => <Calendar />

export const CalendarBase = CalendarTemplate.bind({})
