import GlobalStyle, { AppLayout } from './styles/globalStyles';
import { Background as MainWrapper, MusicCard, PlayList, Player } from './components';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { tracks } from './tracks';
import { tracksLoaded } from './redux/trackSlice';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(tracksLoaded(tracks))
  }, [dispatch]);

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
