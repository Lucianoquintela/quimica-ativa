import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import MainLayout from "./layouts/MainLayout";

const Home = lazy(() => import("./pages/HomeTemp"));
const Sobre = lazy(() => import("./pages/Sobre"));
const Posts = lazy(() => import("./pages/Posts"));
const NotFound = lazy(() => import("./pages/NotFound"));
const SobreMim = lazy(() => import("./pages/SobreMim"));

const App = () => {
  return (
    <Suspense fallback={<p>Carregando página...</p>}>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="sobre" element={<Sobre />} />
          <Route path="sobremim" element={<SobreMim />} />
          <Route path="posts" element={<Posts />} />
          <Route path="posts/:id" element={<Posts />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default App;