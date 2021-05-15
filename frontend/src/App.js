import { BrowserRouter as Router } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'reactjs-popup/dist/index.css';
import './App.css';
import AppRoute from 'AppRoute';

function App() {
  return (
    <Router>
        <AppRoute/>
    </Router>
  );
}

export default App;
