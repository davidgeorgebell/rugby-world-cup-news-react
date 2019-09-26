import React from 'react';


import styled from 'styled-components';

export const Story = props => (
    
    <StoryWrapper>
        <a target='blank' href={props.story.url}>
        <h3 className='title'>{props.story.title}</h3>
        <p>{props.story.source.name}</p>
        </a>
    </StoryWrapper>
    
)

export default Story;

const StoryWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 70vw;
  font-size: 1rem;
  background-color: #222;
  margin: 5px;
  border: 1px solid grey; 
  border-radius: 5px;
  padding: 10px;
  cursor: pointer;
  -moz-osx-font-smoothing: grayscale;
  backface-visibility: hidden;
  transform: translateZ(0);
  transition: transform 0.25s ease-out;
  a {
    color: white;
    text-decoration: none;
  }
  .title {
    margin-bottom: 0;
  }
 &:hover {
  transform: scale(1.05);
}
   
`;