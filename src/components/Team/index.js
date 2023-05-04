import Person from '../Person'
import './Team.css'

const Team = (props) => {
  return (
    props.persons.length > 0 &&
    <section className='team' style={{ backgroundColor: props.secondaryColor }}>
      <h3 style={{ borderColor: props.primaryColor }}>{props.name}</h3>
      <div className='persons'>
        {props.persons.map(person => <Person key={person.name} person={person} backgroundColor={props.primaryColor} />)}
      </div>
    </section>
  )
}

export default Team