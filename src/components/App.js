import logo from '../images/logo.svg';
import '../stylesheets/App.scss';
import Header from './Header';
import Week from './Week';
import Food from './Food';

function App() {
  return (
    <div className="App">
      <Header/>
      <Week/>
      <Food/>
      
    </div>
  );
}

export default App;
