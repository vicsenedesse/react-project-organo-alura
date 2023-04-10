import Collaborator from '../Collaborator'
import './Team.css'
import hexToRgba from 'hex-to-rgba';

const Team = ({time, colaboradores, onDelete, onChangeColorTeam, onFavorite}) => {
    return (
        (colaboradores.length > 0) && 
        <section 
            className='team' 
            style={{backgroundColor: hexToRgba(time.cor, '0.6')}}>
            <input 
                onChange={ev => onChangeColorTeam(ev.target.value, time.id)}
                type='color' 
                className='input-cor'
                value={time.cor}
            ></input>
            <h3 style={{borderColor: time.cor}}>
                {time.nome}
            </h3>
            <div className='colaboradores'>
                {colaboradores.map((it, index) => {
                    return <Collaborator
                        key={index}
                        colaborador={it}
                        corFundo={time.cor}
                        onDelete={onDelete}
                        onFavorite={onFavorite}
                    ></Collaborator>
                })}
            </div>
        </section>
    )
}

export default Team