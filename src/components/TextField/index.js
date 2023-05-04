import './TextField.css'

const TextField = (props) => {
  const onInput = (e) => {
    props.onChange(e.target.value)
  }

  return (
    <div className='textField'>
      <label>{props.label}</label>
      <input onChange={onInput} value={props.value} required={props.required} placeholder={props.placeholder} type="text" />
    </div>
  );

}

export default TextField