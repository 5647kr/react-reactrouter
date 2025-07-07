import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Home from "./pages/Home/Home";
import Product from "./pages/Product/Product";
import Chat from "./pages/Chat/Chat";
import Profile from "./pages/Profile/Profile"
import Detail from "./pages/Product/detail/Detail";


function App() {
  return (
    <>
      <BrowserRouter basename="/reactrouter">
        <Routes>
          <Route path="/" element={<Home />}>Home</Route>
          <Route path="/product" element={<Product />}> 
            <Route path="" element={<Outlet />} />
            <Route path="123" element={<Detail />} />
          </Route>
          <Route path="/chat" element={<Chat />}>Chat</Route>
          <Route path="/profile" element={<Profile />}>Profile</Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
