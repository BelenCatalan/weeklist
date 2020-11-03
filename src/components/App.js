import logo from '../images/logo.svg';
import '../stylesheets/App.scss';
import Header from './Header'
import Week from './Week'

function App() {
  return (
    <div className="App">
      <Header/>
      <Week/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
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
