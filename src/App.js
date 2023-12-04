import logo from './logo.svg';
import './App.css';

function App() {
  const surname = 'Дикий';
  const firstName = 'Павло';
  const group = '20333';

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <header className="App-header">
        <h1>{`${surname} ${firstName} ${group} навчальна група`}</h1>
      </header>
      </header>
    </div>
  );
}

export default App;
