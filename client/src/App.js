import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomeScreen from "./components/HomeScreen";
import { Container } from "react-bootstrap";
import Edit from "./components/Edit";

function App() {
  return (
    <Router>
      <main className="my-3">
      <Container>
        <Routes>
          <Route path="/" element={<HomeScreen />} exact />
          <Route path="/:id" element={<Edit />}/>
        </Routes>
      </Container>
      </main>
    </Router>
  );
}

export default App;
