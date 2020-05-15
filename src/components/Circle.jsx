import React from 'react'
import styled, { keyframes } from 'styled-components'

const pulse = keyframes`
    0% {
        width: 0px;
        height: 0px;
        background-color: #f78b1f;
        background-image: radial-gradient(circle,  #de791b 90%, #cf1437 95%);
        opacity: 1;
    }
    90% {
        width: 100%;
        height: 100%;
        background-color: #f78b1f;
        background-image: radial-gradient(circle  #de791b 90%, #cf1437 95%);
        opacity: 0.5;
    }
    100% {
        width: 100%;
        height: 100%;
        background-color: #f78b1f;
        background-image: radial-gradient(circle,  #de791b 90%, #cf1437 95%);
        opacity: 0.1;
    }
`

const Container = styled.div`
    position: absolute;
    top: ${props => props.top};
    left: ${props => props.left};
`

const Main = styled.div`
    width: ${props => props.width};
    height: ${props => props.height};
    border: 2px solid #cf1437;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    background-color: rgba(247, 139, 31, 0.3);

    &&::before {
        content: '';
        width: 0;
        height: 0;
        display: block;
        border: 1px solid #cf1437;
        border-radius: 50%;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        animation: ${pulse} 2s linear infinite;
    }
    &&::after {
        content: '';
        width: 0;
        height: 0;
        display: block;
        border: 1px solid #cf1437;
        border-radius: 50%;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        animation: ${pulse} 2s 1s linear infinite;
    }
`

const Content = styled.div`
    color: #0d319c;
    font-family: Lato;
    font-size: 20px;
    font-weight: 400;
    position: absolute;
    left: ${props => props.contentPosition === 'right' ? '70px' : props.contentPosition === 'top' ? '-35px' : ''};
    top: ${props => props.contentPosition === 'right' ? '10px' : props.contentPosition === 'top' ? '-35px' : ''};
    width: 150px;
`

const Circle = ({ size, left, top, content, contentPosition }) => {
    return (
        <Container left={left} top={top}>
            <Main height={size} width={size}></Main>
            <Content contentPosition={contentPosition} size={size}>{content}</Content>
        </Container>
    )
}

export default Circle
