import logo from './logo.svg';
import './App.css';
import PodCastEditor from './pages/podcastEditor';
import TestText from './pages/podcastEditor/mainCanvas/components/Subtitle/TestText';
import AudioWave from './pages/podcastEditor/mainCanvas/components/AudioWave';
import MainTopBar from './pages/podcastEditor/MainTopBar';
// import BarWave from './pages/podcastEditor/mainCanvas/components/AudioWaves/BarWave';
// import LineWave from './pages/podcastEditor/mainCanvas/components/AudioWaves/LineWave';

function App() {
  return (
    <div>
      <MainTopBar />
      <PodCastEditor />
      {/* <TestText /> */}
      {/* <BarWave /> */}
      {/* <LineWave /> */}
    </div>
  );
}

export default App;
