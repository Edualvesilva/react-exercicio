import Home from "./pages/Home";
import Spiderman from "./pages/Spiderman";
import Invincible from "./pages/Invincible";
import Container from "./components/Container";
import Header from "./components/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Container>
          <Header />
          <Routes>
            <Route  path="/" element={<Home />}/>
            <Route path="/spiderman" element={<Spiderman />}/>
            <Route path="/invincible" element={<Invincible />}/>
          </Routes>
        </Container>
      </BrowserRouter>
    </>
  );
}

export default App;
