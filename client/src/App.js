import logo from './logo.svg';
import './App.css';
import PodCastEditor from './pages/podcastEditor';
import TestText from './pages/podcastEditor/mainCanvas/components/Subtitle/TestText';
import AudioWave from './pages/podcastEditor/mainCanvas/components/AudioWave';
import MainTopBar from './pages/podcastEditor/MainTopBar';
import { Route, Routes } from 'react-router-dom';
import AudioUpload from './pages/fileUpload';
// import BarWave from './pages/podcastEditor/mainCanvas/components/AudioWaves/BarWave';
// import LineWave from './pages/podcastEditor/mainCanvas/components/AudioWaves/LineWave';

function App() {
  return (
    <Routes>
      <Route path='/' element={<AudioUpload/>} />
      <Route path='/editor' element={<PodCastEditor />} />
    </Routes>
    // <div>
    //   <MainTopBar />
    //   <PodCastEditor />
    // </div>
  );
}

export default App;
