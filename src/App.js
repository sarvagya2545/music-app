import GlobalStyle, { AppLayout, GridWide } from './styles/globalStyles';
import { Background as MainWrapper, MusicCard, PlayList, Player } from './components';

const App = () => {
  return (
    <>
      <GlobalStyle />
      <MainWrapper>
        <AppLayout>
          <MusicCard/>
          <PlayList/>
          <Player/>
        </AppLayout>
      </MainWrapper>
    </>
  );
}

export default App;
