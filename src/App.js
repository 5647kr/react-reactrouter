import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Home from "./pages/Home/Home";
import Product from "./pages/Product/Product";
import Chat from "./pages/Chat/Chat";
import Profile from "./pages/Profile/Profile"
import Detail from "./pages/Product/detail/Detail";


function App() {
  return (
    <>
      <BrowserRouter basename="/react-reactrouter">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<Outlet />}> 
            <Route path="" element={<Product />} />
            <Route path="123" element={<Detail />} />
          </Route>
          <Route path="/chat" element={<Chat />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
