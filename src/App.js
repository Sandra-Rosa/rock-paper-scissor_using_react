import girl from './images/girl.png';
import './App.css';

function App() {
  return (
    <div className="App" >
      <span className="nav">Sandra Rosa Antony</span>
      <div className="main">
        <img src={girl} className='girl' alt="logo" />
          <span className="Heading">
            Rock-Paper-Scissors
          </span>
          
    </div>
    </div>
  );
}

export default App;
