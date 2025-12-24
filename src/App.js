import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./pages/main/main";
import Snowfall from 'react-snowfall'
import Myau from "./pages/Myau/Myau";
import Love from "./pages/Love/Love";
import Podarok from "./pages/Podarok/Podarok";

function App() {
  return (
    <BrowserRouter>
      <Snowfall />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/test" element={<Main />} />
        <Route path="/myau" element={<Myau />} />
        <Route path="/love" element={<Love />} />
        <Route path="/podarok" element={<Podarok />} />
      </Routes>
    </BrowserRouter>
  );

}

export default App