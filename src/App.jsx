import React, { useState, Fragment } from 'react'
import styled from 'styled-components'

import bg from './img/more_copy.png'
import Circle from './components/Circle'
import ScrollDownIndicator from './components/ScrollDownIndicator'
import IceCubes from './components/IceCubes'
import Slider from './components/Slider'

const Main = styled.div`
  background-image: url(${bg});
  background-repeat: no-repeat;
  background-size: 100vw;
  height: 500vh;
  width: 100%;
  position: relative;
  overflow: hidden;
  transform: translateY(${props => (props.page * -100 + 'vh')});
  transition: 0.5s ease;
`

const Header = styled.div`

  color: #0d319c;
  font-family: Lato;
  font-size: 50px;
  font-weight: 400;

  margin: 0px;
  padding-top: 145px;
  padding-left: 75px;

  letter-spacing: -0.24px;
`

const PageOne = styled.div`
  height: 100vh;
`
const PageTwo = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
`

const HeaderTwo = styled.div`
  text-shadow: 0 0 119px rgba(0, 131, 254, 0.09);
  color: #ffffff;
  font-family: Lato;
  font-size: 50px;
  font-weight: 300;
  width: 460px;
  text-align: center;
  margin-top: 250px;
`

const PageThree = styled.div`
  height: 100vh;
`

const App = () => {

  const [currentPage, setCurrentPage] = useState(0)

  const [touchCoords, setTouchCoords] = useState(0)

  const scrollY = (e) => {
    let direction
    if (e.deltaY < 0) direction = 'toTop'
    if (e.deltaY > 0) direction = 'toBottom'

    if (direction === 'toTop') {
      setCurrentPage(prev => prev !== 0 ? prev - 1 : prev)
    } else if (direction === 'toBottom') {
      setCurrentPage(prev => prev !== 2 ? prev + 1 : prev)
    }
  }

  const handleTouchStart = (e) => {
    setTouchCoords(e.touches[0].pageY)
  }

  const handleTouchEnd = (e) => {
    let direction
    let offsetY = e.changedTouches[0].pageY - touchCoords;
    if (offsetY < -50) direction = 'toBottom'
    if (offsetY > 50) direction = 'toTop'

    if (direction === 'toTop') {
      setCurrentPage(prev => prev !== 0 ? prev - 1 : prev)
    } else if (direction === 'toBottom') {
      setCurrentPage(prev => prev !== 2 ? prev + 1 : prev)
    }
  }

  return (
    <Fragment>
      <Main page={currentPage} onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd} onWheel={e => {
        scrollY(e)
      }}>
        <PageOne>
          <Header onClick={scrollY}>
            Всегда ли цели терапии СД2
            на поверхности?
          </Header>
          <Circle size='52px' top='262px' left='562px' content='Цель по HbA1c' contentPosition='right'></Circle>
          <Circle size='27px' top='427px' left='275px' content='Гипогликемия' contentPosition='top'></Circle>
          <Circle size='16px' top='539px' left='480px' content='Осложнения СД' contentPosition='top'></Circle>
          <Circle size='16px' top='523px' left='820px' content='СС риски' contentPosition='top'></Circle>
        </PageOne>

        <PageTwo>
          <HeaderTwo>
            Основа терапии —
            патогенез СД2
          </HeaderTwo>
          <IceCubes page={currentPage}>

          </IceCubes>
        </PageTwo>
        <PageThree>
          <Slider></Slider>
        </PageThree>
      </Main>
      <ScrollDownIndicator setCurrentPage={setCurrentPage} page={currentPage}></ScrollDownIndicator>
    </Fragment>
  )
}

export default App
