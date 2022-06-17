import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Selection } from 'components'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Selection',
  component: Selection,
} as ComponentMeta<typeof Selection>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const DATA = ['네이버', '카카오', '구글', '페이스북', '라인', '프레스토']
const DropdownTemplate: ComponentStory<typeof Selection> = () => (
  <Selection>
    <Selection.Trigger />
    <Selection.OptionList>
      {DATA.map((value, idx) => {
        const key = `${value}-${idx}`
        return <Selection.OptionItem key={key} value={value} />
      })}
    </Selection.OptionList>
  </Selection>
)

export const Dropdown = DropdownTemplate.bind({})

const NavPageTemplate: ComponentStory<typeof Selection> = () => (
  <Selection on defaultValue='네이버' clickOutside={false} flexDirection='row'>
    <Selection.OptionList border={false}>
      {DATA.map((value, idx) => {
        const key = `${value}-${idx}`
        return <Selection.OptionItem value={value} key={key} />
      })}
    </Selection.OptionList>
    <Selection.OptionContent />
  </Selection>
)

export const NavPage = NavPageTemplate.bind({})
