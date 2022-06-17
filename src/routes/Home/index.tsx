import { Selection } from 'components'

const DATA = ['네이버', '카카오', '구글', '페이스북', '라인', '프레스토']
const Home = () => {
  return (
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
}

export default Home
