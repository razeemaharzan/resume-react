import './App.css';
import Home from './pages/Home/Home';
import Container from 'react-bootstrap/Container';
import Header from './pages/Header/Header'
function App() {

  return (
    <div>
      <Container>
        <Header></Header>
        <Home></Home>
      </Container>
    </div>


  );
}

export default App;
