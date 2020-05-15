import React from 'react'
import styled from 'styled-components'

import ice_cubes_page_1 from './../img/ice_cubes_page_1.png'

const Cube = styled.div`
    position: absolute;
    background-image: url(${ice_cubes_page_1});
    background-repeat: no-repeat;
    background-size: 100vw;
    margin-top: ${props => props.page === 1 ? '10px' : '100px'};
    transition: 1s;
    z-index: 1000;
    width: 100vw;
    height: 100vh;
`

const IceCubes = ({ page }) => {
    return (
        <Cube page={page}></Cube>
    )
}

export default IceCubes
