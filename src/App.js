import Header from './components/Header'
import Players from './components/Players'
import { PlayerProvider } from './components/PlayerContext';

function App() {
  return (
    <PlayerProvider>
      <div className="container">
        <Header/>
        <Players/>
      </div>
    </PlayerProvider>
  );
}

export default App;
