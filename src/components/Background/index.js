import React from 'react';
import { Bubble, MainContainer } from './Background.elements';

const Background = ({ children }) => {
    return (
      <MainContainer>
        <Bubble
          bottom="10rem"
          left="-3rem"
        />
        <Bubble
          right="-3rem"
          top="2rem"
        />
        {children}
      </MainContainer>
    );
}
 
export default Background;