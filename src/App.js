import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home/Home";
import Product from "./pages/Product/Product";
import Chat from "./pages/Chat/Chat";
import Profile from "./pages/Profile/Profile"


function App() {
  return (
    <>
      <BrowserRouter basename="/reactrouter">
        <Routes>
          <Route path="/" element={<Home />}>Home</Route>
          <Route path="/product" element={<Product />}>Home</Route>
          <Route path="/chat" element={<Chat />}>Chat</Route>
          <Route path="/profile" element={<Profile />}>Profile</Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
