import { useEffect, useState } from 'react';
import { User } from '../SleeperAPI/models';
import { LeagueOverview } from './_models';
import { getAllLeaguesForUser, getUserData } from '../SleeperAPI/functions';
import { LeagueDisplayer } from './LeagueDisplayer';
import './Body.css';

export function Body() {
  const [username, setUsername] = useState<string>('');
  const [user, setUser] = useState<User | null>(null);
  const [leagues, setLeagues] = useState<LeagueOverview[]>([]);
  const [selectedLeagueId, setSelectedLeagueId] = useState<string | null>(null);

  const handleLeagueClick = (id: string) => {
    setSelectedLeagueId(id);
  };

  const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };

  const handleSubmit = async () => {
    if (!username.trim()) {
      console.log('Please enter a valid username');
      return;
    }

    try {
      const data = await getUserData(username);
      setUser(data);
      const leaguesData = await getAllLeaguesForUser(data.user_id);
      setLeagues(leaguesData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const sortedLeagues: LeagueOverview[] = selectedLeagueId
    ? [
        leagues.find((league) => league.id === selectedLeagueId),
        ...leagues.filter((league) => league.id !== selectedLeagueId),
      ].filter(Boolean) as LeagueOverview[]
    : leagues;

  return (
    <div className='App-body'>
      <div className="input-section">
        <input
          type="text"
          value={username}
          onChange={handleUsernameChange}
          placeholder="Enter username"
        />
        <button onClick={handleSubmit}>OK</button>
      </div>

      {user && (
        <div className="league-list">
          {sortedLeagues.map((league) => (
            <LeagueDisplayer
              key={league?.id}
              league={league}
              isSelected={league?.id === selectedLeagueId}
              onClick={() => handleLeagueClick(league?.id)}
            />
          ))}
        </div>
      )}
    </div>
  );
}
