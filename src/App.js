import Header from "./componentes/Header"
import Cards from "./componentes/Cards"
import Pesquisa from "./componentes/Pesquisa"
import styled from "styled-components";
import './App.css';
import CardNovo from "./componentes/CardNovo"

const AppContainer = styled.div`
    width: 100vw;
    height: 100vh;
    background-image: linear-gradient(90deg, #002F52 35%, #326589 165%);
`

function App() {

  return (
    <AppContainer>
      <Header></Header>
      <Pesquisa></Pesquisa>
      <Cards></Cards>
      <CardNovo></CardNovo>
      <link
    async
    rel="stylesheet"
    href="https://cdn.jsdelivr.net/npm/semantic-ui@2/dist/semantic.min.css"
  />
  <script src="https://cdn.jsdelivr.net/npm/semantic-ui-react/dist/umd/semantic-ui-react.min.js"></script>

    </AppContainer>
  );
  }


export default App;
