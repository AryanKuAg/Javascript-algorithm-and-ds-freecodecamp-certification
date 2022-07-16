import logo from './logo.svg';
import './App.css';
import {useContext} from 'react' ;
import InfoContext from './store/info';

function App() {
  const dataFromContext = useContext(InfoContext);

  console.log(dataFromContext)
  console.log('something')

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick={() => {
          dataFromContext.nameChange('lksdjflsjfd')
        }}>Just press me</button>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}


export default App;
