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
`
export const El = styled.div`
  background: ${({ color }) => color};
  position: absolute;
  left: ${({ left }) => left || '10px'};
  top: ${({ top }) => top || '50px'};
  width: ${({ width }) => width || '100'}px;
  height: ${({ height }) => height || '10'}px;
`
export const Sky = styled(El)`
  width: 500px;
  height: 500px;
  position: relative;
  border-radius: 15px;
  display: flex;
  overflow: hidden;
  justify-content: center;
  align-items: center;
`
export const Sea = styled(El)`
  width: 600px;
  height: 150px;
  left: -30px;
  top: 380px;
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
`
export const Sun = styled(El)`
  width: 100px;
  height: 100px;
  left: 9%;
  top: 11%;
  border: 5px solid black;
  border-radius: 50%;
`

export const Mountain = styled(El)`
  transform: rotate(50deg);
  width: 300px;
  height: 400px;
  left: 38%;
  top: 60%;
  border-radius: 10px;
  border: 5px solid black;
  overflow: hidden;
  z-index: 20;
  border-top-left-radius: 50px;
`
export const Prasinada = styled(El)`
  border-radius: 50%;
  left: -125px;
  top: -145px;
  width: 260px;
  height: 400px;
`

export const SunReflexion = styled(El)`
  border-radius: 50%;
  border: 5px solid black;
  z-index: 20;
`
