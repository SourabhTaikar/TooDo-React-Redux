
import './App.css';
import Form from './Component/Form';
import Todos from './Component/Todos';

function App() {
  return (
    <div className='wrapper'>
      <h1>TODO app using React & Redux</h1>

      <Form></Form>
      <Todos></Todos>
      </div>
  );
}

export default App;
