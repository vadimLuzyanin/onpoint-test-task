import React, { useState, useEffect, Fragment } from 'react'
import styled from 'styled-components'
import Slides from './Slides'

import slider_cube from './../img/slider_cube.png'
import slider_line from './../img/slider_line.png'

const SlidingCube = styled.div`
    background-image: url(${slider_cube});
    position: absolute;
    width: 50px;
    height: 60px;
    background-size: cover;
    left: ${props => props.x - 25 + 'px'};
    top: -25px;
    transition: ${props => props.touchUp && '1s'};
    z-index: 2000;
`

const SlidingArea = styled.div`
    width: 600px;
    background-image: url(${slider_line});
    height: 53px;
    background-size: 100%;
    position: relative;
    left: 195px;
    top: calc(100vh - 80px);
    z-index: 1000;
`

const SlidingAreaProcessed = styled.div`
    width: ${props => props.x > 0 ? props.x + 'px' : '0px'};
    position: relative;
    top: 0;
    left: 0;
    height: 10px;
    background-color: white;
    transition: ${props => props.touchUp && '1s'};
`

const Slider = () => {
    const [touchDown, setTouchDown] = useState(false)
    const [xCoord, setXCoord] = useState(0)
    const [tab, setTab] = useState(0)

    useEffect(() => {
        if (xCoord <= 200) {
            setTab(0)
        } else if (xCoord <= 400) {
            setTab(1)
        } else if (xCoord <= 600) {
            setTab(2)
        }
    }, [xCoord])

    const handleDrag = (e) => {
        if (touchDown) {
            const x = e.touches[0].clientX - 195;
            if (Math.abs(x - xCoord) >= 10 && x >= 0 && x <= 600) {
                setXCoord(x)
            }
        }
    }

    useEffect(() => {
        if (xCoord < 200) {
            setXCoord(0)
        } else if (xCoord < 400) {
            setXCoord(300)
        } else {
            setXCoord(600)
        }
    }, [touchDown])

    return (
        <Fragment>
            <SlidingArea onTouchMove={(e) => handleDrag(e)}>
                <SlidingCube
                    onTouchStart={() => setTouchDown(true)}
                    onTouchEnd={() => setTouchDown(false)}
                    x={xCoord}
                    touchUp={!touchDown}
                >
                </SlidingCube>
                <SlidingAreaProcessed x={xCoord} touchUp={!touchDown}></SlidingAreaProcessed>
            </SlidingArea>
            <Slides tab={tab}></Slides>
        </Fragment>
    )
}

export default Slider
