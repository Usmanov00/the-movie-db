import {BrowserRouter, Routes, Route} from "react-router-dom";
import Homepage from "./Pages/Homepage";
import Header from "./Components/Header";
import MovieInfo from "./Pages/MovieInfo";
import Footer from "./Components/Footer";
import Person from "./Pages/Person";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path={"/"} element={<Homepage/>}/>
        <Route path={"/movie/:id"} element={<MovieInfo />}/>
        <Route path={"/person/:id"} element={<Person />}/>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
