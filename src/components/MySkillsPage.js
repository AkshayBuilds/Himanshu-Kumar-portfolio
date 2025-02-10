import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { lightTheme } from './Themes'
import { Design, Develope } from './AllSvgs'
import LogoComponent from '../subComponents/LogoComponent'
import SocialIcons from '../subComponents/SocialIcons'
import PowerButton from '../subComponents/PowerButton'
import ParticleComponent from '../subComponents/ParticleComponent'
import BigTitle from '../subComponents/BigTitlte'

const Box = styled.div`
  background-color: ${props => props.theme.body};
  width: 100vw;
  height: 100vh;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 2rem;
  overflow-x: hidden;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-evenly;
    padding: 2rem;
  }
`

const Main = styled.div`
  border: 2px solid ${props => props.theme.text};
  color: ${props => props.theme.text};
  background-color: ${props => props.theme.body};
  padding: 2rem;
  width: 90vw;
  height: auto;
  z-index: 3;
  line-height: 1.5;
  cursor: pointer;
  font-family: 'Ubuntu Mono', monospace;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 1rem 0;

  @media (min-width: 768px) {
    width: 30vw;
    height: 60vh;
    margin: 0;
  }

  &:hover {
    color: ${props => props.theme.body};
    background-color: ${props => props.theme.text};
  }
`

const Title = styled.h2`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: calc(1em + 1vw);
  margin-bottom: 1rem;

  ${Main}:hover & {
    & > * {
      fill: ${props => props.theme.body};
    }
  }

  & > *:first-child {
    margin-right: 1rem;
  }
`

const Description = styled.div`
  color: ${props => props.theme.text};
  font-size: calc(0.6em + 1vw);
  padding: 0.5rem 0;

  ${Main}:hover & {
    color: ${props => props.theme.body};
  }

  strong {
    margin-bottom: 1rem;
    text-transform: uppercase;
    display: block;
    margin-top: 1rem;
  }

  ul {
    margin-left: 1rem;
    margin-top: 0.5rem;
  }

  li {
    margin-bottom: 0.5rem;
  }
`

const BigTitleStyled = styled(BigTitle)`
  @media (max-width: 767px) {
    font-size: calc(0.5em + 3vw);
    top: 90%;
    right: 10%;
  }
`

const MySkillsPage = () => {
    return (
        <ThemeProvider theme={lightTheme}>
            <Box>
                <LogoComponent theme='light' />
                <SocialIcons theme='light' />
                <PowerButton />
                <ParticleComponent theme='light' />
                <Main>
                    <Title>
                        <Design width={40} height={40} /> Creative Skills
                    </Title>
                    <Description>
                        I bring stories to life through seamless editing, engaging visuals, and cinematic storytelling. My goal is to create high-quality, visually appealing content.
                    </Description>
                    <Description>
                        <strong>Skills</strong>
                        <ul>
                            <li>Video Editing (Cutting, Transitions, Color Grading)</li>
                            <li>Motion Graphics & Animation</li>
                            <li>Sound Design & Audio Syncing</li>
                            <li>Storytelling & Sequencing</li>
                        </ul>
                    </Description>
                </Main>
                <Main>
                    <Title>
                        <Develope width={40} height={40} /> Tools & Software
                    </Title>
                    <Description>
                        Proficient in industry-standard editing software and tools for creating professional video content.
                    </Description>
                    <Description>
                        <strong>Tools</strong>
                        <ul>
                            <li>Adobe Premiere Pro</li>
                            <li>After Effects</li>
                            <li>Photoshop</li>
                            <li>CapCut</li>
                        </ul>
                    </Description>
                </Main>
                <BigTitleStyled text="SKILLS" top="80%" right="30%" />
            </Box>
        </ThemeProvider>
    )
}

export default MySkillsPage