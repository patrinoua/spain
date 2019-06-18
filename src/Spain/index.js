import React from 'react'
import {
  Container,
  Sky,
  SunReflexion1,
  SunReflexion2,
  SunReflexion3,
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
      sky: daylight
        ? 'linear-gradient( rgb(0, 142, 255), white)'
        : 'linear-gradient(#07061b, #4f4e78)',
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
            onClick={() => {
              this.setState({ smileyIsVisible: !smileyIsVisible })
            }}
          />
          {smileyIsVisible && (
            <Smiley
              onMouseLeave={() => {
                this.setState({ smileyIsVisible: false })
              }}
              onClick={() => {
                this.setState({ smileyIsVisible: !smileyIsVisible })
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
          <Mountain color={mountain}>
            <Prasinada color={prasinada} />
          </Mountain>
          <Sea color={sea}>
            <SunReflexion1 color={sun} />
            <SunReflexion2 color={sun} />
            <SunReflexion3 color={sun} />
          </Sea>
        </Sky>
      </Container>
    )
  }
}
