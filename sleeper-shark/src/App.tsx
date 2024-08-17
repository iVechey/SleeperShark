
import { useEffect, useState } from 'react';
import './App.css';
import { getAllLeaguesForUser, getUserData } from './SleeperAPI/functions';
import { User } from './SleeperAPI/models';

function App() {

  const [user, setUser] = useState<User | null>(null)

  async function localGetManagerData() {
    const data = await getUserData('BigVeech')
    setUser(data)
    
  }

  async function printLeagueInfo() {
    if(!user) {
      console.log('THERE IS NO USER');
      return
    }
    const data = await getAllLeaguesForUser(user.user_id)
    console.log(data)

  }
  return (
    <div className="App" key={user?.user_id}>
      
      <button onClick={async () => await localGetManagerData()}>
      Click Me
      </button>
      {user && <div>
        <button onClick={async () => await printLeagueInfo()}>
          Click here to print your league info
        </button>
        
        </div>}
    </div>
  );
}

export default App;
