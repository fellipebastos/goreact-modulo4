import React from 'react';

// Styles
import { Container, NewPlaylist, Nav } from './styles';

// Components
import AddPlaylistIcon from '../../assets/images/add_playlist.svg';

const Sidebar = () => (
  <Container>
    <div>
      <Nav>
        <li>
          <a href="">Navegar</a>
        </li>
        <li>
          <a href="">Rádio</a>
        </li>
      </Nav>
    </div>
    <NewPlaylist>
      <img src={AddPlaylistIcon} alt="Adicionar Playlist" />
      Nova Playlist
    </NewPlaylist>
  </Container>
);

export default Sidebar;
