import logo from './logo.svg';
import './css/App.css';
import "./css/props.css";
import "./css/fonts.css"
import Sidebar from './screens/sidebar';
import Header from './screens/header';

function App() {
  return (
    <div className="App flex">
      <Sidebar />
    </div>
  );
}

export default App;
