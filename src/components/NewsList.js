import React from 'react';

import Story from './Story'

import styled from 'styled-components'

const NewsList = props => {
   return(
       <NewsListWrapper>
        {
            props.stories.map(story => (
                <Story key={story.url} story={story} />
            )
          )
        }
       </NewsListWrapper>
   )
}


export default NewsList;

const NewsListWrapper = styled.div`
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      overflow: none;
      width: 80vw;
`;