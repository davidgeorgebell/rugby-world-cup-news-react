import React from 'react';

import Story from './Story'

import styled from 'styled-components'

const NewsList = props => {
   return(
       <NewsListWrapper>
        {
            props.stories.map(story => (
                <Story story={story} />
            )
          )
        }
       </NewsListWrapper>
   )
}


export default NewsList;

const NewsListWrapper = styled.div`
      width: 85vw;
      margin: 0 auto;
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr;
      grid-gap: 20px;
`;