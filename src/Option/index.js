import React from 'react'
import {
  Container,
  ContainerActive,
  Description,
  Icon,
  Input
} from './elements.js'

export default class Option extends React.Component {
  state = {
    isActive: false
  }
  toggleActive = e => {
    this.setState({
      isActive: !this.state.isActive
    })
  }
  render() {
    const { icon, children, checkedOptions } = this.props
    const { isActive } = this.state
    return (
      <React.Fragment>
        <Input
          type="checkbox"
          id={icon}
          onClick={e => {
            checkedOptions(e)
            this.toggleActive(e)
          }}
        />
        {isActive ? (
          <ContainerActive htmlFor={icon} name={icon} id={icon}>
            <Icon src={`/assets/blueIcons/${icon}.png`} alt="musicIcon" />
            <Description>{children}</Description>
          </ContainerActive>
        ) : (
          <Container htmlFor={icon} name={icon} id={icon}>
            <Icon src={`/assets/greyIcons/${icon}.png`} alt="musicIcon" />
            <Description>{children}</Description>
          </Container>
        )}
      </React.Fragment>
    )
  }
}
