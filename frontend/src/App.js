import { BrowserRouter as Router } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
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
