
import Index from "./pages/Index/Index";
import Home from "./pages/home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";


const App: React.FC<{}> = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path='/' element={<Index />}/>
          <Route path='home' element={<Home />}/>
        </Routes>
      </div>
    </BrowserRouter>

  );
};

export default App;
