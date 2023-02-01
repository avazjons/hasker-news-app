import { Route, Routes } from "react-router-dom";

import { Wrapper } from './containers/Wrapper';
import { Container } from './containers/Container';

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