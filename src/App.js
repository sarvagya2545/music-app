import GlobalStyle from './styles/globalStyles';
import { Background as MainWrapper, PlayList } from './components';

const App = () => {
  return (
    <>
      <GlobalStyle />
      <MainWrapper>
        <PlayList/>
      </MainWrapper>
    </>
  );
}

export default App;
