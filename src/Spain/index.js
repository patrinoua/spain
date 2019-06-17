import React from 'react'
import {
  Container,
  Sky,
  SunReflexion,
  Sea,
  Sun,
  Sunlight,
  Smiley,
  EyeLeft,
  EyeRight,
  EyeRightWink,
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
              {daylight ? <EyeRight /> : <EyeRightWink />}
              <Smile />
            </Smiley>
          )}
          {smileyIsVisible &&
            daylight && (
              <React.Fragment>
                <Sunlight color={sun} rotate={0} top={'105px'} left={'8px'} />
                <Sunlight color={sun} rotate={0} top={'105px'} left={'164px'} />
                <Sunlight color={sun} rotate={90} top={'27px'} left={'86px'} />
                <Sunlight color={sun} rotate={90} top={'183px'} left={'86px'} />
                <Sunlight
                  color={sun}
                  rotate={135}
                  top={'47px'}
                  left={'144px'}
                  width={20}
                />
                <Sunlight
                  color={sun}
                  rotate={45}
                  top={'162px'}
                  left={'145px'}
                  width={20}
                />
                <Sunlight
                  color={sun}
                  rotate={45}
                  top={'47px'}
                  left={'31px'}
                  width={20}
                />
                <Sunlight
                  color={sun}
                  rotate={135}
                  top={'162px'}
                  left={'31px'}
                  width={20}
                />
              </React.Fragment>
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
