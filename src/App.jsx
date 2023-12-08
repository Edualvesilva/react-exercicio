import Home from "./pages/Home";
import Spiderman from "./pages/Spiderman";
import Invincible from "./pages/Invincible";
import Container from "./components/Container";

function App() {
  return (
    <>
      <Container>
        <Home />
        <Spiderman />
        <Invincible />
      </Container>
    </>
  );
}

export default App;
