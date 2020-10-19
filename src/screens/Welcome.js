import React from 'react';
import jaz01 from '../assets/jaz01.png'
import bdCake from '../assets/bd_cake.svg'
import styled from 'styled-components'
import ReactPlayer from 'react-player'
import YouTube from "@u-wave/react-youtube";
import MainContainer from "../components/MainContainer";
import { useHistory } from "react-router-dom";

const FlexContainer = styled.div`
    height: 100%;
    display: flex;
    flex-direction:column;
    align-items: center;
    justify-content: space-around;
`

const WelcomeText = styled.h1`
    color: black;
    text-align:center;
`

function Welcome() {

    const history = useHistory();

    function handleClick() {
        history.push("/welcomeVideo");
    }

    return (<div>
        <MainContainer>
            <FlexContainer>
                <WelcomeText>MI AMOR!</WelcomeText>
                <div>
                    <p>Search far and wide, by any measure.</p>
                    <p>It's time to begin your quest for treasure!</p>
                    <p>Click the cake and so it may be</p>
                    <p>the first clue you are about to see!</p>
                </div>
                <img src={bdCake} alt="bday" style={{width: '90%', cursor: 'pointer'}} onClick={handleClick}/>
            </FlexContainer>
        </MainContainer>
    </div>)
}

export default Welcome;