import Nav from "./component/Nav";
import Home from "./component/Home";
import Appoint from "./appointment/appoint";
import Notfound from "./notfound";
import Newapp from "./newapp";
import { BrowserRouter,Routes,Route } from "react-router-dom";



function App() {
  return (
    <div className="App">
     <Nav></Nav>
     <BrowserRouter>
     <Routes>
      <Route path="/" element={<Home/>}>home</Route>
      <Route path="/appoint" element={<Appoint/>}>home</Route>
      <Route path="/newapp" element={<Newapp/>}></Route>
      <Route path="*" element={<Notfound/>} ></Route>
     </Routes>
     </BrowserRouter>
     
    </div>
  );
}

export default App;
