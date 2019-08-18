import React from 'react';

// Styles
import GlobalStyle from './styles/global';
import { Wrapper, Container } from './styles/components';

// Components
import Sidebar from './components/Sidebar';
import Player from './components/Player';

const App = () => (
  <>
    <GlobalStyle />
    <Wrapper>
      <Container>
        <Sidebar />
      </Container>
      <Player />
    </Wrapper>
  </>
);

export default App;
