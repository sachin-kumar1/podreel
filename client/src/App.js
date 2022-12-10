import logo from './logo.svg';
import './App.css';
import PodCastEditor from './pages/podcastEditor';
import TestText from './pages/podcastEditor/mainCanvas/components/Subtitle/TestText';

function App() {
  return (
    <div
      style={{
        width: '100%',
        height: '100%',
      }}
    >
      <PodCastEditor />
      {/* <TestText /> */}
    </div>
  );
}

export default App;
