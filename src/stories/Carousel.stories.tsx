import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Carousel } from 'components'

export default {
  title: 'Example/Carousel',
  component: Carousel,
} as ComponentMeta<typeof Carousel>
const CarouselTemplate: ComponentStory<typeof Carousel> = () => <Carousel />

export const CarouselBase = CarouselTemplate.bind({})
