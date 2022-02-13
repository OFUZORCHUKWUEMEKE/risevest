import logo from './logo.svg';
import './App.css';
import Landing from './components/Landing';
import Body from './components/Body';
import Assets from './components/Assets'
import AnadaBanger from './components/AnadaBanger';
import styled from 'styled-components'
import Down from './components/Down';
import Footer from './components/Footer';

function App() {
  return (
    <Container>
        <Landing/>
        <Body/> 
        <Assets/>
        <AnadaBanger/>
        <Down/>
        <Footer/>
    </Container>
  
  );
}
const Container = styled.div`
  /* overflow: hidden; */
  overflow-x: hidden;
`

export default App;