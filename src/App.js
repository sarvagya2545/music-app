import GlobalStyle, { MainContainer, GlassContainer, Bubble } from './styles/globalStyles';

const App = () => {
  return (
    <>
      <GlobalStyle />
      <MainContainer>
        <Bubble/>
        <GlassContainer>
          Container
        </GlassContainer>
      </MainContainer>
    </>
  );
}

export default App;
