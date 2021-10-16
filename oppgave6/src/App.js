import './styles.scss';
import Form from './components/Form';
import Main from './components/Main';
import Navbar from './components/Navbar';
import Title from './components/Title';
import Wrapper from './components/Wrapper';
import Todos from './components/Todos';

let dos = [{ title: 'nr1', todo: 'Random nre1text' }, { title: 'Todotitle', todo: 'Random text' }, { title: 'Todotitle', todo: 'Random text' }, { title: 'Todotitle', todo: 'Random text' }, { title: 'Todotitle', todo: 'Random text' }, { title: 'Todotitle', todo: 'Random text' }]

function App() {
  return (
    <>
<Navbar>
        <Title title={'HIOF'} style={'navBarTitle'}/>
  <p>User user</p>
  </Navbar>
  <Main>
    <Wrapper>
      <Form/>
    </Wrapper>
    <Wrapper>
      <Todos array={dos}/>
    </Wrapper>
  </Main>

  </>
  );
}

export default App;
