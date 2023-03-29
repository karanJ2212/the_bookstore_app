import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Booklist from './components/Booklist/Booklist';
import Category from './components/Category/Category';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Booklist />} />

          <Route path="/Category" element={<Category />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
