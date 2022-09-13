
import './App.css';
import MyForm from './components/MyForm';

function App() {
  return (
    <div className="App">
      <h2>Meu Formulario em React</h2>
      
      <MyForm user={{name:"Lucas", email:"lucasdossantossilva731@gmail.com", bio:"Estou estudando programação web!", role:"admin"}} />
    </div>
  );
}

export default App;
