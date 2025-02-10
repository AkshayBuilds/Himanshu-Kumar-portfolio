import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { DarkTheme } from "./Themes";
import { motion } from "framer-motion";

import LogoComponent from "../subComponents/LogoComponent";
import SocialIcons from "../subComponents/SocialIcons";
import PowerButton from "../subComponents/PowerButton";
import BigTitle from "../subComponents/BigTitlte";

const Box = styled.div`
  background-color: ${(props) => props.theme.body};
  min-height: 100vh;
  width: 100vw;
  position: relative;
  padding: 2rem;
  overflow-x: hidden;
`;

const Main = styled.div`
  max-width: 1200px;
  margin: 8rem auto 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  position: relative;
  padding-bottom: 5rem;
`;

const WorkItem = styled(motion.div)`
  background: ${props => `rgba(${props.theme.bodyRgba},0.7)`};
  padding: 1.5rem;
  border-radius: 10px;
  border: 1px solid ${props => props.theme.text};
  backdrop-filter: blur(4px);
  
  h2 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
    color: ${props => props.theme.text};
  }

  p {
    color: ${props => props.theme.text};
    margin-bottom: 1rem;
  }
`;

const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 1rem;
`;

const Tag = styled.span`
  background: ${props => props.theme.text};
  color: ${props => props.theme.body};
  padding: 0.3rem 0.8rem;
  border-radius: 4px;
  font-size: 0.8rem;
`;

const ViewButton = styled.a`
  display: inline-block;
  background: ${props => props.theme.text};
  color: ${props => props.theme.body};
  padding: 0.5rem 1rem;
  border-radius: 4px;
  text-decoration: none;
  margin-top: 1rem;
  font-weight: 500;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0,0,0,0.2);
  }
`;

const WorkData = [
    {
        id: 1,
        name: "Travel Vlog Edit",
        description: "Cinematic transitions and color grading that bring travel experiences to life. Featuring dynamic pacing, atmospheric sound design, and vibrant color enhancement.",
        tags: ["Premiere Pro", "Color Grading", "Transitions"],
        demo: "https://youtube.com"
    },
    {
        id: 2,
        name: "Music Video Edit",
        description: "Fast-paced cuts perfectly synchronized with beats, creating an energetic visual experience. Includes creative transitions and visual effects that enhance the music.",
        tags: ["After Effects", "Sound Design", "Motion"],
        demo: "https://youtube.com"
    },
    {
        id: 3,
        name: "Short Film Edit",
        description: "Story-driven editing that maintains narrative flow while creating emotional impact. Careful pacing and thoughtful scene transitions that enhance storytelling.",
        tags: ["DaVinci Resolve", "Storytelling", "Color"],
        demo: "https://youtube.com"
    },
    {
        id: 4,
        name: "YouTube Vlog Compilation",
        description: "Engaging content with smooth pacing and creative transitions. Includes dynamic text animations and engaging visual elements that maintain viewer interest.",
        tags: ["Premiere Pro", "Pacing", "YouTube"],
        demo: "https://youtube.com"
    },
    {
        id: 5,
        name: "Cinematic Highlight Reel",
        description: "Stunning visuals with dynamic flow, featuring advanced color grading and seamless transitions. Creates an immersive cinematic experience.",
        tags: ["After Effects", "Cinematic", "Visual Effects"],
        demo: "https://youtube.com"
    },
    {
        id: 6,
        name: "Commercial Ad Edit",
        description: "Professional and polished editing focused on brand messaging. Sharp cuts, engaging motion graphics, and impactful sound design.",
        tags: ["Premiere Pro", "Branding", "Commercial"],
        demo: "https://youtube.com"
    },
    {
        id: 7,
        name: "Wedding Film Edit",
        description: "Emotional storytelling with elegant transitions that capture precious moments. Includes sophisticated color grading and carefully selected music.",
        tags: ["DaVinci Resolve", "Wedding", "Storytelling"],
        demo: "https://youtube.com"
    },
    {
        id: 8,
        name: "Event Recap Video",
        description: "Dynamic highlights with engaging motion effects that capture the energy of live events. Features smooth transitions and synchronized music.",
        tags: ["After Effects", "Motion Graphics", "Events"],
        demo: "https://youtube.com"
    }
];

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
            duration: 0.5,
        }
    }
};

const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const WorkPage = () => {
    return (
        <ThemeProvider theme={DarkTheme}>
            <Box>
                <LogoComponent theme="dark" />
                <SocialIcons theme="dark" />
                <PowerButton />

                <Main as={motion.div} variants={container} initial="hidden" animate="show">
                    {WorkData.map((work) => (
                        <WorkItem key={work.id} variants={item}>
                            <h2>{work.name}</h2>
                            <p>{work.description}</p>
                            <Tags>
                                {work.tags.map((tag, id) => (
                                    <Tag key={id}>{tag}</Tag>
                                ))}
                            </Tags>
                            <ViewButton href={work.demo} target="_blank" rel="noopener noreferrer">
                                View Project
                            </ViewButton>
                        </WorkItem>
                    ))}
                </Main>

                <BigTitle text="WORK" top="10%" right="20%" />
            </Box>
        </ThemeProvider>
    );
};

export default WorkPage;
