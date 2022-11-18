import logo from './logo.svg';
import './App.css';

function App() {
  const someStyle = {
    background: 'aqua',
    color: 'white',
    fontSize: '24px',
    fontWeight: 'bold',
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        { true &&
          <p style={someStyle}> {111+222+333}</p>
        }
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
