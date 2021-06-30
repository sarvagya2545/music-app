import GlobalStyle, { MainContainer, GlassContainer, Bubble } from './styles/globalStyles';

const App = () => {
  return (
    <>
      <GlobalStyle />
      <MainContainer>
        <Bubble
          bottom="10rem"
          left="-3rem"
        />
        <Bubble
          right="-3rem"
          top="2rem"
        />
        <GlassContainer>
          Container
        </GlassContainer>
      </MainContainer>
    </>
  );
}

export default App;
