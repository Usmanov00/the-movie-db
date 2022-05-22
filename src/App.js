import {BrowserRouter, Routes, Route} from "react-router-dom";
import Homepage from "./Pages/Homepage";
import Header from "./Components/Header";
import MovieInfo from "./Pages/MovieInfo";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path={"/"} element={<Homepage/>}/>
        <Route path={"/movie/:id"} element={<MovieInfo />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
