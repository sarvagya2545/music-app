import GlobalStyle, { MainContainer, GlassContainer } from './styles/globalStyles';

const App = () => {
  return (
    <>
      <GlobalStyle />
      <MainContainer>
        <GlassContainer>
          Container
        </GlassContainer>
      </MainContainer>
    </>
  );
}

export default App;
