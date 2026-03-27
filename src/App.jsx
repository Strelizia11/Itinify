import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header";
import Body from "./components/body/main";
import Create from "./components/body/createForm";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Body />} />
        <Route path="/create" element={<Create />} />
      </Routes>
    </Router>
  );
}

export default App;