import {BrowserRouter, Routes, Route} from "react-router-dom";
import Homepage from "./Components/Homepage";
import Header from "./Components/Header";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="container">
        <Routes>
          <Route to={"/"} element={<Homepage/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
