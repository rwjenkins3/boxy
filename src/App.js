import './App.css';
import { Box } from './components/Box';

function App() {
  return (
    <div className="container">

      <Box message="Hello" />

      <Box message="Box 2" color="green" />

      <Box message="Same" subheading="Hey" />

    </div>
  );
}

export default App;
