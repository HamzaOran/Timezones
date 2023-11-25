import logo192 from './logo192.png';
import './App.css';
import ClockDashboard from './project/ClockDashboard';

function App() {
  return (
    <div className="main">
      <img src={logo192} alt="logo" className="logo" />
      <ClockDashboard />
    </div>
  );
}

export default App;
