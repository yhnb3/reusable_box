import { ComponentMeta, ComponentStory } from '@storybook/react'
import { SearchBar } from 'components'

export default {
  title: 'Example/SearchBar',
  component: SearchBar,
} as ComponentMeta<typeof SearchBar>
const SearchBarTemplate: ComponentStory<typeof SearchBar> = () => <SearchBar />

export const SearchBarBase = SearchBarTemplate.bind({})
