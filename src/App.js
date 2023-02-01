import { Route, Routes } from "react-router-dom";

import { Wrapper } from './components/Wrapper';
import { Container } from './components/Container';

import Home from './pages/Home';

function App() {
  return (
    <Wrapper>
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Container>
    </Wrapper>
  );
}

export default App;