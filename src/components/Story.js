import React from 'react';

import styled from 'styled-components';

export const Story = props => (
    <StoryWrapper>
        <h2>{props.story.title}</h2>
        <p>{props.story.author}</p>
    </StoryWrapper>
)

export default Story;

const StoryWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #95dada;
  border: 1px solid grey;
  border-radius: 5px;
  padding: 25px;
  cursor: pointer;
  -moz-osx-font-smoothing: grayscale;
  backface-visibility: hidden;
  transform: translateZ(0);
  transition: transform 0.25s ease-out;
 &:hover {
  transform: scale(1.05);
}
   
`;