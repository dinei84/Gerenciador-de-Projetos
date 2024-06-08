import {BrowserRouter as Router, Switch, Route, Routes, Link} from 'react-router-dom'
import Home from './components/pages/Home';
import Company from './components/pages/Company';
import Contact from './components/pages/Contact';
import NewProject from './components/pages/NewProject';
import Container from './components/pages/layout/Containe';

function App() {
  return (
    <Router>
      
        <div>
          <Link to='/'>Home</Link>
          <Link to='/company'>Company</Link>
          <Link to='/contact'>Contact</Link>
          <Link to='/newproject'>NewProject</Link>
        </div>

      <Container>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/company' element={<Company />}/>
          <Route path='/contact' element={<Contact />}/>
          <Route path='/newproject' element={<NewProject  />}/>
        </Routes>
      </Container>

      <p>Footer</p>

    </Router>
  );
}

export default App;
