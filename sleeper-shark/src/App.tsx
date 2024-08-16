
import './App.css';
import { getManagerData } from './SleeperAPI/functions';
import { User } from './SleeperAPI/models';

function App() {

  async function localGetManagerData() {
    const data = await getManagerData('BigVeech')
    console.log(data)
    
  }
  return (
    <div className="App">
      
      <button onClick={async () => await localGetManagerData()}>
      Click Me
      </button>
    </div>
  );
}

export default App;
