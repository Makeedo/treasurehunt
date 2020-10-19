import React from 'react';
import styled from 'styled-components'

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
`

const CenteredContainer = styled.div`
    background: url('${props => props.background}');
    background-attachment: fixed;
    background-position-x: ${props => props.backgroundPositionX || 'center'};
    background-position-y: ${props => props.backgroundPositionY || 'center'};
    background-size: cover;
    margin: auto;
    max-width: 800px;
    width: 100%;
    height 100%;
    padding: 10px;
`
function MainContainer({background, backgroundPositionX, backgroundPositionY, children}) {
    return (<div>
        <Container>
            <CenteredContainer background={background} backgroundPositionX={backgroundPositionX} backgroundPositionY={backgroundPositionY}>
                {children}
            </CenteredContainer>
        </Container>
    </div>)
}

export default MainContainer;