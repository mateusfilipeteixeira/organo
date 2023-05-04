import Banner from './components/Banner';
import Form from './components/Form';
import { useState } from 'react';
import Team from './components/Team';

function App() {
  const teams = [
    {
      name: 'Programação',
      primaryColor: '#57c278',
      secondaryColor: '#D9F7E9'
    },
    {
      name: 'Front-end',
      primaryColor: '#82cffa',
      secondaryColor: '#e8f8ff'
    },
    {
      name: 'Back-end',
      primaryColor: '#a6d157',
      secondaryColor: '#f0f8e2'
    },
    {
      name: 'Mobile',
      primaryColor: '#e06b69',
      secondaryColor: '#fde7e8'
    },
    {
      name: 'Design',
      primaryColor: '#db3ebf',
      secondaryColor: '#fae9f5'
    },
    {
      name: 'Data Science',
      primaryColor: '#ffba05',
      secondaryColor: '#fff5d9'
    },
  ]

  const [persons, setPersons] = useState([])

  const addNew = (person) => {
    setPersons([...persons, person]);
  }

  return (
    <div className="App">
      <Banner />
      <Form teams={teams.map(team => team.name)} onSave={addNew} />
      {teams.map(team => <Team
        key={team.name}
        name={team.name}
        primaryColor={team.primaryColor}
        secondaryColor={team.secondaryColor}
        persons={persons.filter(person => person.team === team.name)}
      />)}
    </div>
  );
}

export default App;
