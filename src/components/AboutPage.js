import React from 'react'
import styled, { keyframes, ThemeProvider } from 'styled-components'
import { DarkTheme } from './Themes';

import LogoComponent from '../subComponents/LogoComponent';
import SocialIcons from '../subComponents/SocialIcons';
import PowerButton from '../subComponents/PowerButton';
import ParticleComponent from '../subComponents/ParticleComponent';
import BigTitle from '../subComponents/BigTitlte'
import astronaut from '../assets/Images/spaceman.png'

const Box = styled.div`
  background-color: ${props => props.theme.body};
  width: 100vw;
  height: 100vh;
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
`

const float = keyframes`
  0% { transform: translateY(-10px) }
  50% { transform: translateY(15px) translateX(15px) }
  100% { transform: translateY(-10px) }
`

const Spaceman = styled.div`
  position: absolute;
  top: 10%;
  right: 5%;
  width: 20vw;
  animation: ${float} 4s ease infinite;
  
  @media (max-width: 768px) {
    width: 40vw;
    top: 5%;
    right: 50%;
    transform: translateX(50%);
    opacity: 0.3;
    z-index: 0;
  }

  img {
    width: 100%;
    height: auto;
  }
`

const Main = styled.div`
  border: 2px solid ${(props) => props.theme.text};
  color: ${(props) => props.theme.text};
  padding: 2rem;
  width: 50vw;
  height: 65vh;
  z-index: 3;
  line-height: 1.5;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: calc(0.6rem + 1vw);
  backdrop-filter: blur(4px);
  position: absolute;
  left: calc(5rem + 5vw);
  top: 10rem;
  font-family: 'Ubuntu Mono', monospace;
  font-style: italic;

  @media (max-width: 768px) {
    width: 85vw;
    height: auto;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 1.5rem;
    font-size: calc(0.8rem + 1vw);
    backdrop-filter: blur(6px);
    background-color: ${props => `rgba(${props.theme.bodyRgba},0.85)`};
  }

  @media (max-width: 480px) {
    padding: 1rem;
    font-size: calc(0.7rem + 1vw);
    height: 70vh;
    overflow-y: auto;
  }
`

const StyledBigTitle = styled(BigTitle)`
  @media (max-width: 768px) {
    font-size: calc(0.8em + 3vw);
  }
`

const AboutPage = () => {
    return (
        <ThemeProvider theme={DarkTheme}>
            <Box>
                <LogoComponent theme='dark'/>
                <SocialIcons theme='dark'/>
                <PowerButton />
                <ParticleComponent theme='dark' />

                <Spaceman>
                    <img src={astronaut} alt="spaceman" />
                </Spaceman>    
                <Main>
                    Hello! I'm Himanshu Kumar, a passionate video editor with a keen eye for storytelling and visual aesthetics. With years of experience in editing vlogs, cinematic sequences, and engaging content, I bring creativity and precision to every project.
                    <br /> <br />
                    I specialize in Adobe Premiere Pro, After Effects, DaVinci Resolve, and other industry-standard tools to craft high-quality videos that captivate audiences. Whether it's fast-paced edits, smooth transitions, color grading, or sound design, I strive to enhance the overall visual experience.
                    <br /> <br />
                    Through my brand EditFusion, I have worked with content creators, vloggers, and businesses to produce compelling videos that stand out. My goal is to transform raw footage into visually stunning stories that leave a lasting impact.
                    <br /> <br />
                    Let's collaborate and bring your vision to life!
                </Main>

                <StyledBigTitle text="ABOUT" top="10%" left="5%" />
            </Box>
        </ThemeProvider>
    )
}

export default AboutPage