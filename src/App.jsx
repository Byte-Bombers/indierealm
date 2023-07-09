import About from "./components/routes/about/about.component";
import Navigation from "./components/routes/navigation/navigation.component";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}></Route>
    </Routes>
  );
};

export default App;
