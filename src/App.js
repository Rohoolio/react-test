import './App.css';
import { Navbar } from './components/navbar/index';

export default function App() {

  return (
    <div className="App">
      <Navbar />
      {/* USE GRAPHQL - APOLLO?
      Then remove the hookrouter and use the react-router-dom instead */}
    </div>
  );
}
