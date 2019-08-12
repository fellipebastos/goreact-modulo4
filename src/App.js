import React, { Fragment } from 'react';

// Styles
import GlobalStyle from './styles/global';

// Components
import Sidebar from './components/Sidebar';

const App = () => (
  <Fragment>
    <GlobalStyle />
    <Sidebar />
  </Fragment>
);

export default App;
