import './DropDown.css'

const DropDown = (props) => {
  return (
    <div className='dropdown'>
      <label>{props.label}</label>
      <select value={props.value} onChange={e => props.onChange(e.target.value)}>
        <option value='' disabled>Selecione uma opção</option>
        {props.items.map(item => <option key={item}>{item}</option>)}
      </select>
    </div>
  )
}

export default DropDown