import './App.css';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Login from './screens/Login';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path= '/login' element={<><Login /></>}/>
          <Route path= '/' element={<><Header /></>}/>
        </Routes>
      </Router>
    <h1>amazona</h1>
    </div>
  );
}

export default App;
