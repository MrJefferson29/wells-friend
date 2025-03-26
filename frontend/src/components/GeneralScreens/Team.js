import React from 'react';
import './Team.css';
import ma1 from '../../Assets/ma1.jpg'
import ma2 from '../../Assets/ma2.jpg'
import ma3 from '../../Assets/ma3.jpg'
import ma4 from '../../Assets/ma4.jpg'
import moo from '../../Assets/moo.jpg'

const teamMembers = [
  
  {
    name: "Michael Daniel",
    title: "Chief Marketing Officer",
    image: ma1 // Placeholder image
  },
    {
    name: "Mark Jane",
    title: "Analytics & Insigths",
    image: moo // Placeholder image
  },
  {
    name: "Abraham Coleman",
    title: "Founder/COO",
    image: ma2// Placeholder image
  },
  {
    name: "Jeff Hardy",
    title: "VP Sales and Marketing",
    image: ma3 // Placeholder image
  },
  {
    name: "Clark Roberts",
    title: "Chief Finance Officer",
    image: ma4 // Placeholder image
  }
];

function Team() {
  return (
    <div className="App" style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
      <div className="team-section">
        <h1 className="team-header">The Management Team</h1>
        <div className="team-grid">
          {teamMembers.map((member, index) => (
            <div className="team-card" key={index}>
              <img src={member.image} alt={member.name} className="team-image"/>
              <h2 className="team-name">{member.name}</h2>
              <p className="team-title">{member.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Team;
