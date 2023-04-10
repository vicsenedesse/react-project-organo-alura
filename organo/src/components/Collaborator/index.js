import './Collaborator.css'
import { AiFillCloseCircle, AiFillHeart, AiOutlineHeart } from 'react-icons/ai'

const Collaborator = ({colaborador, corFundo, onDelete, onFavorite}) => {
    function favoritar() {
        onFavorite(colaborador.id)
    }

    const propsFavorito = {
        size: 25,
        onClick: favoritar
    }

    return(
        <div className='colaborador'>
            <AiFillCloseCircle 
                className="deletar" 
                onClick={() => onDelete(colaborador.id)}
                size={25}
            />
            <div 
                className='cabecalho' 
                style={{ backgroundColor: corFundo }}>
                <img src={colaborador.imagem} alt={colaborador.nome}></img>
            </div>
            <div className='rodape'>
                <h4>{colaborador.nome}</h4>
                <h5>{colaborador.cargo}</h5>
                <div className='fav'>
                    {colaborador.favorito ? 
                        <AiFillHeart {...propsFavorito} color='#ff0000'/> : 
                        <AiOutlineHeart {...propsFavorito}/>
                    }
                </div>
            </div>
        </div>
    )
}

export default Collaborator