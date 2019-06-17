import styled from 'styled-components'

export const Input = styled.input`
  display: none;
`

export const Container = styled.label`
  max-width: 260px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 50%;
  height: 160px;
  border: 2px solid #e4e4e4;
  border-radius: 10px;
  margin-bottom: 9px;
  margin-right: 7px;
  &:hover {
    cursor: pointer;
    transform: translateY(1px);
  }
`
export const ContainerActive = styled(Container)`
  border: 2px solid #54c6c5;
  background: #f8f8f8;
`
export const Icon = styled.img`
  width: 75px;
  height: 75px;
  @media (max-width: 550px) {
    width: 45px;
    height: 45px;
  }
`
export const Description = styled.div`
  font-size: 1.3em;
  margin-top: 7px;
  font-weight: 200;
  color: #606060;
  font-family: sans-serif;
  text-align: center;
  @media (max-width: 550px) {
    font-size: 1em;
  }
`
