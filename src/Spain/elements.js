import styled from 'styled-components'

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: black;
`
export const Button = styled.button`
  position: absolute;
  top: 50px;
  left: 50%;
  width: 50px;
  cursor: pointer;
  z-index: 10;
  @media (max-width: 500px) {
    left: 75%;
    background: white;
    border-radius: 10px;
  }
`
export const El = styled.div`
  position: absolute;
  background: ${({ color }) => color};
  left: ${({ left }) => left || 'auto'};
  top: ${({ top }) => top || 'auto'};
  width: ${({ width }) => width || '100'}px;
  height: ${({ height }) => height || '10'}px;
`
export const Sky = styled(El)`
  width: 500px;
  height: 500px;
  max-height: 90vh;
  border-radius: 15px;
  display: flex;
  overflow: hidden;
  justify-content: center;
  align-items: center;
  @media (max-width: 500px) {
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    border-radius: 0;
  }
`

export const Eye = styled(El)`
  background: black;
  width: 10px;
  height: 10px;
  position: absolute;
  border-radius: 50%;
  color: green;
  z-index: 30;
`
export const EyeLeft = styled(Eye)`
  top: 30%;
  left: 30%;
`
export const EyeRight = styled(Eye)`
  top: 30%;
  left: 60%;
`
export const EyeRightWink = styled(Eye)`
  top: 25%;
  width: 13px;
  left: 56%;
  box-shadow: 0px 5px 0px black;
  background: transparent;
`
export const Smile = styled(Eye)`
  top: 38%;
  left: 27%;
  width: 52px;
  height: 32px;
  box-shadow: 0px 5px 0px black;
  background: transparent;
`
export const Smiley = styled(El)`
  width: 110px;
  height: 110px;
  left: 9%;
  top: 11%;
  border-radius: 50%;
  position: absolute;
  z-index: 20;
  @media (max-width: 500px) {
    left: 14%;
    top: 10%;
  }
`
export const Sun = styled(El)`
  width: 100px;
  height: 100px;
  left: 9%;
  top: 11%;
  border: 5px solid black;
  border-radius: 50%;
  @media (max-width: 500px) {
    left: 14%;
    top: 10%;
  }
`

export const Mountain = styled(El)`
  transform: rotate(50deg);
  width: 340px;
  height: 480px;
  left: 38%;
  top: 60%;
  border-radius: 10px;
  border: 5px solid black;
  overflow: hidden;
  z-index: 20;
  border-top-left-radius: 50px;
  @media (max-width: 500px) {
    left: 22%;
  }
`
export const Prasinada = styled(El)`
  border-radius: 50%;
  left: -125px;
  top: -145px;
  width: 260px;
  height: 400px;
`
export const Sea = styled(El)`
  width: 600px;
  height: 150px;
  left: 0;
  top: 41%;
  position: relative;
  z-index: 10;
  @media (max-width: 500px) {
    height: 350px;
    top: 45%;
  }
`
export const Sunlight = styled(El)`
  transform: rotate(${({ rotate }) => rotate || 0}deg);
  width: ${({ width }) => width || '30'}px;
  height: 10px;
  border-radius: 5px;
`
export const SunReflexion = styled(El)`
  border-radius: 50%;
  border: 5px solid black;
  z-index: 20;
  position: absolute;
`

export const SunReflexion1 = styled(SunReflexion)`
  left: 9%;
  top: 10%;
  @media (max-width: 500px) {
    left: 11%;
    top: 6%;
  }
`
export const SunReflexion2 = styled(SunReflexion)`
  left: 5%;
  top: 28%;
  width: 80px;
  @media (max-width: 500px) {
    left: 13%;
    top: 16%;
  }
`
export const SunReflexion3 = styled(SunReflexion)`
  left: 7%;
  top: 46%;
  @media (max-width: 500px) {
    left: 16%;
    top: 26%;
    width: 60px;
  }
`
