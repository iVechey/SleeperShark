import React from 'react';
import './LeagueDisplayer.css';

type LeagueOverview = {
  name: string;
  id: string;
  ppr: number;
  te_ppr: number;
  managers: number;
}

type Props = {
  league: LeagueOverview;
  isSelected: boolean;
  onClick: () => void;
}

export function LeagueDisplayer({ league, isSelected, onClick }: Props) {
    
  const tePprLabel = league.te_ppr === 0.5 ? 'TEP' :
                     league.te_ppr === 1 ? 'TEP+' :
                     league.te_ppr === 1.5 ? 'TEP++' : 'TEP';
  
  const scoringType = league.ppr === 0 ? 'Standard' :
                      league.ppr === 1 ? 'PPR' :
                      league.ppr === 0.5 ? 'Half-PPR' : 'Unknown';

  return (
    <div
      className={`league-card ${isSelected ? 'selected' : 'not-selected'}`}
      onClick={onClick}
    >
      <h2 className="league-name">{league.name}</h2>
      <div className="league-details">
        <span className="te-ppr-label">{tePprLabel}</span>
        <span className="scoring-type">{scoringType}</span>
        <div className="managers">
          <span className="manager-icon">👤</span>
          <span>{league.managers}</span>
        </div>
      </div>
    </div>
  );
}
