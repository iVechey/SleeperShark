
import { useEffect, useState } from 'react';
import { getAllLeaguesForUser, getUserData } from './SleeperAPI/functions';
import { League, User } from './SleeperAPI/models';
import { LeagueDisplayer } from './Layouts/LeagueDisplayer';
import { LeagueOverview } from './Layouts/_models';
import { CoreLayout } from './Layouts/CoreLayout';

export function App() {

  return <CoreLayout />
  
}

