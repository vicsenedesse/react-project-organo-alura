import Button from '../Button'
import Input from '../Input'
import Select from '../Select'
import './Form.css'
import { useState } from 'react'

const Form = (props) => {

    const [nome, setNome] = useState('');
    const [cargo, setCargo] = useState('');
    const [imagem, setImagem] = useState('');
    const [time, setTime] = useState('');
    const [nomeTime, setNomeTime] = useState('');
    const [corTime, setCorTime] = useState('');


    const onSubmitColaborador = (event) => {
        event.preventDefault();
        props.onCreateColaborador({
            nome,
            cargo,
            imagem,
            time
        })
        setNome('');
        setCargo('');
        setImagem('');
        setTime('');
    }

    const onSubmitTime = (event) => {
        event.preventDefault();
        props.onCreateTeam({
            nome: nomeTime,
            cor: corTime,
        })
        setNomeTime('');
        setCorTime('');
    }
    
    return (
        <section className='form'>
            <form onSubmit={onSubmitColaborador}>
                <h2>Preencha os dados ...</h2>
                <Input 
                    required={true} 
                    label="Nome" 
                    placeholder="Digite seu nome"
                    onChange={value => setNome(value)}
                    value={nome}>
                </Input>
                <Input 
                    required={true} 
                    label="Cargo" 
                    placeholder="Digite seu cargo"
                    onChange={value => setCargo(value)}
                    value={cargo}>
                </Input>
                <Input 
                    label="Imagem" 
                    placeholder="Digite a imagem"
                    onChange={value => setImagem(value)}
                    value={imagem}>
                </Input>
                <Select 
                    required={true} 
                    label="Time" 
                    lista={props.times}
                    onChange={value => setTime(value)}
                    value={time}>
                </Select>
                <Button>Criar Card</Button>
            </form>
            <form onSubmit={onSubmitTime}>
                <h2>Crie um novo time ...</h2>
                <Input 
                    required
                    label="Nome" 
                    placeholder="Digite o nome do time"
                    onChange={value => setNomeTime(value)}
                    value={nomeTime}>
                </Input>
                <Input 
                    required
                    label="Cor" 
                    placeholder="Digite a cor do time"
                    onChange={value => setCorTime(value)}
                    value={corTime}
                    type="color">
                </Input>
                <Button>Criar Novo Time</Button>
            </form>
        </section>
    )
}

export default Form