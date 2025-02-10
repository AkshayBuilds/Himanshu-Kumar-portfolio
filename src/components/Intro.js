import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import Me from '../assets/Images/profile-img.png'

const Box = styled(motion.div)`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 65vw;
  height: 55vh;
  display: flex;
  
  background: linear-gradient(
    to right,
    ${props => props.theme.body} 50%,
    ${props => props.theme.text} 50%) bottom,
    linear-gradient(
    to right,
    ${props => props.theme.body} 50%,
    ${props => props.theme.text} 50%) top;
  background-repeat: no-repeat;
  background-size: 100% 2px;
  border-left: 2px solid ${props => props.theme.body};
  border-right: 2px solid ${props => props.theme.text};
  z-index: 1;

  @media (max-width: 768px) {
    background: black;
    width: 85vw;
    height: 60vh;
    flex-direction: column;
    justify-content: space-between;
  }

  @media (max-width: 480px) {
    height: 70vh;
  }
`

const SubBox = styled.div`
  width: 50%;
  position: relative;
  display: flex;
  
  .pic {
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translate(-50%, 0%);
    width: 100%;
    height: auto;
  }

  @media (max-width: 768px) {
    width: 100%;
    height: 50%;

    .pic {
      width: auto;
      height: 100%;
      object-fit: cover;
    }
  }
`

const Text = styled.div`
  font-size: calc(1em + 1.5vw);
  color: ${props => props.theme.body};
  padding: 2rem;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  & > *:last-child {
    color: ${props => `rgba(${props.theme.bodyRgba},0.6)`};
    font-size: calc(0.5rem + 1.5vw);
    font-weight: 300;
  }

  @media (max-width: 768px) {
    padding: 1rem;
    
    & > *:last-child {
      font-size: calc(0.8rem + 1vw);
    }
  }

  @media (max-width: 480px) {
    padding: 0.8rem;
    
    h1 {
      font-size: calc(1.2rem + 1.5vw);
      margin-bottom: 0.5rem;
    }

    h3 {
      font-size: calc(1rem + 1vw);
      margin-bottom: 0.5rem;
    }

    h6 {
      font-size: calc(0.8rem + 0.5vw);
    }
  }
`

const Intro = () => {
    return (
        <Box
            initial={{ height: 0 }}
            animate={{ height: '55vh' }}
            transition={{ type: 'spring', duration: 2, delay: 1 }}
        >
            <SubBox>
                <Text>
                    <h1>Hello!</h1>
                    <h3>I'm Himanshu Kumar,</h3>
                    <h6>a passionate video editor with a keen eye for storytelling and visual aesthetics.</h6>
                </Text>
            </SubBox>
            <SubBox>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 2 }}
                >
                    <img className="pic" src={Me} alt="Profile Pic" />
                </motion.div>
            </SubBox>
        </Box>
    )
}

export default Intro