import GlobalStyle from './styles/globalStyles';
import { Background as MainWrapper, MusicCard, PlayList, Player } from './components';

const App = () => {
  return (
    <>
      <GlobalStyle />
      <MainWrapper>
        {/* <PlayList/>
        <MusicCard /> */}
      <Player/>
      </MainWrapper>
    </>
  );
}

export default App;
