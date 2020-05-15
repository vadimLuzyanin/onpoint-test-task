import React from 'react'

import styled from 'styled-components'

import tab_1 from './../img/tab_1.png'
import tab_2 from './../img/tab_2.png'
import tab_3 from './../img/tab_3.png'

import ice_1 from './../img/ice_1.png'
import ice_2 from './../img/ice_2.png'
import ice_3 from './../img/ice_3.png'

const Container = styled.div`
    display: flex;
    flex-direction: row;
    transform: translateX(${props => props.tab * -33.333 + '%'});
    transition: 1s;
    height: 100vh;
    width: 300%;
`

const Slide = styled.div`
    background-image: url(${props => props.tab === 0 ? ice_1 : props.tab === 1 ? ice_2 : props.tab === 2 ? ice_3 : ''});
    background-repeat: no-repeat;
    background-size: 100vw;
    transition: 1s;
    width: 33.333%;
    height: 100%;
`

const SlideContentImage = styled.div`
    position: relative;
    left: 50%;
    top: ${props => props.tab === 0 ? '60px' : props.tab === 1 ? '15px' : props.tab === 2 ? '10px' : ''};
    transform: translateX(-50%);
    background-image: url(${props => props.tab === 0 ? tab_1 : props.tab === 1 ? tab_2 : props.tab === 2 ? tab_3 : ''});
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
    width: ${props => props.tab === 0 ? '590px' : props.tab === 1 ? '770px' : props.tab === 2 ? '925px' : ''};
    height: ${props => props.tab === 0 ? '340px' : props.tab === 1 ? '490px' : props.tab === 2 ? '495px' : ''};
`

const SliderContentTitle = styled.h2`
    margin: 0;
    margin-top: 45px;
    margin-left: 80px;
    padding: 0;
    color: #ffffff;
    font-family: Loko;
    font-size: 30px;
    font-weight: 400;
`

const Slides = ({ tab }) => {
    return (
        <Container tab={tab}>
            <Slide currentTab={tab} tab={0}>
                <SliderContentTitle>Звенья патогенеза СД2</SliderContentTitle>
                <SlideContentImage currentTab={tab} tab={0}></SlideContentImage>
            </Slide>
            <Slide currentTab={tab} tab={1}>
                <SliderContentTitle>Смертельный октет</SliderContentTitle>
                <SlideContentImage currentTab={tab} tab={1}></SlideContentImage>
            </Slide>
            <Slide currentTab={tab} tab={2}>
                <SliderContentTitle>Звенья патогенеза СД2</SliderContentTitle>
                <SlideContentImage currentTab={tab} tab={2}></SlideContentImage>
            </Slide>
        </Container>
    )
}

export default Slides
