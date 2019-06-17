import React from 'react'
import {
  Container,
  Sky,
  SunReflexion,
  Sea,
  Sun,
  Smiley,
  EyeLeft,
  EyeRight,
  Smile,
  Mountain,
  Prasinada,
  Button
} from './elements.js'

export default class Spain extends React.Component {
  state = {
    daylight: true,
    smileyIsVisible: false
  }
  render() {
    const { daylight, smileyIsVisible } = this.state
    const colors = {
      sky: daylight ? 'rgb(0, 142, 255)' : '#171553',
      sun: daylight ? '#FFA42A' : '#fbe2ff',
      sea: daylight ? '#0900ff' : 'rgb(6, 9, 41)',
      mountain: daylight ? '#a73434' : '#040213',
      prasinada: daylight ? '#17b61e' : '#191b3f'
    }
    const { sky, sun, sea, mountain, prasinada } = colors

    return (
      <Container>
        <Button
          onClick={() => {
            this.setState({ daylight: !daylight })
          }}
        >
          {daylight ? 'Night' : 'Day'}
        </Button>
        <Sky color={sky}>
          <Sun
            color={sun}
            onMouseEnter={() => {
              this.setState({ smileyIsVisible: true })
            }}
          />
          {smileyIsVisible && (
            <Smiley
              onMouseLeave={() => {
                this.setState({ smileyIsVisible: false })
              }}
            >
              <EyeLeft />
              <EyeRight />
              <Smile />
            </Smiley>
          )}
          <SunReflexion
            name="SUN_REFLEXION"
            left={'9%'}
            top={'80%'}
            color={sun}
          />
          <SunReflexion width={'80'} left={'5%'} top={'85%'} color={sun} />
          <SunReflexion left={'7%'} top={'90%'} color={sun} />
          <Mountain color={mountain}>
            <Prasinada color={prasinada} />
          </Mountain>
          <Sea color={sea} />
        </Sky>
      </Container>
    )
  }
}
