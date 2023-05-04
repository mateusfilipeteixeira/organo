import './Person.css'

const Person = ({ person, backgroundColor }) => {
  return (
    <div className="person">
      <div className='header' style={{ backgroundColor: backgroundColor }}>
        <img src={person.image} alt={person.name} />
      </div>
      <div className='footer'>
        <h4>{person.name}</h4>
        <h5>{person.team}</h5>
      </div>
    </div>
  )
}

export default Person