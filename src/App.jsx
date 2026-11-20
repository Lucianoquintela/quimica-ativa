import { Routes, Route } from "react-router-dom";

import Sobre from "./pages/Sobre";
import Posts from "./pages/Posts";
import Home from "./pages/HomeTemp";

import MainLayout from "./layouts/MainLayout";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="Posts" element={<Posts />} />
        <Route path="Sobre" element={<Sobre />} />
      </Route>
    </Routes>
  );
};

export default App;