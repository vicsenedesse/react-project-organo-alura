import Banner from './components/Banner';
import Form from './components/Form'
import { useState } from 'react'
import Team from './components/Team';
import { v4 as uuidv4 } from 'uuid';

function App() {

  const [times, setTimes] = useState ([
    {id: uuidv4(), nome: 'Programação', cor: '#D9F7E9'},
    {id: uuidv4(), nome: 'Front-end', cor: '#E8F8FF'},
    {id: uuidv4(), nome: 'Data Science', cor: '#F0F8E2'},
    {id: uuidv4(), nome: 'UX e Design', cor: '#FDE7E8'},
    {id: uuidv4(), nome: 'Mobile', cor: '#FAE5F5'},
    {id: uuidv4(), nome: 'Inovação e Gestão', cor: '#FFF5D9'}
  ]);

  const [colaboradores, setColaboradores] = useState([
    {id: uuidv4(), favorito: false, nome: 'Vicx', cargo: 'Analista', imagem: 'http://github.com/vicsenedesse.png', time: times[0].nome},
    {id: uuidv4(), favorito: false, nome: 'Vicx', cargo: 'Analista', imagem: 'http://github.com/vicsenedesse.png', time: times[1].nome},
    {id: uuidv4(), favorito: false, nome: 'Vicx', cargo: 'Analista', imagem: 'http://github.com/vicsenedesse.png', time: times[2].nome}
  ])

  const onCreateColaborador = (colaborador) => {
    console.log(colaborador)
    setColaboradores([...colaboradores, colaborador]);
  }

  function onDelete(id) {
    console.log(id);
    setColaboradores(colaboradores.filter(it => it.id !== id))
  }

  function onChangeColorTeam(cor, id) {
    setTimes(times.map(it => {
      if(it.id === id) {
        it.cor = cor;
      }
      return it;
    }))
  }

  function onCreateTeam(novoTime) {
    setTimes([...times, {...novoTime, id: uuidv4()}]);
  }

  function onFavorite(id) {
    setColaboradores(colaboradores.map(colaborador => {
      if (colaborador.id === id) colaborador.favorito = !colaborador.favorito;
      return colaborador;
    }))
  }

  return (
    <div className="App">
      <Banner></Banner>
      <Form 
        times={times.map(it => it.nome)} 
        onCreateColaborador={value => onCreateColaborador(value)}
        onCreateTeam={onCreateTeam}
      >
      </Form>
      {times.map(time =>
        <Team
          onFavorite={onFavorite}
          key={time.id}
          onChangeColorTeam={onChangeColorTeam}
          time={time}
          colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)}
          onDelete={onDelete}>
        </Team>
      )}
    </div>
  );
}

export default App;
