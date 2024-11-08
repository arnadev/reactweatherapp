import './App.css';
import Weather from './components/Weather';
import { WeatherProvider } from './contexts/WeatherContext';

function App() {
  return (
    <WeatherProvider>
      <Weather/>
    </WeatherProvider>
  );
}

export default App;
