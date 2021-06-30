import GlobalStyle from './styles/globalStyles';
import { Background as MainWrapper, MusicCard, PlayList } from './components';

const App = () => {
  return (
    <>
      <GlobalStyle />
      <MainWrapper>
        <PlayList/>
        <MusicCard />
      </MainWrapper>
    </>
  );
}

export default App;
