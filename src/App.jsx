import Home from "./pages/Home";
import Spiderman from "./pages/Spiderman";
import Invincible from "./pages/Invincible";
import Container from "./components/Container";
import Header from "./components/Header";
import Menu from "./components/Menu";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import styled from "styled-components";

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

function App() {
  return (
    <>
      <BrowserRouter>
      <AppContainer>
        <Container>
          <Header />
          <Menu />
          <Routes>
            <Route  path="/" element={<Home />}/>
            <Route path="/spiderman" element={<Spiderman />}/>
            <Route path="/invincible" element={<Invincible />}/>
          </Routes>
        </Container>
        </AppContainer>
      </BrowserRouter>
    </>
  );
}

export default App;
