import './Form.css'
import TextField from "../TextField";
import DropDown from '../DropDown';
import Button from '../Button';
import { useState } from 'react';

const Form = (props) => {
  const [name, setName] = useState('');
  const [profission, setProfission] = useState('');
  const [image, setImage] = useState('');
  const [team, setTeam] = useState('');

  const clearForm = () => {
    setName('');
    setProfission('');
    setImage('');
    setTeam('');
  }

  const onSave = (e) => {
    e.preventDefault();
    props.onSave({
      name, profission, image, team
    })

    clearForm();
  }

  return (
    <section className="form">
      <form onSubmit={onSave}>
        <h2>Preencha os dados para criar o cadastro do colaborador</h2>
        <TextField
          value={name}
          required
          label="Nome"
          placeholder="Digite seu nome"
          onChange={value => setName(value)}
        />
        <TextField
          value={profission}
          required
          label="Cargo"
          placeholder="Digite seu cargo"
          onChange={value => setProfission(value)}
        />
        <TextField
          value={image}
          label="Foto"
          placeholder="Insira a url da foto"
          onChange={value => setImage(value)}
        />
        <DropDown
          value={team}
          required
          label="Time"
          items={props.teams}
          onChange={value => setTeam(value)}
        />
        <Button>
          Cadastrar
        </Button>
      </form>
    </section>
  );
}


export default Form