import "./App.css";
import Shoes from "./Components/Shoes/Shoes";
import Navbar  from "./Components/Navbar/Navbar"
import { Route, Routes } from "react-router-dom";


function App() {
  return <div>{/* Code goes here */}
  <Navbar/>
  <Routes>
        <Route path="shoes" element={<Shoes/>} />
        <Route
          path="/"
          element={
            <Shoes/>
          }
        />
      </Routes>
  </div>;
}

export default App;
