import React, { Fragment } from 'react'

import scroll_down from './../img/scroll_down.png'
import styled from 'styled-components'

const ScrollDownImage = styled.div`
    position: fixed;
    bottom: -10px;
    &&::before {
        content: 'Листайте вниз';
        position: absolute;
        left: 48%;
        bottom: 50%;
        text-shadow: 0 0 119px rgba(0, 131, 254, 0.09);
        color: #ffffff;
        font-family: Lato;
        font-size: 15px;
        font-weight: 400;
    }
`

const PaginationDotsContainer = styled.div`
    position: fixed;
    left: 984px;
    top: 353px;
    display: flex;
    flex-direction: column;
    height: 54px;
    justify-content: space-between;
`

const PaginationDot = styled.div`
    width: 14px;
    height: 14px;
    border-radius: 50%;
    background-color: ${props => props.isActive ? '#f78b1f' : '#fff'};
`

const ScrollDownIndicator = ({ setCurrentPage, page }) => {
    return (
        <Fragment>
            {page !== 2 &&
                <ScrollDownImage onTouchStart={() => setCurrentPage(prev => prev + 1)}>
                    <img src={scroll_down} width={'100%'} alt='scroll down'></img>
                </ScrollDownImage>
            }
            <PaginationDotsContainer>
                <PaginationDot onTouchStart={() => setCurrentPage(0)} isActive={page === 0}></PaginationDot>
                <PaginationDot onTouchStart={() => setCurrentPage(1)} isActive={page === 1}></PaginationDot>
                <PaginationDot onTouchStart={() => setCurrentPage(2)} isActive={page === 2}></PaginationDot>
            </PaginationDotsContainer>
        </Fragment>
    )
}

export default ScrollDownIndicator
